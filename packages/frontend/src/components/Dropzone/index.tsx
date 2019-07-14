import React, { FC, useCallback, useState, useEffect } from 'react';
import classNames from 'classnames';
import { useDropzone } from 'react-dropzone';
import { FiImage } from 'react-icons/fi';
// Styles
import Wrapper, { Preview } from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Dropzone');

interface IDropzoneProps {
  className?: string;
  [key: string]: any;
}

/**
 * @render react
 * @name Dropzone component
 * @description Dropzone component.
 * @example
 * <Dropzone />
 */

const Dropzone: FC<IDropzoneProps> = ({ className, ...rest }) => {
  const [files, setFiles] = useState([]);
  const accept = rest.accept || 'image/*';
  const onDrop = useCallback((acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file: any) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        }),
      ),
    );
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept,
    onDrop,
  });

  const renderPreview = files.map((file: any) => (
    <Preview key={file.name} src={file.preview} />
  ));

  useEffect(
    () => () => {
      files.forEach((file: any) => URL.revokeObjectURL(file.preview));
    },
    [files],
  );

  return (
    <Wrapper
      className={classNames('c-dropzone', className)}
      {...getRootProps({ refKey: 'ref' })}
    >
      {renderPreview}
      <input {...getInputProps()} />
      <FiImage />
    </Wrapper>
  );
};

export default Dropzone;
