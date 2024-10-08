import { IconProps } from "../../types"
import React from "react"

export default function CartBadgeQuestionmarkIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.58203125 31.1171875"
          className={className}
        >
          <path
            d="              M31.1309 14.9024C35.2049 14.9024 38.5819 11.4984 38.5819 7.4374C38.5819 3.3634 35.2049 0.0004 31.1309 0.0004C27.0429 0.0004 23.6799 3.3634 23.6799 7.4374C23.6799 11.4984 27.0429 14.9024 31.1309 14.9024ZM11.4019 23.4204H27.1389C28.2599 23.4204 29.2849 22.6544 29.2849 21.3824C29.2849 20.1254 28.2599 19.3864 27.1389 19.3864H12.0309C11.8809 19.3864 11.7849 19.2504 11.7719 19.0994L11.5799 17.7734H27.5759C28.5739 17.7734 29.4079 17.5274 30.0509 17.0764C27.5899 16.7754 25.4159 15.5314 23.8849 13.7264H11.0199L10.4319 9.4334H21.6429C21.3559 8.0394 21.3689 6.7814 21.6429 5.3864H9.8709L9.8159 4.9494C9.5699 3.2134 8.6539 2.3384 6.5899 2.3384H2.4059C1.1209 2.3384 -0.0001 3.4314 -0.0001 4.7574C-0.0001 6.0704 1.1209 7.1774 2.4059 7.1774H5.2909L7.0959 19.4004C7.4649 21.9434 8.8729 23.4204 11.4019 23.4204ZM30.7479 9.0914C29.9819 9.0914 29.2719 8.7094 29.2719 7.9844V7.9164C29.2719 7.3414 29.6949 6.9184 30.3519 6.4534C31.0629 5.9744 31.4589 5.6874 31.4589 5.3454C31.4589 5.0864 31.2809 4.9084 30.9939 4.9084C30.7339 4.9084 30.5569 5.0174 30.2559 5.2914C30.0369 5.4824 29.7229 5.7694 29.0939 5.7694C28.1229 5.7694 27.6719 5.2094 27.6719 4.5934C27.6719 3.1854 29.4489 2.3794 31.1719 2.3794C33.2359 2.3794 34.7539 3.5684 34.7539 5.1684C34.7539 6.5074 33.7829 6.8364 33.0309 7.3414C32.7169 7.5474 32.4569 7.7934 32.3069 8.1484C32.0469 8.7914 31.4039 9.0914 30.7479 9.0914ZM30.7209 12.3864C29.8319 12.3864 29.1759 11.8944 29.1759 11.0474C29.1759 10.2264 29.8319 9.7204 30.7209 9.7204C31.6229 9.7204 32.2659 10.2264 32.2659 11.0474C32.2659 11.8944 31.6229 12.3864 30.7209 12.3864ZM12.6739 31.1174C14.3829 31.1174 15.7359 29.7504 15.7359 28.0414C15.7359 26.3594 14.3829 24.9784 12.6739 24.9784C10.9919 24.9784 9.5979 26.3594 9.5979 28.0414C9.5979 29.7504 10.9919 31.1174 12.6739 31.1174ZM24.6779 31.1174C26.3729 31.1174 27.7399 29.7504 27.7399 28.0414C27.7399 26.3594 26.3729 24.9784 24.6779 24.9784C22.9959 24.9784 21.6149 26.3594 21.6149 28.0414C21.6149 29.7504 22.9959 31.1174 24.6779 31.1174Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.693359375 30.091796875"
          className={className}
        >
          <path
            d="              M30.5019 14.3965C34.4119 14.3965 37.6929 11.1155 37.6929 7.1915C37.6929 3.2405 34.4399 -0.0005 30.5019 -0.0005C26.5509 -0.0005 23.2969 3.2535 23.2969 7.1915C23.2969 11.1285 26.5509 14.3965 30.5019 14.3965ZM11.2659 22.9145H27.0979C27.9319 22.9145 28.6699 22.3125 28.6699 21.3825C28.6699 20.4665 27.9319 19.8655 27.0979 19.8655H11.6899C11.2249 19.8655 10.9379 19.5375 10.8689 19.0445L10.6639 17.6645H27.3439C28.5469 17.6645 29.4219 17.2265 29.9959 16.4195C28.1909 16.2695 26.5509 15.5315 25.2659 14.4105C25.1149 14.5335 24.9239 14.6015 24.6909 14.6015L10.2399 14.6155L9.3649 8.4905H21.3559C21.1909 7.4925 21.2049 6.4395 21.3969 5.4415H8.9279L8.7769 4.3615C8.5719 2.9665 7.9299 2.2555 6.2069 2.2555H1.7089C0.7929 2.2555 -0.0001 3.0355 -0.0001 3.9785C-0.0001 4.9215 0.7929 5.7015 1.7089 5.7015H5.4549L7.4509 19.3325C7.7929 21.5605 9.0099 22.9145 11.2659 22.9145ZM30.2419 8.8735C29.6409 8.8735 29.1349 8.5445 29.1349 7.9575V7.8885C29.1349 7.1915 29.5859 6.7535 30.2149 6.3165C30.9399 5.8245 31.3499 5.5375 31.3499 5.0585C31.3499 4.6345 31.0219 4.3615 30.5289 4.3615C30.0919 4.3615 29.8049 4.5525 29.5039 4.8395C29.2579 5.0725 29.0119 5.3455 28.5059 5.3455C27.8089 5.3455 27.4399 4.9215 27.4399 4.4025C27.4399 3.1855 29.0249 2.3925 30.6109 2.3925C32.4979 2.3925 33.8109 3.4585 33.8109 4.9215C33.8109 6.1245 32.9899 6.5215 32.2249 7.0545C31.7869 7.3825 31.5139 7.6285 31.4179 8.0805C31.2539 8.5995 30.8159 8.8735 30.2419 8.8735ZM30.2289 11.8805C29.5039 11.8805 28.9429 11.4025 28.9429 10.6915C28.9429 10.0075 29.5179 9.5155 30.2289 9.5155C30.9809 9.5155 31.5269 10.0075 31.5269 10.6915C31.5139 11.4025 30.9809 11.8805 30.2289 11.8805ZM12.4279 30.0915C13.9039 30.0915 15.0799 28.9165 15.0799 27.4395C15.0799 25.9765 13.9039 24.8005 12.4279 24.8005C10.9789 24.8005 9.7889 25.9765 9.7889 27.4395C9.7889 28.9165 10.9789 30.0915 12.4279 30.0915ZM24.8279 30.0915C26.2909 30.0915 27.4669 28.9165 27.4669 27.4395C27.4669 25.9765 26.2909 24.8005 24.8279 24.8005C23.3649 24.8005 22.1759 25.9765 22.1759 27.4395C22.1759 28.9165 23.3649 30.0915 24.8279 30.0915Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.158203125 30.625"
          className={className}
        >
          <path
            d="              M30.8299 14.6566C34.8359 14.6566 38.1579 11.3206 38.1579 7.3146C38.1579 3.3086 34.8499 -0.0004 30.8299 -0.0004C26.8109 -0.0004 23.5019 3.3086 23.5019 7.3146C23.5019 11.3206 26.8109 14.6566 30.8299 14.6566ZM11.3339 23.1876H27.1249C28.0959 23.1876 28.9979 22.5036 28.9979 21.3826C28.9979 20.2886 28.0959 19.6056 27.1249 19.6056H11.8669C11.5659 19.6056 11.3889 19.3866 11.3479 19.0726L11.1559 17.7186H27.4669C28.5609 17.7186 29.4079 17.3906 30.0239 16.7616C27.8769 16.5296 25.9489 15.5316 24.5409 14.0546C24.4179 14.1096 24.2679 14.1366 24.1039 14.1366L10.6499 14.1506L9.9259 8.9956H21.5059C21.2869 7.7796 21.2869 6.6176 21.5329 5.4136H9.4199L9.3239 4.6756C9.1059 3.1036 8.3129 2.2966 6.3989 2.2966H2.0779C0.9709 2.2966 -0.0001 3.2536 -0.0001 4.3886C-0.0001 5.5236 0.9709 6.4806 2.0779 6.4806H5.3729L7.2599 19.3596C7.6149 21.7656 8.9409 23.1876 11.3339 23.1876ZM30.5159 8.9826C29.8179 8.9826 29.2169 8.6406 29.2169 7.9706V7.9026C29.2169 7.2736 29.6409 6.8356 30.2969 6.3846C30.9939 5.9066 31.4039 5.6196 31.4039 5.2086C31.4039 4.8676 31.1579 4.6486 30.7749 4.6486C30.4339 4.6486 30.2009 4.7986 29.8999 5.0726C29.6679 5.2906 29.3809 5.5646 28.8199 5.5646C27.9729 5.5646 27.5629 5.0726 27.5629 4.5116C27.5629 3.1856 29.2579 2.3926 30.9119 2.3926C32.8809 2.3926 34.3029 3.5136 34.3029 5.0586C34.3029 6.3296 33.4139 6.6856 32.6489 7.2046C32.2789 7.4646 32.0059 7.7106 31.8829 8.1076C31.6779 8.7086 31.1309 8.9826 30.5159 8.9826ZM30.4879 12.1406C29.6819 12.1406 29.0659 11.6616 29.0659 10.8826C29.0659 10.1306 29.6819 9.6246 30.4879 9.6246C31.3219 9.6246 31.9099 10.1306 31.9099 10.8826C31.9099 11.6616 31.3219 12.1406 30.4879 12.1406ZM12.5649 30.6246C14.1499 30.6246 15.4219 29.3536 15.4219 27.7676C15.4219 26.1816 14.1499 24.8966 12.5649 24.8966C10.9919 24.8966 9.6929 26.1816 9.6929 27.7676C9.6929 29.3536 10.9919 30.6246 12.5649 30.6246ZM24.7459 30.6246C26.3319 30.6246 27.6039 29.3536 27.6039 27.7676C27.6039 26.1816 26.3319 24.8966 24.7459 24.8966C23.1739 24.8966 21.8749 26.1816 21.8749 27.7676C21.8749 29.3536 23.1739 30.6246 24.7459 30.6246Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.50390625 28.615234375"
          className={className}
        >
          <path
            d="              M29.7089 13.6032C33.3999 13.6032 36.5039 10.5272 36.5039 6.8082C36.5039 3.0762 33.4279 0.0002 29.7089 0.0002C25.9769 0.0002 22.8999 3.0762 22.8999 6.8082C22.8999 10.5412 25.9769 13.6032 29.7089 13.6032ZM10.8969 22.0392H27.0839C27.4809 22.0392 27.8499 21.6972 27.8499 21.2462C27.8499 20.7952 27.4809 20.4532 27.0839 20.4532H11.1289C10.2679 20.4532 9.7339 19.9062 9.5979 18.9762L9.3379 17.1992H26.9749C28.4239 17.1992 29.2439 16.5702 29.6819 15.2032C28.8339 15.1892 28.0139 15.0392 27.2619 14.7242C27.0569 15.3262 26.7419 15.6132 26.1269 15.6132H9.0919L7.8199 7.0132H21.3419C21.3009 6.5212 21.3419 5.9062 21.4099 5.4272H7.5739L7.2599 3.2672C7.1369 2.4612 6.8499 2.0512 5.7559 2.0512H0.7789C0.3559 2.0512 -0.0001 2.4062 -0.0001 2.8442C-0.0001 3.2672 0.3559 3.6362 0.7789 3.6362H5.6599L7.9569 19.2222C8.2029 20.9592 9.1189 22.0392 10.8969 22.0392ZM29.5859 8.4632C29.1759 8.4632 28.9159 8.2172 28.9159 7.8062V7.7382C28.9159 6.9722 29.3129 6.5492 29.9549 6.0972C30.6929 5.5922 31.1719 5.2912 31.1719 4.6072C31.1719 4.0062 30.6519 3.6092 29.8869 3.6092C29.2309 3.6092 28.7789 3.9102 28.4919 4.2382C28.2599 4.4982 28.0959 4.7442 27.7269 4.7442C27.3569 4.7442 27.1109 4.4842 27.1109 4.1152C27.1109 3.1582 28.4239 2.3512 29.8729 2.3512C31.5269 2.3512 32.5799 3.3082 32.5799 4.5522C32.5799 5.5782 31.9919 6.0022 31.2129 6.5762C30.5839 7.0412 30.3239 7.3142 30.2699 7.8612C30.2419 8.2302 30.0239 8.4632 29.5859 8.4632ZM29.5859 11.1152C29.0529 11.1152 28.6289 10.6772 28.6289 10.1442C28.6289 9.6112 29.0659 9.1742 29.5859 9.1742C30.1329 9.1742 30.5699 9.6252 30.5569 10.1442C30.5569 10.6772 30.1189 11.1152 29.5859 11.1152ZM12.3049 28.6152C13.4939 28.6152 14.4379 27.6722 14.4379 26.4822C14.4379 25.2932 13.4939 24.3492 12.3049 24.3492C11.1149 24.3492 10.1719 25.2932 10.1719 26.4822C10.1719 27.6722 11.1149 28.6152 12.3049 28.6152ZM24.8689 28.6152C26.0589 28.6152 27.0019 27.6722 27.0019 26.4822C27.0019 25.2932 26.0589 24.3492 24.8689 24.3492C23.6799 24.3492 22.7229 25.2932 22.7229 26.4822C22.7229 27.6722 23.6799 28.6152 24.8689 28.6152Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.1328125 29.435546875"
          className={className}
        >
          <path
            d="              M30.0919 14.0824C33.9199 14.0824 37.1329 10.8824 37.1329 7.0414C37.1329 3.1854 33.9469 0.0004 30.0919 0.0004C26.2359 0.0004 23.0649 3.1854 23.0649 7.0414C23.0649 10.9104 26.2359 14.0824 30.0919 14.0824ZM11.1699 22.5994H27.0839C27.7269 22.5994 28.2869 22.1074 28.2869 21.3964C28.2869 20.6854 27.7269 20.1934 27.0839 20.1934H11.4709C10.8009 20.1934 10.3909 19.7144 10.2949 19.0174L10.0899 17.5954H27.1929C28.5329 17.5954 29.4219 17.0484 29.9689 16.0094C28.5739 15.9554 27.2749 15.5454 26.1539 14.8474C25.9629 15.0664 25.7309 15.1754 25.3889 15.1754L9.7339 15.1894L8.6819 7.9024H21.1779C21.0819 7.1504 21.1089 6.2484 21.2459 5.4964H8.3259L8.1069 3.9924C7.9429 2.8164 7.4789 2.2144 5.9609 2.2144H1.2579C0.5879 2.2144 -0.0001 2.8024 -0.0001 3.5004C-0.0001 4.1834 0.5879 4.7714 1.2579 4.7714H5.5649L7.6969 19.2914C7.9979 21.3414 9.0919 22.5994 11.1699 22.5994ZM29.9279 8.7504C29.4079 8.7504 29.0529 8.4624 29.0529 7.9434V7.8884C29.0529 7.0954 29.5179 6.6584 30.1329 6.2344C30.8569 5.7284 31.2809 5.4414 31.2809 4.8804C31.2809 4.3614 30.8569 4.0194 30.2289 4.0194C29.6679 4.0194 29.3259 4.2654 29.0119 4.5664C28.7659 4.8264 28.5609 5.0864 28.1229 5.0864C27.6039 5.0864 27.2889 4.7574 27.2889 4.2934C27.2889 3.1854 28.7519 2.4064 30.2559 2.4064C32.0199 2.4064 33.1949 3.4044 33.1949 4.7854C33.1949 5.8924 32.4839 6.3304 31.7049 6.8904C31.1859 7.2734 30.9119 7.5194 30.8439 8.0394C30.7619 8.4904 30.4469 8.7504 29.9279 8.7504ZM29.9279 11.5664C29.2989 11.5664 28.8069 11.0874 28.8069 10.4724C28.8069 9.8714 29.2989 9.3924 29.9279 9.3924C30.5699 9.3924 31.0489 9.8714 31.0489 10.4724C31.0489 11.0874 30.5569 11.5664 29.9279 11.5664ZM12.2769 29.4354C13.6039 29.4354 14.6429 28.3824 14.6429 27.0704C14.6429 25.7444 13.6039 24.6914 12.2769 24.6914C10.9649 24.6914 9.9119 25.7444 9.9119 27.0704C9.9119 28.3824 10.9649 29.4354 12.2769 29.4354ZM24.9239 29.4354C26.2499 29.4354 27.3029 28.3824 27.3029 27.0704C27.3029 25.7444 26.2499 24.6914 24.9239 24.6914C23.6109 24.6914 22.5449 25.7444 22.5449 27.0704C22.5449 28.3824 23.6109 29.4354 24.9239 29.4354Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.818359375 29.06640625"
          className={className}
        >
          <path
            d="              M29.8729 13.8903C33.6329 13.8903 36.8179 10.7463 36.8179 6.9453C36.8179 3.1443 33.6739 0.0003 29.8729 0.0003C26.0589 0.0003 22.9279 3.1443 22.9279 6.9453C22.9279 10.7733 26.0589 13.8903 29.8729 13.8903ZM11.1149 22.4223H27.0699C27.6039 22.4223 28.0679 21.9843 28.0679 21.3963C28.0679 20.8083 27.6039 20.3713 27.0699 20.3713H11.3479C10.5679 20.3713 10.0899 19.8243 9.9669 18.9903L9.7479 17.5543H27.0979C28.5199 17.5543 29.4359 16.9533 29.9549 15.7773C28.7789 15.7773 27.6719 15.5453 26.6469 15.0933C26.4409 15.3673 26.1819 15.4903 25.7989 15.4903L9.4469 15.5043L8.2849 7.5743H21.0819C21.0139 6.9453 21.0549 6.1253 21.1499 5.5093H7.9839L7.7249 3.7733C7.5879 2.7203 7.2049 2.1873 5.8109 2.1873H1.0119C0.4649 2.1873 -0.0001 2.6663 -0.0001 3.2133C-0.0001 3.7733 0.4649 4.2523 1.0119 4.2523H5.6329L7.8199 19.2633C8.1069 21.2053 9.1329 22.4223 11.1149 22.4223ZM29.7499 8.6813C29.2849 8.6813 29.0119 8.4083 29.0119 7.9433V7.8883C29.0119 7.0413 29.4769 6.6033 30.0779 6.1793C30.8159 5.6733 31.2399 5.4003 31.2399 4.7713C31.2399 4.1973 30.7749 3.8283 30.0649 3.8283C29.4359 3.8283 29.0529 4.1013 28.7519 4.4163C28.4919 4.6753 28.3009 4.9353 27.9179 4.9353C27.4939 4.9353 27.2069 4.6483 27.2069 4.2383C27.2069 3.1853 28.6019 2.4203 30.0509 2.4203C31.7459 2.4203 32.8539 3.3773 32.8539 4.7033C32.8539 5.7693 32.2109 6.2203 31.4179 6.7953C30.8569 7.2183 30.5699 7.4643 30.5159 8.0113C30.4749 8.4353 30.2419 8.6813 29.7499 8.6813ZM29.7499 11.3883C29.1899 11.3883 28.7249 10.9233 28.7249 10.3493C28.7249 9.7893 29.1899 9.3243 29.7499 9.3243C30.3379 9.3243 30.7889 9.7893 30.7889 10.3493C30.7749 10.9233 30.3239 11.3883 29.7499 11.3883ZM12.1949 29.0663C13.4259 29.0663 14.4099 28.0953 14.4099 26.8513C14.4099 25.6213 13.4259 24.6363 12.1949 24.6363C10.9509 24.6363 9.9669 25.6213 9.9669 26.8513C9.9669 28.0953 10.9509 29.0663 12.1949 29.0663ZM24.9789 29.0663C26.2229 29.0663 27.2069 28.0953 27.2069 26.8513C27.2069 25.6213 26.2229 24.6363 24.9789 24.6363C23.7479 24.6363 22.7499 25.6213 22.7499 26.8513C22.7499 28.0953 23.7479 29.0663 24.9789 29.0663Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.37890625 29.72265625"
          className={className}
        >
          <path
            d="              M30.2699 14.2055C34.1389 14.2055 37.3789 10.9785 37.3789 7.0955C37.3789 3.2125 34.1659 0.0005 30.2699 0.0005C26.3729 0.0005 23.1599 3.2125 23.1599 7.0955C23.1599 11.0055 26.3729 14.2055 30.2699 14.2055ZM11.2109 22.7365H27.0979C27.8089 22.7365 28.4509 22.1895 28.4509 21.3825C28.4509 20.5895 27.8089 20.0435 27.0979 20.0435H11.5659C10.9919 20.0435 10.6229 19.6325 10.5409 19.0175L10.3359 17.6235H27.2479C28.5329 17.6235 29.4219 17.1305 29.9819 16.1875C28.4099 16.0915 26.9609 15.5445 25.7719 14.6565C25.5939 14.8345 25.3889 14.9295 25.0879 14.9295H9.9529L8.9689 8.1625H21.2599C21.1229 7.2875 21.1499 6.3305 21.3149 5.4685H8.5859L8.3949 4.1425C8.2169 2.8715 7.6699 2.2285 6.0569 2.2285H1.4629C0.6699 2.2285 -0.0001 2.8985 -0.0001 3.7055C-0.0001 4.4985 0.6699 5.1685 1.4629 5.1685H5.5239L7.5879 19.3045C7.9019 21.4375 9.0509 22.7365 11.2109 22.7365ZM30.0649 8.8045C29.5039 8.8045 29.0939 8.4905 29.0939 7.9435V7.8885C29.0939 7.1365 29.5449 6.6995 30.1739 6.2615C30.8989 5.7695 31.3089 5.4825 31.3089 4.9495C31.3089 4.4845 30.9259 4.1565 30.3519 4.1565C29.8459 4.1565 29.5309 4.3885 29.2309 4.6895C28.9839 4.9355 28.7519 5.1955 28.2869 5.1955C27.6989 5.1955 27.3569 4.8265 27.3569 4.3475C27.3569 3.1855 28.8749 2.4065 30.4059 2.4065C32.2249 2.4065 33.4549 3.4315 33.4549 4.8395C33.4549 6.0015 32.7029 6.4125 31.9379 6.9595C31.4449 7.3145 31.1719 7.5605 31.0899 8.0525C30.9809 8.5445 30.6109 8.8045 30.0649 8.8045ZM30.0509 11.7035C29.3949 11.7035 28.8609 11.2245 28.8609 10.5685C28.8609 9.9255 29.3949 9.4475 30.0509 9.4475C30.7479 9.4475 31.2539 9.9255 31.2539 10.5685C31.2539 11.2245 30.7479 11.7035 30.0509 11.7035ZM12.3459 29.7225C13.7269 29.7225 14.8339 28.6155 14.8339 27.2345C14.8339 25.8535 13.7269 24.7465 12.3459 24.7465C10.9649 24.7465 9.8569 25.8535 9.8569 27.2345C9.8569 28.6155 10.9649 29.7225 12.3459 29.7225ZM24.8829 29.7225C26.2639 29.7225 27.3709 28.6155 27.3709 27.2345C27.3709 25.8535 26.2639 24.7465 24.8829 24.7465C23.5019 24.7465 22.3809 25.8535 22.3809 27.2345C22.3809 28.6155 23.5019 29.7225 24.8829 29.7225Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.080078125 28.013671875"
          className={className}
        >
          <path
            d="              M29.4769 13.2074C33.0859 13.2074 36.0799 10.2264 36.0799 6.6034C36.0799 2.9804 33.1129 0.0004 29.4769 0.0004C25.8669 0.0004 22.8869 2.9944 22.8869 6.6034C22.8869 10.2264 25.8669 13.2074 29.4769 13.2074ZM10.6089 21.5194H27.0839C27.3299 21.5194 27.5489 21.3144 27.5489 21.0414C27.5489 20.7674 27.3299 20.5624 27.0839 20.5624H10.8279C9.8569 20.5624 9.2829 20.0024 9.1189 18.9624L8.7769 16.7204H26.7969C28.2869 16.7204 28.9979 16.0504 29.3129 14.4234C28.8889 14.4104 28.4649 14.3554 28.0679 14.2464C27.8769 15.2574 27.4669 15.7634 26.5779 15.7634H8.6269L7.1909 6.2614H21.6699C21.6699 5.9614 21.7109 5.6194 21.7659 5.3044H7.0409L6.6309 2.5974C6.5629 2.1194 6.3709 1.8594 5.6739 1.8594H0.4649C0.1909 1.8594 -0.0001 2.0784 -0.0001 2.3374C-0.0001 2.5844 0.1909 2.8164 0.4649 2.8164H5.7009L8.1209 19.1684C8.3399 20.6304 9.1059 21.5194 10.6089 21.5194ZM29.3669 8.1754C29.0249 8.1754 28.8069 7.9704 28.8069 7.6284V7.5464C28.8069 6.8774 29.1069 6.4804 29.8049 5.9884C30.5289 5.4824 31.0759 5.1404 31.0759 4.4024C31.0759 3.7324 30.5159 3.3084 29.6539 3.3084C28.9429 3.3084 28.4099 3.6774 28.1369 4.0054C27.9449 4.2384 27.8089 4.4704 27.4809 4.4704C27.1929 4.4704 26.9879 4.2794 26.9879 3.9514C26.9879 3.1304 28.1909 2.2424 29.6409 2.2424C31.2399 2.2424 32.2249 3.2264 32.2249 4.3474C32.2249 5.3184 31.7049 5.7144 30.9259 6.2894C30.2289 6.8224 29.9959 7.0954 29.9549 7.6694C29.9279 7.9704 29.7229 8.1754 29.3669 8.1754ZM29.3669 10.7464C28.8889 10.7464 28.4919 10.3494 28.4919 9.8574C28.4919 9.3784 28.9019 8.9824 29.3669 8.9824C29.8729 8.9824 30.2829 9.3924 30.2699 9.8574C30.2559 10.3494 29.8589 10.7464 29.3669 10.7464ZM12.4549 28.0134C13.5899 28.0134 14.4789 27.1254 14.4789 25.9904C14.4789 24.8554 13.5899 23.9664 12.4549 23.9664C11.3339 23.9664 10.4319 24.8554 10.4319 25.9904C10.4319 27.1254 11.3339 28.0134 12.4549 28.0134ZM24.7189 28.0134C25.8399 28.0134 26.7419 27.1254 26.7419 25.9904C26.7419 24.8554 25.8399 23.9664 24.7189 23.9664C23.5839 23.9664 22.6679 24.8554 22.6679 25.9904C22.6679 27.1254 23.5839 28.0134 24.7189 28.0134Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.875 27.712890625"
          className={className}
        >
          <path
            d="              M29.3669 13.002C32.9219 13.002 35.8749 10.076 35.8749 6.508C35.8749 2.939 32.9359 0 29.3669 0C25.8129 0 22.8729 2.953 22.8729 6.508C22.8729 10.076 25.8129 13.002 29.3669 13.002ZM10.4589 21.26H27.0839C27.2479 21.26 27.3849 21.123 27.3849 20.932C27.3849 20.754 27.2479 20.617 27.0839 20.617H10.6639C9.6519 20.617 9.0369 20.057 8.8589 18.963L8.4899 16.475H26.7149C28.2189 16.475 28.8749 15.791 29.1349 14.041C28.9159 14.027 28.6969 14.014 28.4789 14C28.2869 15.244 27.8499 15.846 26.8109 15.846H8.3949L6.8629 5.893H21.8479C21.8609 5.674 21.9019 5.469 21.9299 5.25H6.7679L6.3159 2.27C6.2619 1.941 6.1249 1.764 5.6329 1.764H0.3009C0.1229 1.764 -0.0001 1.914 -0.0001 2.078C-0.0001 2.242 0.1229 2.393 0.3009 2.393H5.7289L8.2169 19.141C8.4079 20.467 9.0919 21.26 10.4589 21.26ZM29.2579 8.039C28.9569 8.039 28.7379 7.848 28.7379 7.533V7.451C28.7379 6.822 28.9979 6.439 29.7229 5.934C30.4469 5.428 31.0349 5.072 31.0349 4.293C31.0349 3.609 30.4339 3.172 29.5449 3.172C28.8069 3.172 28.2319 3.555 27.9729 3.883C27.7949 4.115 27.6719 4.334 27.3569 4.334C27.0979 4.334 26.9339 4.17 26.9339 3.869C26.9339 3.131 28.0819 2.201 29.5309 2.201C31.0899 2.201 32.0329 3.199 32.0329 4.252C32.0329 5.195 31.5679 5.578 30.7749 6.152C30.0369 6.713 29.8319 7 29.7769 7.574C29.7639 7.848 29.5719 8.039 29.2579 8.039ZM29.2579 10.568C28.7929 10.568 28.4239 10.186 28.4239 9.707C28.4239 9.256 28.8069 8.873 29.2579 8.873C29.7359 8.873 30.1329 9.283 30.1189 9.707C30.0919 10.186 29.7089 10.568 29.2579 10.568ZM12.5369 27.713C13.6309 27.713 14.5059 26.838 14.5059 25.744C14.5059 24.65 13.6309 23.775 12.5369 23.775C11.4429 23.775 10.5679 24.65 10.5679 25.744C10.5679 26.838 11.4429 27.713 12.5369 27.713ZM24.6369 27.713C25.7309 27.713 26.6059 26.838 26.6059 25.744C26.6059 24.65 25.7309 23.775 24.6369 23.775C23.5429 23.775 22.6539 24.65 22.6539 25.744C22.6539 26.838 23.5429 27.713 24.6369 27.713Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
