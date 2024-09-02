import { IconProps } from "../../types"

export default function RublesignArrowCirclepathIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.78566261574074 29.859375"
          className={className}
        >
          <path
            d="              M1.4219 11.4841C-0.0271 11.4841 -0.3691 12.9061 0.3969 13.8911L4.8679 19.6051C5.3739 20.2341 6.3439 20.2341 6.8499 19.6051L11.3069 13.8911C12.0589 12.9201 11.7309 11.4841 10.2959 11.4841H8.3809C9.7899 7.6151 13.4949 4.8671 17.8559 4.8671C23.4209 4.8671 27.9189 9.3651 27.9189 14.9301C27.9189 20.4941 23.4209 25.0061 17.8559 24.9921C15.1759 24.9921 12.9209 24.0211 10.9789 22.2581C9.8579 21.2601 8.3679 20.9451 7.2739 21.9981C6.3029 22.9411 6.3439 24.3771 7.5199 25.6891C9.7489 28.1781 14.1919 29.8591 17.8559 29.8591C26.0729 29.8591 32.7859 23.1601 32.7859 14.9301C32.7859 6.6991 26.0729 0.0001 17.8559 0.0001C10.8009 0.0001 4.8809 4.9081 3.3229 11.4841ZM15.6959 21.2871C16.7349 21.2871 17.4319 20.6171 17.4319 19.5921V19.4281H19.6739C20.0439 19.4281 20.2349 19.2231 20.2349 18.9081C20.2349 18.5801 20.0439 18.3751 19.6739 18.3751H17.4319V17.1311H19.0049C21.5469 17.1311 23.2969 15.5451 23.2969 13.3031C23.2969 11.0331 21.6429 9.4471 19.1959 9.4471H15.7509C14.6159 9.4471 13.9729 10.1311 13.9729 11.3201V16.0231H12.9749C12.6059 16.0231 12.4009 16.2281 12.4009 16.5701C12.4009 16.9121 12.6059 17.1171 12.9749 17.1171H13.9729V18.3751H12.9749C12.6059 18.3751 12.4279 18.5801 12.4279 18.9081C12.4279 19.2231 12.6199 19.4281 12.9749 19.4281H13.9729V19.5921C13.9729 20.6171 14.6709 21.2871 15.6959 21.2871ZM17.4319 14.5471V12.1821H18.4169C19.2779 12.1821 19.8249 12.6461 19.8249 13.3571C19.8249 14.0681 19.2779 14.5471 18.4029 14.5471Z"
            fill={color}
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
            d="              M1.2008 11.4026C-0.0162 11.4026 -0.3172 12.4546 0.3388 13.3166L4.1128 18.3476C4.5778 18.9906 5.3978 18.9766 5.8628 18.3476L9.6228 13.3166C10.2648 12.4546 9.9778 11.4026 8.7748 11.4026H6.8058C8.1188 6.8766 12.2748 3.6096 17.2238 3.6096C23.2398 3.6096 28.0658 8.4356 28.0658 14.4376C28.0658 20.4536 23.2398 25.3066 17.2238 25.2926C13.9428 25.2796 11.0988 23.8436 9.0888 21.5056C8.3238 20.7266 7.2568 20.4806 6.4228 21.1916C5.6578 21.8206 5.6028 22.9276 6.4228 23.8706C8.8298 26.8656 13.0948 28.8886 17.2238 28.8886C25.1538 28.8886 31.6618 22.3676 31.6618 14.4376C31.6618 6.5216 25.1538 -0.0004 17.2238 -0.0004C10.3338 -0.0004 4.5228 4.9216 3.1148 11.4026ZM14.9958 21.0406C15.7748 21.0406 16.2938 20.5216 16.2938 19.7426V18.9766H19.0148C19.4118 18.9766 19.6298 18.7306 19.6298 18.3746C19.6298 18.0196 19.4118 17.7596 19.0148 17.7596H16.2938V16.4746H18.2628C20.8058 16.4746 22.4878 14.8336 22.4878 12.5376C22.4878 10.2126 20.8608 8.5726 18.3588 8.5726H15.0228C14.1748 8.5726 13.6828 9.0916 13.6828 9.9536V15.2446H12.5758C12.1928 15.2446 11.9598 15.5036 11.9598 15.8596C11.9598 16.2286 12.1928 16.4746 12.5758 16.4746H13.6828V17.7596H12.5888C12.1928 17.7596 11.9738 18.0196 11.9738 18.3746C11.9738 18.7306 12.2068 18.9766 12.5888 18.9766H13.6828V19.7426C13.6828 20.5216 14.2158 21.0406 14.9958 21.0406ZM16.3078 14.3826V10.7596H17.8118C19.1248 10.7596 19.8488 11.4566 19.8488 12.5646C19.8488 13.6856 19.1248 14.3966 17.7978 14.3966Z"
            fill={color}
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
            d="              M1.3232 11.4574C-0.0168 11.4574 -0.3448 12.7014 0.3662 13.6304L4.5082 19.0174C5.0012 19.6604 5.9032 19.6464 6.3812 19.0174L10.5102 13.6304C11.2082 12.7144 10.8932 11.4574 9.5672 11.4574H7.6392C8.9932 7.2734 12.9172 4.2794 17.5512 4.2794C23.3342 4.2794 27.9832 8.9274 27.9832 14.7114C27.9832 20.4804 23.3342 25.1564 17.5512 25.1424C14.5842 25.1424 12.0552 23.9534 10.0862 21.9164C9.1292 21.0134 7.8442 20.7264 6.8742 21.6294C5.9992 22.4224 5.9852 23.6934 6.9972 24.8414C9.3072 27.5624 13.6682 29.4084 17.5512 29.4084C25.6312 29.4084 32.2492 22.7914 32.2492 14.7114C32.2492 6.6304 25.6312 0.0004 17.5512 0.0004C10.5792 0.0004 4.7132 4.9224 3.2232 11.4574ZM15.3642 21.1774C16.2802 21.1774 16.8952 20.5764 16.8952 19.6734V19.2224H19.3562C19.7392 19.2224 19.9442 19.0044 19.9442 18.6624C19.9442 18.3204 19.7392 18.1014 19.3562 18.1014H16.8952V16.8304H18.6452C21.1882 16.8304 22.9112 15.2164 22.9112 12.9474C22.9112 10.6504 21.2702 9.0374 18.8092 9.0374H15.4052C14.4072 9.0374 13.8332 9.6384 13.8332 10.6774V15.6684H12.7802C12.4112 15.6684 12.1922 15.8864 12.1922 16.2424C12.1922 16.5974 12.4112 16.8164 12.7802 16.8164H13.8332V18.1014H12.7932C12.4112 18.1014 12.2062 18.3204 12.2062 18.6624C12.2062 19.0044 12.4242 19.2224 12.7932 19.2224H13.8332V19.6734C13.8332 20.5764 14.4482 21.1774 15.3642 21.1774ZM16.8952 14.4784V11.5114H18.1262C19.2062 11.5114 19.8342 12.0864 19.8342 12.9884C19.8342 13.8904 19.2062 14.4784 18.1122 14.4784Z"
            fill={color}
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
            d="              M0.7981 11.197C0.0051 11.197 -0.2269 11.744 0.2381 12.387L3.2181 16.639C3.6011 17.172 4.1341 17.172 4.5031 16.639L7.4841 12.387C7.9351 11.744 7.7031 11.197 6.9231 11.197H4.6541C5.8021 5.797 10.5871 1.777 16.3431 1.777C22.9471 1.777 28.2791 7.096 28.2791 13.713C28.2791 20.316 22.9471 25.676 16.3431 25.648C12.1871 25.648 8.5641 23.516 6.4311 20.316C6.1171 19.893 5.6111 19.756 5.1731 20.016C4.7631 20.262 4.6401 20.836 4.9821 21.301C7.5381 24.924 11.6401 27.426 16.3431 27.426C23.8491 27.426 30.0561 21.219 30.0561 13.713C30.0561 6.193 23.8491 0 16.3431 0C9.6851 0 4.0521 4.867 2.8631 11.197ZM14.0191 20.275C14.4431 20.275 14.7301 20.002 14.7301 19.564V17.883H17.9291C18.2571 17.883 18.4761 17.637 18.4761 17.309C18.4761 16.994 18.2571 16.748 17.9291 16.748H14.7301V15.34H17.1501C19.6241 15.34 21.1561 13.768 21.1561 11.484C21.1561 9.201 19.6381 7.615 17.1501 7.615H14.0191C13.5811 7.615 13.3081 7.889 13.3081 8.34V14.219H12.0641C11.7221 14.219 11.5031 14.451 11.5031 14.779C11.5031 15.107 11.7221 15.354 12.0641 15.354H13.3081V16.748H12.0781C11.7361 16.748 11.5171 16.994 11.5171 17.309C11.5171 17.637 11.7361 17.883 12.0781 17.883H13.3081V19.564C13.3081 20.002 13.6091 20.275 14.0191 20.275ZM14.7301 14.041V8.928H16.9451C18.7631 8.928 19.7341 9.912 19.7341 11.484C19.7341 13.07 18.7491 14.068 16.9451 14.068Z"
            fill={color}
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
            d="              M1.0557 11.3481C-0.0103 11.3481 -0.2843 12.1401 0.3037 12.9471L3.6127 17.5411C4.0767 18.1831 4.7877 18.1701 5.2397 17.5411L8.5477 12.9331C9.1087 12.1541 8.8487 11.3481 7.7957 11.3481H5.8137C7.0437 6.4121 11.4877 2.7891 16.8197 2.7891C23.1087 2.7891 28.1667 7.8341 28.1667 14.1231C28.1667 20.4121 23.1087 25.4841 16.8197 25.4711C13.1417 25.4571 9.9287 23.7341 7.8777 21.0271C7.3307 20.3851 6.5247 20.1801 5.8687 20.6581C5.2397 21.1091 5.1167 21.9841 5.7177 22.7091C8.2467 26.0171 12.3897 28.2461 16.8197 28.2461C24.5577 28.2461 30.9427 21.8611 30.9427 14.1231C30.9427 6.3981 24.5577 0.0001 16.8197 0.0001C10.0377 0.0001 4.2827 4.9081 2.9837 11.3481ZM14.5357 20.8771C15.1517 20.8771 15.5757 20.4531 15.5757 19.8241V18.6621H18.5827C18.9797 18.6621 19.2397 18.3891 19.2397 18.0191C19.2397 17.6371 18.9797 17.3631 18.5827 17.3631H15.5757V16.0511H17.7767C20.3197 16.0511 21.9597 14.3691 21.9597 12.0311C21.9597 9.6801 20.3467 7.9981 17.8177 7.9981H14.5357C13.8937 7.9981 13.4967 8.4081 13.4967 9.0781V14.7381H12.3077C11.9107 14.7381 11.6647 15.0251 11.6647 15.3941C11.6647 15.7771 11.9107 16.0511 12.3077 16.0511H13.4967V17.3631H12.3217C11.9247 17.3631 11.6787 17.6371 11.6787 18.0191C11.6787 18.3891 11.9247 18.6621 12.3217 18.6621H13.4967V19.8381C13.4967 20.4531 13.9207 20.8771 14.5357 20.8771ZM15.5887 14.2601V9.8301H17.4207C19.0207 9.8301 19.8547 10.6911 19.8547 12.0581C19.8547 13.4261 19.0067 14.2871 17.4207 14.2871Z"
            fill={color}
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
            d="              M0.9726 11.3064C-0.0114 11.3064 -0.2574 11.9764 0.2756 12.7424L3.3376 17.0894C3.7886 17.7184 4.4456 17.7054 4.8826 17.0894L7.9456 12.7284C8.4646 11.9764 8.2186 11.3064 7.2476 11.3064H5.2656C6.4546 6.1384 11.0486 2.3374 16.5996 2.3374C23.0526 2.3374 28.2206 7.4924 28.2206 13.9454C28.2206 20.3984 23.0526 25.5934 16.5996 25.5664C12.7026 25.5524 9.2846 23.6664 7.1936 20.7534C6.7696 20.1934 6.1266 20.0154 5.5526 20.3574C5.0056 20.6994 4.8556 21.4514 5.3206 22.0524C7.9176 25.5394 11.9926 27.8904 16.5996 27.8904C24.2146 27.8904 30.5446 21.5604 30.5446 13.9454C30.5446 6.3164 24.2146 0.0004 16.5996 0.0004C9.8726 0.0004 4.1586 4.9084 2.9006 11.3064ZM14.2886 20.7814C14.8086 20.7814 15.1636 20.4124 15.1636 19.8784V18.4984H18.3496C18.7596 18.4984 19.0196 18.2114 19.0196 17.8144C19.0196 17.4314 18.7596 17.1444 18.3496 17.1444H15.1636V15.8044H17.5016C20.0446 15.8044 21.6586 14.1094 21.6586 11.7444C21.6586 9.3924 20.0586 7.6704 17.5156 7.6704H14.2756C13.7286 7.6704 13.3866 8.0394 13.3866 8.5864V14.4644H12.1566C11.7596 14.4644 11.4996 14.7524 11.4996 15.1344C11.4996 15.5174 11.7596 15.8184 12.1566 15.8184H13.3866V17.1444H12.1836C11.7736 17.1444 11.5136 17.4314 11.5136 17.8144C11.5136 18.2114 11.7736 18.4984 12.1836 18.4984H13.3866V19.8784C13.3866 20.4124 13.7696 20.7814 14.2886 20.7814ZM15.1776 14.2054V9.3104H17.2006C18.9646 9.3104 19.8676 10.2534 19.8676 11.7574C19.8676 13.2754 18.9506 14.2324 17.2006 14.2324Z"
            fill={color}
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
            d="              M1.1231 11.3749C-0.0109 11.3749 -0.2989 12.2769 0.3171 13.1109L3.8171 17.8969C4.2951 18.5259 5.0471 18.5119 5.4981 17.8969L9.0121 13.0979C9.6001 12.2769 9.3261 11.3749 8.2051 11.3749H6.2371C7.5081 6.6169 11.8151 3.1449 16.9961 3.1449C23.1621 3.1449 28.1251 8.0939 28.1251 14.2599C28.1251 20.4259 23.1621 25.4159 16.9961 25.3889C13.4831 25.3749 10.4341 23.7889 8.3971 21.2329C7.7541 20.5349 6.8381 20.3169 6.1001 20.8909C5.4161 21.4099 5.3211 22.3809 6.0181 23.2149C8.4931 26.3729 12.6901 28.5199 16.9961 28.5199C24.8031 28.5199 31.2561 22.0799 31.2561 14.2599C31.2561 6.4529 24.8031 -0.0001 16.9961 -0.0001C10.1601 -0.0001 4.3771 4.9219 3.0371 11.3749ZM14.7271 20.9449C15.4101 20.9449 15.8751 20.4809 15.8751 19.7969V18.7989H18.7741C19.1571 18.7989 19.4031 18.5389 19.4031 18.1699C19.4031 17.8009 19.1571 17.5409 18.7741 17.5409H15.8751V16.2419H17.9811C20.5241 16.2419 22.1781 14.5739 22.1781 12.2499C22.1781 9.9119 20.5651 8.2439 18.0491 8.2439H14.7411C14.0161 8.2439 13.5651 8.7089 13.5651 9.4609V14.9709H12.4161C12.0201 14.9709 11.7871 15.2309 11.7871 15.5999C11.7871 15.9689 12.0201 16.2289 12.4161 16.2289H13.5651V17.5409H12.4301C12.0341 17.5409 11.8011 17.8009 11.8011 18.1699C11.8011 18.5389 12.0471 18.7989 12.4301 18.7989H13.5651V19.7969C13.5651 20.4809 14.0431 20.9449 14.7271 20.9449ZM15.8891 14.3149V10.2269H17.5841C19.0611 10.2269 19.8541 11.0199 19.8541 12.2769C19.8541 13.5349 19.0471 14.3419 17.5841 14.3419Z"
            fill={color}
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
            d="              M0.5674 11.0602C0.0204 11.0602 -0.1706 11.4572 0.1704 11.9492L3.0414 16.0512C3.3424 16.4612 3.7254 16.4612 4.0124 16.0512L6.8834 11.9352C7.2254 11.4572 7.0344 11.0602 6.4874 11.0602H3.8484C4.9424 5.3592 9.9734 1.0532 15.9894 1.0532C22.8254 1.0532 28.3624 6.5902 28.3624 13.4122C28.3624 20.2342 22.8254 25.7852 15.9894 25.7712C11.4914 25.7712 7.6224 23.3382 5.4074 19.7562C5.2294 19.5102 4.9284 19.4282 4.6684 19.5642C4.4364 19.7152 4.3404 20.0292 4.5454 20.3162C7.0474 24.1172 11.1494 26.8102 15.9894 26.8102C23.3584 26.8102 29.4014 20.7672 29.4014 13.4122C29.4014 6.0432 23.3584 0.0002 15.9894 0.0002C9.4264 0.0002 3.9164 4.7992 2.7954 11.0602ZM13.6784 19.6332C13.9524 19.6332 14.1294 19.4552 14.1294 19.1542V17.0762H17.3564C17.6024 17.0762 17.7664 16.8982 17.7664 16.6522C17.7664 16.4062 17.6024 16.2282 17.3564 16.2282H14.1294V14.7242H16.6724C19.0654 14.7242 20.4874 13.3032 20.4874 11.1292C20.4874 8.9552 19.0654 7.5332 16.6724 7.5332H13.6644C13.3914 7.5332 13.2134 7.7112 13.2134 8.0122V13.9042H11.9144C11.6684 13.9042 11.5044 14.0822 11.5044 14.3282C11.5044 14.5742 11.6684 14.7382 11.9144 14.7382H13.2134V16.2282H11.9424C11.6824 16.2282 11.5184 16.4062 11.5184 16.6522C11.5184 16.8982 11.6824 17.0762 11.9424 17.0762H13.2134V19.1682C13.2134 19.4692 13.4184 19.6332 13.6784 19.6332ZM14.1434 13.8492V8.4082H16.6044C18.4774 8.4082 19.5574 9.4472 19.5574 11.1292C19.5574 12.8102 18.4774 13.8492 16.6044 13.8492Z"
            fill={color}
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
            d="              M0.451 10.9781C0.027 10.9781 -0.151 11.2931 0.15 11.7031L2.966 15.7501C3.212 16.0921 3.513 16.0921 3.759 15.7501L6.576 11.7031C6.877 11.2931 6.699 10.9781 6.275 10.9781H3.445C4.511 5.1271 9.652 0.6701 15.818 0.6701C22.763 0.6701 28.41 6.3031 28.41 13.2481C28.41 20.1801 22.763 25.8261 15.818 25.8261C11.142 25.8261 7.136 23.2281 4.88 19.4691C4.785 19.3051 4.593 19.2501 4.416 19.3321C4.265 19.4141 4.197 19.6051 4.32 19.7971C6.795 23.6931 10.91 26.4961 15.818 26.4961C23.105 26.4961 29.066 20.5351 29.066 13.2481C29.066 5.9611 23.105 0.0001 15.818 0.0001C9.31 0.0001 3.841 4.7581 2.761 10.9781ZM13.507 19.2911C13.699 19.2911 13.836 19.1681 13.836 18.9351V16.6391H17.076C17.281 16.6391 17.418 16.5021 17.418 16.2971C17.418 16.0921 17.281 15.9551 17.076 15.9551H13.836V14.3961H16.433C18.785 14.3961 20.152 13.0701 20.152 10.9371C20.152 8.8181 18.785 7.4781 16.433 7.4781H13.507C13.302 7.4781 13.166 7.6151 13.166 7.8341V13.7401H11.853C11.648 13.7401 11.511 13.8771 11.511 14.0821C11.511 14.2871 11.648 14.4241 11.853 14.4241H13.166V15.9551H11.867C11.662 15.9551 11.525 16.0921 11.525 16.2971C11.525 16.5021 11.662 16.6391 11.867 16.6391H13.166V18.9491C13.166 19.1811 13.316 19.2911 13.507 19.2911ZM13.836 13.7401V8.1481H16.433C18.334 8.1481 19.482 9.2151 19.482 10.9371C19.482 12.6741 18.334 13.7401 16.433 13.7401Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}