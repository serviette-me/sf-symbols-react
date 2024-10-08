import { IconProps } from "../../types"
import React from "react"

export default function KipsignArrowCirclepathIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.78566261574074 29.859375"
          className={className}
        >
          <path
            d="              M1.4219 11.4841C-0.0271 11.4841 -0.3691 12.9061 0.3969 13.8911L4.8679 19.6051C5.3739 20.2341 6.3439 20.2341 6.8499 19.6051L11.3069 13.8911C12.0589 12.9201 11.7309 11.4841 10.2959 11.4841H8.3809C9.7899 7.6151 13.4949 4.8671 17.8559 4.8671C23.4209 4.8671 27.9189 9.3651 27.9189 14.9301C27.9189 20.4941 23.4209 25.0061 17.8559 24.9921C15.1759 24.9921 12.9209 24.0211 10.9789 22.2581C9.8579 21.2601 8.3679 20.9451 7.2739 21.9981C6.3029 22.9411 6.3439 24.3771 7.5199 25.6891C9.7489 28.1781 14.1919 29.8591 17.8559 29.8591C26.0729 29.8591 32.7859 23.1601 32.7859 14.9301C32.7859 6.6991 26.0729 0.0001 17.8559 0.0001C10.8009 0.0001 4.8809 4.9081 3.3229 11.4841ZM12.6609 14.5881C12.6609 14.9021 12.8799 15.1211 13.1799 15.1211H14.0139V19.0451C14.0139 20.1251 14.6979 20.8361 15.7229 20.8361C16.7619 20.8361 17.4729 20.1251 17.4729 19.0451V15.4081H17.5419L20.0029 19.8381C20.3309 20.4391 20.9599 20.8361 21.6019 20.8361C22.6139 20.8361 23.2969 20.2071 23.2969 19.2911C23.2969 18.8671 23.1329 18.3481 22.8599 17.9511L20.9049 15.1211H23.1879C23.5029 15.1211 23.7209 14.9021 23.7209 14.5881C23.7209 14.2731 23.5029 14.0551 23.1879 14.0551H21.0009L22.8599 11.5121C23.0649 11.2241 23.2019 10.8281 23.2019 10.5001C23.2019 9.6391 22.5589 9.0641 21.6019 9.0641C21.0959 9.0641 20.5219 9.4061 20.1799 9.9531L17.5279 14.0141H17.4729V10.8281C17.4729 9.7481 16.7619 9.0371 15.7229 9.0371C14.6979 9.0371 14.0139 9.7481 14.0139 10.8281V14.0551H13.1799C12.8799 14.0551 12.6609 14.2731 12.6609 14.5881Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.661437175995644 28.888671875"
          className={className}
        >
          <path
            d="              M1.2008 11.4026C-0.0162 11.4026 -0.3172 12.4546 0.3388 13.3166L4.1128 18.3476C4.5778 18.9906 5.3978 18.9766 5.8628 18.3476L9.6228 13.3166C10.2648 12.4546 9.9778 11.4026 8.7748 11.4026H6.8058C8.1188 6.8766 12.2748 3.6096 17.2238 3.6096C23.2398 3.6096 28.0658 8.4356 28.0658 14.4376C28.0658 20.4536 23.2398 25.3066 17.2238 25.2926C13.9428 25.2796 11.0988 23.8436 9.0888 21.5056C8.3238 20.7266 7.2568 20.4806 6.4228 21.1916C5.6578 21.8206 5.6028 22.9276 6.4228 23.8706C8.8298 26.8656 13.0948 28.8886 17.2238 28.8886C25.1538 28.8886 31.6618 22.3676 31.6618 14.4376C31.6618 6.5216 25.1538 -0.0004 17.2238 -0.0004C10.3338 -0.0004 4.5228 4.9216 3.1148 11.4026ZM11.9878 14.3416C11.9878 14.6836 12.2478 14.9436 12.5888 14.9436H13.4368V19.4416C13.4368 20.2616 13.9568 20.7946 14.7358 20.7946C15.5148 20.7946 16.0478 20.2616 16.0478 19.4416V15.0936H16.4038L19.8488 20.0836C20.1228 20.5356 20.5458 20.7946 20.9978 20.7946C21.7358 20.7946 22.2688 20.3026 22.2688 19.6196C22.2688 19.3186 22.1458 18.9356 21.9268 18.6486L19.1248 14.9436H22.0368C22.3778 14.9436 22.6248 14.6836 22.6248 14.3416C22.6248 13.9866 22.3778 13.7406 22.0368 13.7406H19.1658L21.9268 10.2126C22.1048 9.9806 22.2138 9.6656 22.2138 9.4196C22.2138 8.7636 21.7088 8.2986 20.9978 8.2986C20.6148 8.2986 20.2178 8.5176 19.9308 8.9416L16.3898 13.7126H16.0478V9.6246C16.0478 8.8186 15.5148 8.2856 14.7358 8.2856C13.9428 8.2856 13.4368 8.8186 13.4368 9.6246V13.7406H12.5888C12.2478 13.7406 11.9878 13.9866 11.9878 14.3416Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.24873795670096 29.408203125"
          className={className}
        >
          <path
            d="              M1.3232 11.4574C-0.0168 11.4574 -0.3448 12.7014 0.3662 13.6304L4.5082 19.0174C5.0012 19.6604 5.9032 19.6464 6.3812 19.0174L10.5102 13.6304C11.2082 12.7144 10.8932 11.4574 9.5672 11.4574H7.6392C8.9932 7.2734 12.9172 4.2794 17.5512 4.2794C23.3342 4.2794 27.9832 8.9274 27.9832 14.7114C27.9832 20.4804 23.3342 25.1564 17.5512 25.1424C14.5842 25.1424 12.0552 23.9534 10.0862 21.9164C9.1292 21.0134 7.8442 20.7264 6.8742 21.6294C5.9992 22.4224 5.9852 23.6934 6.9972 24.8414C9.3072 27.5624 13.6682 29.4084 17.5512 29.4084C25.6312 29.4084 32.2492 22.7914 32.2492 14.7114C32.2492 6.6304 25.6312 0.0004 17.5512 0.0004C10.5792 0.0004 4.7132 4.9224 3.2232 11.4574ZM12.3422 14.4784C12.3422 14.8064 12.5752 15.0394 12.9032 15.0394H13.7512V19.2364C13.7512 20.1934 14.3522 20.8224 15.2542 20.8224C16.1702 20.8224 16.7992 20.1934 16.7992 19.2364V15.2574H17.0042L19.9302 19.9614C20.2312 20.4944 20.7642 20.8224 21.3112 20.8224C22.2002 20.8224 22.8012 20.2614 22.8012 19.4554C22.8012 19.0864 22.6652 18.6344 22.4182 18.2934L20.0532 15.0394H22.6372C22.9652 15.0394 23.1982 14.8064 23.1982 14.4784C23.1982 14.1504 22.9652 13.9184 22.6372 13.9184H20.1222L22.4182 10.9104C22.6102 10.6364 22.7332 10.2814 22.7332 9.9944C22.7332 9.2284 22.1592 8.7094 21.3112 8.7094C20.8742 8.7094 20.3812 8.9964 20.0672 9.4884L16.9912 13.8774H16.7992V10.2674C16.7992 9.3244 16.1702 8.6954 15.2542 8.6954C14.3382 8.6954 13.7512 9.3244 13.7512 10.2674V13.9184H12.9032C12.5752 13.9184 12.3422 14.1504 12.3422 14.4784Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.056110700697072 27.42578125"
          className={className}
        >
          <path
            d="              M0.7981 11.197C0.0051 11.197 -0.2269 11.744 0.2381 12.387L3.2181 16.639C3.6011 17.172 4.1341 17.172 4.5031 16.639L7.4841 12.387C7.9351 11.744 7.7031 11.197 6.9231 11.197H4.6541C5.8021 5.797 10.5871 1.777 16.3431 1.777C22.9471 1.777 28.2791 7.096 28.2791 13.713C28.2791 20.316 22.9471 25.676 16.3431 25.648C12.1871 25.648 8.5641 23.516 6.4311 20.316C6.1171 19.893 5.6111 19.756 5.1731 20.016C4.7631 20.262 4.6401 20.836 4.9821 21.301C7.5381 24.924 11.6401 27.426 16.3431 27.426C23.8491 27.426 30.0561 21.219 30.0561 13.713C30.0561 6.193 23.8491 0 16.3431 0C9.6851 0 4.0521 4.867 2.8631 11.197ZM11.4081 13.877C11.4081 14.178 11.6401 14.438 11.9681 14.438H12.8711V19.537C12.8711 19.988 13.1711 20.262 13.5681 20.262C13.9781 20.262 14.2791 19.988 14.2791 19.537V14.438H14.9491L19.5151 19.947C19.6931 20.166 19.8711 20.262 20.0761 20.262C20.4451 20.262 20.7461 19.975 20.7461 19.619C20.7461 19.469 20.6911 19.291 20.5541 19.113L16.6301 14.438H20.4721C20.8141 14.438 21.0461 14.178 21.0461 13.877C21.0461 13.549 20.8141 13.316 20.4721 13.316H16.6301L20.5541 8.654C20.6911 8.504 20.7461 8.326 20.7461 8.176C20.7461 7.82 20.4581 7.533 20.0891 7.533C19.8711 7.533 19.6791 7.629 19.5011 7.875L14.9491 13.316H14.2791V8.258C14.2791 7.807 13.9921 7.547 13.5681 7.547C13.1441 7.547 12.8711 7.807 12.8711 8.258V13.316H11.9681C11.6401 13.316 11.4081 13.549 11.4081 13.877Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.942389635410866 28.24609375"
          className={className}
        >
          <path
            d="              M1.0557 11.3481C-0.0103 11.3481 -0.2843 12.1401 0.3037 12.9471L3.6127 17.5411C4.0767 18.1831 4.7877 18.1701 5.2397 17.5411L8.5477 12.9331C9.1087 12.1541 8.8487 11.3481 7.7957 11.3481H5.8137C7.0437 6.4121 11.4877 2.7891 16.8197 2.7891C23.1087 2.7891 28.1667 7.8341 28.1667 14.1231C28.1667 20.4121 23.1087 25.4841 16.8197 25.4711C13.1417 25.4571 9.9287 23.7341 7.8777 21.0271C7.3307 20.3851 6.5247 20.1801 5.8687 20.6581C5.2397 21.1091 5.1167 21.9841 5.7177 22.7091C8.2467 26.0171 12.3897 28.2461 16.8197 28.2461C24.5577 28.2461 30.9427 21.8611 30.9427 14.1231C30.9427 6.3981 24.5577 0.0001 16.8197 0.0001C10.0377 0.0001 4.2827 4.9081 2.9837 11.3481ZM11.5557 14.1781C11.5557 14.5331 11.8287 14.8341 12.1987 14.8341H13.0597V19.6871C13.0597 20.3441 13.4837 20.7541 14.0847 20.7541C14.7007 20.7541 15.1237 20.3441 15.1237 19.6871V14.8751H15.6707L19.7317 20.2341C19.9777 20.5901 20.2787 20.7541 20.6067 20.7541C21.1807 20.7541 21.6047 20.3441 21.6047 19.8101C21.6047 19.5921 21.5087 19.3181 21.3307 19.0861L17.9677 14.8341H21.2767C21.6597 14.8341 21.9187 14.5331 21.9187 14.1781C21.9187 13.7951 21.6597 13.5211 21.2767 13.5211H17.9817L21.3307 9.3791C21.4947 9.1601 21.5767 8.9141 21.5767 8.7091C21.5767 8.1891 21.1667 7.7931 20.6197 7.7931C20.3057 7.7931 20.0187 7.9431 19.7587 8.2991L15.6437 13.5211H15.1237V8.8591C15.1237 8.2031 14.7137 7.8061 14.0847 7.8061C13.4697 7.8061 13.0597 8.2031 13.0597 8.8591V13.5211H12.1987C11.8287 13.5211 11.5557 13.7951 11.5557 14.1781Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.544813437289534 27.890625"
          className={className}
        >
          <path
            d="              M0.9726 11.3064C-0.0114 11.3064 -0.2574 11.9764 0.2756 12.7424L3.3376 17.0894C3.7886 17.7184 4.4456 17.7054 4.8826 17.0894L7.9456 12.7284C8.4646 11.9764 8.2186 11.3064 7.2476 11.3064H5.2656C6.4546 6.1384 11.0486 2.3374 16.5996 2.3374C23.0526 2.3374 28.2206 7.4924 28.2206 13.9454C28.2206 20.3984 23.0526 25.5934 16.5996 25.5664C12.7026 25.5524 9.2846 23.6664 7.1936 20.7534C6.7696 20.1934 6.1266 20.0154 5.5526 20.3574C5.0056 20.6994 4.8556 21.4514 5.3206 22.0524C7.9176 25.5394 11.9926 27.8904 16.5996 27.8904C24.2146 27.8904 30.5446 21.5604 30.5446 13.9454C30.5446 6.3164 24.2146 0.0004 16.5996 0.0004C9.8726 0.0004 4.1586 4.9084 2.9006 11.3064ZM11.3086 14.0824C11.3086 14.4514 11.5956 14.7654 11.9786 14.7654H12.8536V19.8374C12.8536 20.3844 13.2226 20.7264 13.7286 20.7264C14.2476 20.7264 14.6176 20.3844 14.6176 19.8374V14.7654H15.2596L19.6756 20.3164C19.9086 20.6174 20.1266 20.7264 20.4006 20.7264C20.8656 20.7264 21.2346 20.3714 21.2346 19.9204C21.2346 19.7424 21.1656 19.5234 21.0016 19.3184L17.3246 14.7654H20.8656C21.2616 14.7654 21.5346 14.4514 21.5346 14.0824C21.5346 13.6854 21.2616 13.4124 20.8656 13.4124H17.3106L21.0016 8.9004C21.1526 8.7094 21.2206 8.4904 21.2206 8.3124C21.2206 7.8614 20.8656 7.5054 20.4006 7.5054C20.1406 7.5054 19.9086 7.6154 19.6616 7.9294L15.2326 13.4124H14.6176V8.4214C14.6176 7.8614 14.2616 7.5334 13.7286 7.5334C13.1956 7.5334 12.8536 7.8614 12.8536 8.4214V13.4124H11.9786C11.5956 13.4124 11.3086 13.6854 11.3086 14.0824Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.256262623503385 28.51953125"
          className={className}
        >
          <path
            d="              M1.1231 11.3749C-0.0109 11.3749 -0.2989 12.2769 0.3171 13.1109L3.8171 17.8969C4.2951 18.5259 5.0471 18.5119 5.4981 17.8969L9.0121 13.0979C9.6001 12.2769 9.3261 11.3749 8.2051 11.3749H6.2371C7.5081 6.6169 11.8151 3.1449 16.9961 3.1449C23.1621 3.1449 28.1251 8.0939 28.1251 14.2599C28.1251 20.4259 23.1621 25.4159 16.9961 25.3889C13.4831 25.3749 10.4341 23.7889 8.3971 21.2329C7.7541 20.5349 6.8381 20.3169 6.1001 20.8909C5.4161 21.4099 5.3211 22.3809 6.0181 23.2149C8.4931 26.3729 12.6901 28.5199 16.9961 28.5199C24.8031 28.5199 31.2561 22.0799 31.2561 14.2599C31.2561 6.4529 24.8031 -0.0001 16.9961 -0.0001C10.1601 -0.0001 4.3771 4.9219 3.0371 11.3749ZM11.7331 14.2459C11.7331 14.6019 12.0061 14.8749 12.3621 14.8749H13.2231V19.5919C13.2231 20.3029 13.6881 20.7679 14.3581 20.7679C15.0551 20.7679 15.5201 20.3029 15.5201 19.5919V14.9709H15.9851L19.7721 20.1659C20.0451 20.5629 20.4011 20.7679 20.7701 20.7679C21.4121 20.7679 21.8911 20.3299 21.8911 19.7289C21.8911 19.4689 21.7821 19.1539 21.5901 18.8949L18.4591 14.8749H21.6041C21.9731 14.8749 22.2191 14.6019 22.2191 14.2459C22.2191 13.8769 21.9731 13.6169 21.6041 13.6169H18.4871L21.5901 9.7479C21.7541 9.5159 21.8501 9.2419 21.8501 9.0239C21.8501 8.4359 21.3991 8.0119 20.7841 8.0119C20.4421 8.0119 20.1001 8.1899 19.8261 8.5719L15.9711 13.6039H15.5201V9.1879C15.5201 8.4629 15.0551 8.0119 14.3581 8.0119C13.6741 8.0119 13.2231 8.4629 13.2231 9.1879V13.6169H12.3621C12.0061 13.6169 11.7331 13.8769 11.7331 14.2459Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.401172478346837 26.810546875"
          className={className}
        >
          <path
            d="              M0.5674 11.0602C0.0204 11.0602 -0.1706 11.4572 0.1704 11.9492L3.0414 16.0512C3.3424 16.4612 3.7254 16.4612 4.0124 16.0512L6.8834 11.9352C7.2254 11.4572 7.0344 11.0602 6.4874 11.0602H3.8484C4.9424 5.3592 9.9734 1.0532 15.9894 1.0532C22.8254 1.0532 28.3624 6.5902 28.3624 13.4122C28.3624 20.2342 22.8254 25.7852 15.9894 25.7712C11.4914 25.7712 7.6224 23.3382 5.4074 19.7562C5.2294 19.5102 4.9284 19.4282 4.6684 19.5642C4.4364 19.7152 4.3404 20.0292 4.5454 20.3162C7.0474 24.1172 11.1494 26.8102 15.9894 26.8102C23.3584 26.8102 29.4014 20.7672 29.4014 13.4122C29.4014 6.0432 23.3584 0.0002 15.9894 0.0002C9.4264 0.0002 3.9164 4.7992 2.7954 11.0602ZM11.5324 13.6032C11.5324 13.8362 11.7094 14.0272 11.9554 14.0272H12.8854V19.1682C12.8854 19.4692 13.1044 19.6462 13.3504 19.6462C13.6104 19.6462 13.8154 19.4692 13.8154 19.1682V14.0272H14.5394L19.2974 19.4822C19.4074 19.5922 19.5304 19.6462 19.6534 19.6462C19.8994 19.6462 20.1044 19.4692 20.1044 19.2092C20.1044 19.1132 20.0634 18.9762 19.9544 18.8532L15.6884 14.0272H19.9674C20.2274 14.0272 20.3914 13.8362 20.3914 13.6032C20.3914 13.3712 20.2274 13.1932 19.9674 13.1932H15.7024L19.9814 8.3402C20.0774 8.2302 20.1044 8.1072 20.1044 8.0122C20.1044 7.7652 19.9264 7.5742 19.6804 7.5742C19.5024 7.5742 19.3934 7.6562 19.2704 7.8062L14.5674 13.1932H13.8154V8.0392C13.8154 7.7522 13.6104 7.5742 13.3504 7.5742C13.0774 7.5742 12.8854 7.7522 12.8854 8.0392V13.1932H11.9554C11.7094 13.1932 11.5324 13.3712 11.5324 13.6032Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.066007972875727 26.49609375"
          className={className}
        >
          <path
            d="              M0.451 10.9781C0.027 10.9781 -0.151 11.2931 0.15 11.7031L2.966 15.7501C3.212 16.0921 3.513 16.0921 3.759 15.7501L6.576 11.7031C6.877 11.2931 6.699 10.9781 6.275 10.9781H3.445C4.511 5.1271 9.652 0.6701 15.818 0.6701C22.763 0.6701 28.41 6.3031 28.41 13.2481C28.41 20.1801 22.763 25.8261 15.818 25.8261C11.142 25.8261 7.136 23.2281 4.88 19.4691C4.785 19.3051 4.593 19.2501 4.416 19.3321C4.265 19.4141 4.197 19.6051 4.32 19.7971C6.795 23.6931 10.91 26.4961 15.818 26.4961C23.105 26.4961 29.066 20.5351 29.066 13.2481C29.066 5.9611 23.105 0.0001 15.818 0.0001C9.31 0.0001 3.841 4.7581 2.761 10.9781ZM11.607 13.4531C11.607 13.6441 11.744 13.7951 11.962 13.7951H12.906V18.9631C12.906 19.1811 13.084 19.3181 13.248 19.3181C13.425 19.3181 13.589 19.1811 13.589 18.9631V13.7951H14.341L19.195 19.2231C19.263 19.2911 19.359 19.3181 19.455 19.3181C19.619 19.3181 19.769 19.1811 19.769 19.0041C19.769 18.9221 19.755 18.8121 19.646 18.7031L15.216 13.7951H19.701C19.933 13.7951 20.07 13.6441 20.07 13.4531C20.07 13.2751 19.933 13.1111 19.701 13.1111H15.244L19.687 8.1621C19.769 8.0801 19.783 7.9841 19.783 7.9161C19.783 7.7241 19.66 7.5881 19.468 7.5881C19.332 7.5881 19.25 7.6561 19.154 7.7651L14.369 13.1111H13.589V7.9301C13.589 7.7111 13.425 7.5741 13.248 7.5741C13.043 7.5741 12.906 7.7111 12.906 7.9301V13.1111H11.962C11.744 13.1111 11.607 13.2751 11.607 13.4531Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
