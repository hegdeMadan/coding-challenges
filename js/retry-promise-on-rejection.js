/**
 * https://bigfrontend.dev/problem/retry-promise-on-rejection
 *
 * For a web application, fetching API data is a common task. But the API calls might fail because of Network problems. Usually we could show a screen for Network Error and ask users to retry.
 * One approach to handle this is auto retry when network error occurs.
 * You are asked to create a fetchWithAutoRetry(fetcher, count), which automatically fetch again when error happens, until the maximum count is met.
 * For the problem here, there is no need to detect network error, you can just retry on all promise rejections.
 */

/**
 * @param {() => Promise<any>} fetcher
 * @param {number} maximumRetryCount
 * @return {Promise<any>}
 */
function fetchWithAutoRetry(fetcher, maximumRetryCount) {
  return new Promise((resolve, reject) => {
    fetcher()
      .then(resolve)
      .catch((error) => {
        if (maximumRetryCount > 0) {
          fetchWithAutoRetry(fetcher, maximumRetryCount - 1)
            .then(resolve)
            .catch(reject);
        } else {
          reject(error);
        }
      });
  });
}

const fetcher = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('Network Error'));
    }, 1000);
  });
};

console.log(fetchWithAutoRetry(fetcher, 3));
