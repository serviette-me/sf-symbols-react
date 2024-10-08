import { IconProps } from "../../types"
import React from "react"

export default function ClockBadgeCheckmarkIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.384765625 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C16.7477 29.8591 18.4977 29.5451 20.1247 28.9431C18.9357 27.7671 18.0467 26.2771 17.5957 24.6371C16.7477 24.8831 15.8597 24.9921 14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C19.7007 4.8671 23.7207 8.1891 24.7457 12.6741C26.3457 12.3051 28.0687 12.3181 29.7227 12.8511C28.6977 5.6051 22.4487 0.0001 14.9297 0.0001C6.6987 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.6987 29.8591 14.9297 29.8591ZM9.1057 17.6231H14.9297C15.8727 17.6231 16.6247 16.8711 16.6247 15.9281V8.1481C16.6247 7.1911 15.8727 6.4531 14.9297 6.4531C13.9867 6.4531 13.2347 7.1911 13.2347 8.1481V14.2321H9.1057C8.1617 14.2321 7.4097 14.9841 7.4097 15.9281C7.4097 16.8711 8.1617 17.6231 9.1057 17.6231ZM26.9337 29.5581C31.0077 29.5581 34.3847 26.1541 34.3847 22.0941C34.3847 18.0191 31.0077 14.6561 26.9337 14.6561C22.8457 14.6561 19.4827 18.0191 19.4827 22.0941C19.4827 26.1541 22.8457 29.5581 26.9337 29.5581ZM26.2907 26.2231C25.8807 26.2231 25.4027 26.1131 25.1017 25.7711L22.9007 23.4331C22.6267 23.1331 22.4077 22.7641 22.4077 22.3531C22.4077 21.3281 23.1877 20.8491 23.9397 20.8491C24.3637 20.8491 24.7327 20.9591 25.0057 21.2731L26.1547 22.6411L28.8887 18.8811C29.1897 18.4571 29.6547 18.2241 30.1467 18.2241C30.9807 18.2241 31.6507 18.8941 31.6507 19.7151C31.6507 19.9741 31.5687 20.2891 31.3907 20.5351L27.4937 25.6761C27.2477 26.0171 26.7697 26.2231 26.2907 26.2231Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.71484375 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C16.2967 28.8886 18.1017 28.5196 19.7557 27.8636C18.9077 26.9746 18.2517 25.8946 17.8687 24.7186C16.7887 25.0876 15.6407 25.2926 14.4377 25.2926C8.4217 25.2926 3.5957 20.4536 3.5957 14.4376C3.5957 8.4356 8.4217 3.5956 14.4237 3.5956C19.7557 3.5956 24.1857 7.4376 25.0877 12.5236C26.2227 12.2776 27.5897 12.3186 28.7657 12.6606C27.8637 5.5646 21.7387 -0.0004 14.4237 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5077 28.8886 14.4377 28.8886ZM7.9437 16.5296H14.4237C15.1757 16.5296 15.7497 15.9416 15.7497 15.2036V6.6996C15.7497 5.9606 15.1757 5.3866 14.4237 5.3866C13.6857 5.3866 13.1117 5.9606 13.1117 6.6996V13.8906H7.9437C7.2047 13.8906 6.6307 14.4646 6.6307 15.2036C6.6307 15.9416 7.2047 16.5296 7.9437 16.5296ZM26.5097 28.8066C30.4337 28.8066 33.7147 25.5256 33.7147 21.6016C33.7147 17.6636 30.4607 14.4106 26.5097 14.4106C22.5727 14.4106 19.3187 17.6636 19.3187 21.6016C19.3187 25.5386 22.5727 28.8066 26.5097 28.8066ZM25.7847 25.5386C25.4567 25.5386 25.0877 25.4296 24.8417 25.1696L22.5857 22.7226C22.3667 22.4906 22.2307 22.1896 22.2307 21.8746C22.2307 21.1226 22.8047 20.6996 23.4197 20.6996C23.7757 20.6996 24.0757 20.8226 24.2817 21.0546L25.6897 22.6546L28.7247 18.4566C28.9567 18.1286 29.3127 17.9376 29.7227 17.9376C30.3657 17.9376 30.8987 18.4566 30.8987 19.1136C30.8987 19.3186 30.8297 19.5646 30.6797 19.7696L26.7417 25.1016C26.5507 25.3746 26.1677 25.5386 25.7847 25.5386Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.0703125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C16.5427 29.4084 18.3067 29.0664 19.9477 28.4374C18.9217 27.3984 18.1427 26.0994 17.7187 24.6774C16.7757 24.9924 15.7497 25.1424 14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9137 4.2794 14.6977 4.2794C19.7287 4.2794 23.9397 7.8474 24.8967 12.6054C26.2907 12.3044 27.8497 12.3184 29.2717 12.7554C28.3007 5.5914 22.1207 0.0004 14.6977 0.0004C6.6037 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM8.5587 17.1174H14.6977C15.5447 17.1174 16.2147 16.4474 16.2147 15.5994V7.4784C16.2147 6.6174 15.5447 5.9614 14.6977 5.9614C13.8497 5.9614 13.1797 6.6174 13.1797 7.4784V14.0824H8.5587C7.7107 14.0824 7.0407 14.7384 7.0407 15.5994C7.0407 16.4474 7.7107 17.1174 8.5587 17.1174ZM26.7287 29.2034C30.7347 29.2034 34.0707 25.8674 34.0707 21.8614C34.0707 17.8554 30.7477 14.5474 26.7287 14.5474C22.7227 14.5474 19.4007 17.8554 19.4007 21.8614C19.4007 25.8674 22.7227 29.2034 26.7287 29.2034ZM26.0587 25.9084C25.6757 25.9084 25.2517 25.7984 24.9787 25.4984L22.7497 23.1054C22.5037 22.8324 22.3127 22.5044 22.3127 22.1344C22.3127 21.2464 23.0097 20.7814 23.6937 20.7814C24.0897 20.7814 24.4177 20.9044 24.6637 21.1774L25.9357 22.6544L28.8207 18.6894C29.0797 18.3064 29.4907 18.0884 29.9417 18.0884C30.6937 18.0884 31.2947 18.6894 31.2947 19.4414C31.2947 19.6734 31.2267 19.9614 31.0487 20.1794L27.1387 25.4164C26.9197 25.7164 26.4827 25.9084 26.0587 25.9084Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.56640625 27.6171875"
          className={className}
        >
          <path
            d="              M13.7264 27.426C15.7094 27.426 17.6234 26.988 19.3594 26.182C18.9624 25.73 18.6484 25.225 18.3884 24.691C16.9664 25.307 15.3804 25.648 13.7264 25.648C7.1094 25.648 1.7914 20.316 1.7914 13.713C1.7914 7.096 7.0954 1.764 13.7124 1.764C19.8924 1.764 24.9644 6.453 25.5664 12.482C26.0994 12.428 26.8244 12.469 27.3714 12.592C26.7964 5.592 20.8364 0 13.7124 0C6.2074 0 0.0004 6.193 0.0004 13.713C0.0004 21.219 6.2074 27.426 13.7264 27.426ZM6.2894 15.053H13.7124C14.1364 15.053 14.4644 14.725 14.4644 14.301V4.717C14.4644 4.293 14.1364 3.979 13.7124 3.979C13.3024 3.979 12.9744 4.293 12.9744 4.717V13.563H6.2894C5.8654 13.563 5.5374 13.891 5.5374 14.301C5.5374 14.725 5.8654 15.053 6.2894 15.053ZM25.7714 27.617C29.4624 27.617 32.5664 24.541 32.5664 20.822C32.5664 17.09 29.5044 14.014 25.7714 14.014C22.0394 14.014 18.9764 17.09 18.9764 20.822C18.9764 24.555 22.0394 27.617 25.7714 27.617ZM24.9234 24.404C24.7184 24.404 24.4864 24.322 24.3224 24.145L22.0664 21.656C21.9294 21.506 21.8614 21.287 21.8614 21.109C21.8614 20.686 22.1894 20.371 22.5994 20.371C22.8594 20.371 23.0504 20.508 23.1874 20.645L24.8964 22.49L28.2184 17.869C28.3694 17.678 28.5874 17.555 28.8474 17.555C29.2444 17.555 29.5864 17.869 29.5864 18.279C29.5864 18.43 29.5314 18.594 29.4214 18.744L25.5394 24.117C25.4164 24.295 25.1834 24.404 24.9234 24.404Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.291015625 28.314453125"
          className={className}
        >
          <path
            d="              M14.1227 28.2461C16.0097 28.2461 17.8417 27.8631 19.5237 27.1521C18.8807 26.4551 18.3887 25.6351 18.0327 24.7601C16.8167 25.2111 15.5037 25.4711 14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C19.7967 2.7891 24.4867 6.9451 25.3067 12.4001C26.1547 12.2641 27.2757 12.3051 28.1367 12.5231C27.3297 5.5231 21.3007 0.0001 14.1097 0.0001C6.3707 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3847 28.2461 14.1227 28.2461ZM7.2047 15.8181H14.1097C14.7247 15.8181 15.1897 15.3401 15.1897 14.7381V5.7691C15.1897 5.1681 14.7247 4.6891 14.1097 4.6891C13.5077 4.6891 13.0297 5.1681 13.0297 5.7691V13.6581H7.2047C6.5897 13.6581 6.1247 14.1231 6.1247 14.7381C6.1247 15.3401 6.5897 15.8181 7.2047 15.8181ZM26.2497 28.3141C30.0777 28.3141 33.2907 25.1151 33.2907 21.2731C33.2907 17.4181 30.1057 14.2461 26.2497 14.2461C22.3947 14.2461 19.2087 17.4181 19.2087 21.2731C19.2087 25.1421 22.3947 28.3141 26.2497 28.3141ZM25.4567 25.0881C25.1977 25.0881 24.8827 24.9921 24.6777 24.7731L22.3807 22.2711C22.2027 22.0661 22.1077 21.8061 22.1077 21.5741C22.1077 20.9861 22.5587 20.5901 23.0917 20.5901C23.4067 20.5901 23.6527 20.7261 23.8167 20.9041L25.4027 22.6401L28.6287 18.1701C28.8067 17.9101 29.0937 17.7461 29.4487 17.7461C29.9687 17.7461 30.4197 18.1701 30.4197 18.7171C30.4197 18.8811 30.3517 19.0991 30.2147 19.2771L26.2637 24.7321C26.0997 24.9511 25.7847 25.0881 25.4567 25.0881Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.044921875 28.041015625"
          className={className}
        >
          <path
            d="              M13.9457 27.8904C15.8597 27.8904 17.7047 27.4944 19.3867 26.7554C18.8667 26.1544 18.4567 25.4844 18.1287 24.7734C16.8437 25.2794 15.4217 25.5664 13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C19.8237 2.3244 24.6507 6.6714 25.4297 12.3454C26.0997 12.2504 27.0977 12.3044 27.7947 12.4554C27.0297 5.5094 21.0407 0.0004 13.9317 0.0004C6.3027 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3167 27.8904 13.9457 27.8904ZM6.7817 15.4214H13.9317C14.4647 15.4214 14.8887 15.0114 14.8887 14.4644V5.2504C14.8887 4.7164 14.4647 4.3064 13.9317 4.3064C13.3987 4.3064 12.9887 4.7164 12.9887 5.2504V13.5214H6.7817C6.2477 13.5214 5.8377 13.9314 5.8377 14.4644C5.8377 15.0114 6.2477 15.4214 6.7817 15.4214ZM26.0997 28.0414C29.8727 28.0414 33.0447 24.8964 33.0447 21.0954C33.0447 17.2814 29.9137 14.1504 26.0997 14.1504C22.2987 14.1504 19.1547 17.2954 19.1547 21.0954C19.1547 24.9234 22.2987 28.0414 26.0997 28.0414ZM25.2657 24.8414C25.0467 24.8414 24.7597 24.7464 24.5817 24.5544L22.2717 22.0114C22.1077 21.8344 22.0527 21.5874 22.0527 21.3964C22.0527 20.9044 22.4217 20.5354 22.9007 20.5354C23.1877 20.5354 23.4067 20.6714 23.5567 20.8224L25.2387 22.6404L28.5737 18.0194C28.7247 17.7874 28.9847 17.6364 29.2847 17.6364C29.7497 17.6364 30.1467 18.0054 30.1467 18.4844C30.1467 18.6344 30.0917 18.8264 29.9547 19.0034L25.9907 24.5134C25.8397 24.7184 25.5667 24.8414 25.2657 24.8414Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.46875 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C16.1327 28.5199 17.9507 28.1509 19.6187 27.4529C18.8947 26.6739 18.3337 25.7439 17.9647 24.7329C16.8167 25.1559 15.5587 25.3889 14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C19.7827 3.1309 24.3637 7.1639 25.2107 12.4549C26.1817 12.2769 27.4117 12.3179 28.4097 12.5779C27.5627 5.5509 21.4917 -0.0001 14.2457 -0.0001C6.4257 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM7.5197 16.1329H14.2457C14.9157 16.1329 15.4357 15.5999 15.4357 14.9429V6.1799C15.4357 5.5099 14.9157 4.9899 14.2457 4.9899C13.5897 4.9899 13.0567 5.5099 13.0567 6.1799V13.7539H7.5197C6.8497 13.7539 6.3437 14.2739 6.3437 14.9429C6.3437 15.5999 6.8497 16.1329 7.5197 16.1329ZM26.3597 28.5329C30.2287 28.5329 33.4687 25.2929 33.4687 21.4099C33.4687 17.5269 30.2557 14.3149 26.3597 14.3149C22.4767 14.3149 19.2637 17.5269 19.2637 21.4099C19.2637 25.3199 22.4767 28.5329 26.3597 28.5329ZM25.5937 25.2789C25.3067 25.2789 24.9647 25.1839 24.7457 24.9509L22.4767 22.4629C22.2847 22.2579 22.1617 21.9709 22.1617 21.6969C22.1617 21.0409 22.6677 20.6449 23.2287 20.6449C23.5567 20.6449 23.8297 20.7679 24.0217 20.9729L25.5257 22.6539L28.6697 18.2929C28.8747 18.0059 29.1897 17.8279 29.5587 17.8279C30.1467 17.8279 30.6247 18.2929 30.6247 18.8809C30.6247 19.0719 30.5567 19.3049 30.4197 19.4959L26.4687 24.8969C26.2907 25.1289 25.9487 25.2789 25.5937 25.2789Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.91015625 27.056640625"
          className={className}
        >
          <path
            d="              M13.4124 26.8102C15.5044 26.8102 17.5134 26.3182 19.2914 25.4292C19.0584 25.1702 18.8674 24.8832 18.7034 24.5822C17.1034 25.3472 15.2984 25.7712 13.4124 25.7712C6.5764 25.7712 1.0524 20.2342 1.0524 13.4122C1.0524 6.5902 6.5764 1.0392 13.4124 1.0392C19.9744 1.0392 25.3614 6.1932 25.7304 12.6742C26.0724 12.6742 26.4554 12.7012 26.7964 12.7832C26.4554 5.7152 20.5484 0.0002 13.4124 0.0002C6.0434 0.0002 0.0004 6.0432 0.0004 13.4122C0.0004 20.7672 6.0434 26.8102 13.4124 26.8102ZM5.6054 14.5742H13.4124C13.6854 14.5742 13.8904 14.3692 13.8904 14.0822V4.0192C13.8904 3.7602 13.6854 3.5542 13.4124 3.5542C13.1524 3.5542 12.9474 3.7602 12.9474 4.0192V13.6172H5.6054C5.3324 13.6172 5.1274 13.8362 5.1274 14.0822C5.1274 14.3692 5.3324 14.5742 5.6054 14.5742ZM25.3064 27.0562C28.9164 27.0562 31.9104 24.0762 31.9104 20.4532C31.9104 16.8302 28.9294 13.8492 25.3064 13.8492C21.6974 13.8492 18.7034 16.8442 18.7034 20.4532C18.7034 24.0902 21.6974 27.0562 25.3064 27.0562ZM24.4594 23.8302C24.2814 23.8302 24.1034 23.7622 23.9664 23.6112L21.7654 21.2052C21.6564 21.0682 21.6014 20.9042 21.6014 20.7542C21.6014 20.4122 21.8614 20.1662 22.1894 20.1662C22.4214 20.1662 22.5584 20.2892 22.6684 20.4122L24.4184 22.2852L27.7544 17.6912C27.8634 17.5412 28.0414 17.4452 28.2464 17.4452C28.5604 17.4452 28.8344 17.6912 28.8344 18.0192C28.8344 18.1562 28.7794 18.2792 28.6974 18.4022L24.9374 23.5842C24.8284 23.7342 24.6644 23.8302 24.4594 23.8302Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.568359375 26.755859375"
          className={className}
        >
          <path
            d="              M13.2484 26.4961C15.3944 26.4961 17.4454 25.9761 19.2634 25.0471C19.1134 24.8691 18.9764 24.6911 18.8674 24.5141C17.1714 25.3481 15.2444 25.8261 13.2484 25.8261C6.3164 25.8261 0.6704 20.1801 0.6704 13.2481C0.6704 6.3031 6.3164 0.6701 13.2484 0.6701C20.0154 0.6701 25.5664 6.0431 25.8124 12.7561C26.0584 12.7831 26.2634 12.8101 26.4964 12.8651C26.2914 5.7561 20.4124 0.0001 13.2484 0.0001C5.9614 0.0001 0.0004 5.9611 0.0004 13.2481C0.0004 20.5351 5.9614 26.4961 13.2484 26.4961ZM5.2634 14.3141H13.2484C13.4534 14.3141 13.6034 14.1641 13.6034 13.9591V3.6501C13.6034 3.4591 13.4534 3.3221 13.2484 3.3221C13.0844 3.3221 12.9334 3.4591 12.9334 3.6501V13.6441H5.2634C5.0584 13.6441 4.9214 13.7951 4.9214 13.9591C4.9214 14.1641 5.0584 14.3141 5.2634 14.3141ZM25.0744 26.7561C28.6294 26.7561 31.5684 23.8301 31.5684 20.2621C31.5684 16.6801 28.6424 13.7541 25.0744 13.7541C21.5194 13.7541 18.5664 16.7071 18.5664 20.2621C18.5664 23.8301 21.5194 26.7561 25.0744 26.7561ZM24.2124 23.5291C24.0624 23.5291 23.8984 23.4611 23.7754 23.3241L21.6154 20.9591C21.5194 20.8361 21.4644 20.6991 21.4644 20.5491C21.4644 20.2621 21.6834 20.0561 21.9844 20.0561C22.1894 20.0561 22.3124 20.1801 22.4084 20.2751L24.1714 22.1621L27.5074 17.5961C27.6174 17.4591 27.7674 17.3771 27.9454 17.3771C28.2184 17.3771 28.4374 17.5961 28.4374 17.8691C28.4374 18.0061 28.3824 18.1151 28.3144 18.2241L24.6234 23.3101C24.5274 23.4471 24.4044 23.5291 24.2124 23.5291Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
