/**
 * A throttled function that only invokes `func` at most once per every `threshold` milliseconds.
 * @param func The function to throttle.
 * @param threshold The number of milliseconds to throttle invocations to.
 * @param scope  Where variables, functions, and objects are accessible in your code during runtime
 */

export default function throttle(
  func: Function,
  threshold: number = 250,
  scope?: any,
) {
  /**
   * @var last The last time `func` was executed.
   * @var timeoutID ID of the timeout you wish to clear, as returned by setTimeout().
   */
  let last: number, timeoutID: number | NodeJS.Timeout;

  return function(this: any) {
    let context = scope || this;
    let now = Date.now(),
      args = arguments;

    if (last && now < last + threshold) {
      if (typeof timeoutID === 'number') {
        clearTimeout(timeoutID);
      }

      timeoutID = setTimeout(function() {
        last = now;
        func.apply(context, args);
      }, threshold);
    } else {
      last = now;
      func.apply(context, args);
    }
  };
}
