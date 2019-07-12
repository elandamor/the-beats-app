import * as assert from "assert";
import ExtendableError from "extendable-error";

const isString = d => Object.prototype.toString.call(d) === "[object String]";
const isObject = d => Object.prototype.toString.call(d) === "[object Object]";
const isEmptyObject = d => Object.getOwnPropertyNames(d).length < 1;

export interface ErrorConfig {
  message: string;
  time_thrown?: string;
  data?: object;
  internalData?: object;
  options?: {
    showPath?: boolean;
    showLocations?: boolean;
  };
}

export interface ErrorInfo {
  code: string;
  field?: string;
  message: string;
  time_thrown: string;
  data?: object;
  path?: string;
  locations?: any;
}

export class ApolloError extends ExtendableError {
  code: string;
  field: string;
  message: string;
  time_thrown: string;
  data: object;
  internalData: object;
  path: any;
  locations: any;
  _showLocations: boolean = false;
  _showPath: boolean = false;

  // NOTE: The object passed to the Constructor is actually `ctorData`.
  //       We are binding the constructor to the code and config object
  //       for the first two parameters inside of `createError`
  constructor(code: string, config: ErrorConfig, ctorConfig: ErrorConfig) {
    super(
      (ctorConfig && ctorConfig.message) || (config && config.message) || ""
    );

    const t =
      (ctorConfig && ctorConfig.time_thrown) ||
      (config && config.time_thrown) ||
      new Date().toISOString();
    const m =
      (ctorConfig && ctorConfig.message) || (config && config.message) || "";
    const ctorData = (ctorConfig && ctorConfig.data) || {};
    const ctorInternalData = (ctorConfig && ctorConfig.internalData) || {};
    const configData = (config && config.data) || {};
    const configInternalData = (config && config.internalData) || {};
    const d = { ...this.data, ...configData, ...ctorData };
    const id = {
      ...this.internalData,
      ...configInternalData,
      ...ctorInternalData
    };
    const ctorOptions = (ctorConfig && ctorConfig.options) || {};
    const configOptions = (config && config.options) || {};
    const opts = { ...configOptions, ...ctorOptions };

    this.code = code;
    this.message = m;
    this.time_thrown = t;
    this.data = d;
    this.internalData = id;
    this._showLocations = !!opts.showLocations;
    this._showPath = !!opts.showPath;
  }

  serialize(): ErrorInfo {
    const {
      code,
      field,
      message,
      time_thrown,
      data,
      _showLocations,
      _showPath,
      path,
      locations
    } = this;

    const error: ErrorInfo = {
      code,
      ...(field && { field }),
      message,
      time_thrown,
      ...(!isEmptyObject(data) && { data }),
      path,
      locations
    };

    if (_showLocations) {
      error.locations = locations;
    }

    if (_showPath) {
      error.path = path;
    }

    return error;
  }
}

export const isInstance = e => e instanceof ApolloError;

export const createError = (code: string, config: ErrorConfig): ApolloError => {
  assert(
    isObject(config),
    "createError requires a config object as the second parameter"
  );
  assert(
    isString(config.message),
    'createError requires a "message" property on the config object passed as the second parameter'
  );
  // NOTE: The first two parameters give to the constructor will always be code and config
  //       Parameters passed to the constructor when `new` is invoked will be passed as
  //       subsequent parameters.
  return ApolloError.bind(null, code, config);
};

export const formatError = (error, returnNull = false): ErrorInfo => {
  const originalError = error ? error.originalError || error : null;

  if (!originalError) return returnNull ? null : error;

  const { code } = originalError;

  if (!code || !isInstance(originalError)) return returnNull ? null : error;

  const { time_thrown, data, _showLocations, _showPath } = originalError;
  const { message, locations, path } = error;

  if (message) {
    originalError.field =
      message.split(";").length > 1
        ? message
            .split(";")[1]
            .trim()
            .split(/\svalue./)[1]
        : undefined;
  }

  if (_showLocations) {
    originalError.locations = locations;
  }

  if (_showPath) {
    originalError.path = path;
  }

  return originalError.serialize();
};
