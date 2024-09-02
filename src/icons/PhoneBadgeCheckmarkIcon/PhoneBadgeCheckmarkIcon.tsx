import { IconProps } from "../../types"

export default function PhoneBadgeCheckmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.91015625 30.064453125"
          className={className}
        >
          <path
            d="              M30.1875 20.1112L25.7165 16.9942C24.1855 15.9272 22.5445 15.9412 21.3825 17.1312L20.5355 17.9922C19.9885 18.5522 19.3735 18.6072 18.5395 17.9102C17.8145 17.3082 16.8025 16.3922 16.0645 15.6682C15.4625 15.0662 14.6835 14.1912 14.1645 13.5212C13.4945 12.6872 13.5215 12.0862 14.0685 11.5252L14.9295 10.6772C16.1325 9.5152 16.1605 7.8752 15.0805 6.3572L11.6485 1.5582C10.9235 0.5472 9.7485 0.0002 8.5445 0.0002C7.5745 0.0002 6.5895 0.3422 5.7285 1.0252L5.4825 1.2302C3.4045 2.9942 2.6255 4.8672 2.6255 7.8202C2.6255 9.7072 2.9665 11.6482 3.7875 13.6722C4.8125 13.2342 5.9605 12.9742 7.1365 12.9332C6.1795 10.9102 5.8245 9.1192 5.8245 7.4372C5.8245 6.1112 6.3305 4.8812 7.2185 4.1292C7.3555 4.0062 7.5055 3.8832 7.6425 3.7872C7.9295 3.5682 8.2305 3.4592 8.5315 3.4592C8.9145 3.4592 9.2835 3.6502 9.5705 4.0602L11.8125 7.3422C12.2635 8.0112 12.2095 8.7772 11.5665 9.3792L10.9105 9.9802C9.5015 11.2792 9.6525 12.5782 10.2535 13.5902C10.8285 14.5472 12.3045 16.2152 13.9595 17.8282C15.9825 19.7832 17.7465 21.3692 18.4845 21.8062C19.4965 22.4082 20.7815 22.5582 22.0805 21.1502L22.6815 20.5082C23.2835 19.8512 24.0485 19.8242 24.7325 20.2612L27.6855 22.1762C28.1365 22.4632 28.2875 22.8322 28.2875 23.2012C28.2875 23.5022 28.1915 23.8022 27.9595 24.1032C27.8635 24.2402 27.7405 24.3902 27.6175 24.5272C26.8655 25.4162 25.6345 25.9222 24.3085 25.9222C22.1215 25.9352 19.8105 25.2932 17.0895 23.5702C16.9805 24.7602 16.6255 25.8942 16.0915 26.9332C18.8675 28.4242 21.5335 29.0112 24.4045 29.0112C26.8375 29.0112 28.6695 28.1232 30.4475 26.3322C30.5435 26.2362 30.6255 26.1402 30.7205 26.0312C31.4315 25.1832 31.9105 24.0622 31.9105 23.1332C31.9105 21.9432 31.4315 20.9722 30.1875 20.1112ZM7.4515 30.0642C11.5255 30.0642 14.9025 26.6742 14.9025 22.5992C14.9025 18.5392 11.5395 15.1622 7.4515 15.1622C3.3765 15.1622 0.0005 18.5392 0.0005 22.5992C0.0005 26.6742 3.3765 30.0642 7.4515 30.0642ZM6.8225 26.7282C6.3985 26.7282 5.9195 26.6332 5.6195 26.2912L3.4315 23.9532C3.1585 23.6382 2.9255 23.2832 2.9255 22.8732C2.9255 21.8472 3.7185 21.3692 4.4575 21.3692C4.8805 21.3692 5.2635 21.4782 5.5235 21.7932L6.6715 23.1602L9.4195 19.4002C9.7205 18.9762 10.1715 18.7302 10.6645 18.7302C11.5115 18.7302 12.1685 19.4142 12.1685 20.2342C12.1685 20.4942 12.0995 20.8082 11.9085 21.0542L8.0255 26.1952C7.7655 26.5232 7.3005 26.7282 6.8225 26.7282Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.201171875 29.285509973243137"
          className={className}
        >
          <path
            d="              M28.451 19.4421L24.213 16.5021C22.846 15.5451 21.301 15.5041 20.152 16.6661L19.264 17.5551C18.813 18.0061 18.266 18.0471 17.637 17.5691C17.022 17.1171 15.777 16.0101 14.902 15.1351C14.068 14.3151 13.152 13.2891 12.715 12.6471C12.236 12.0181 12.277 11.4571 12.729 11.0201L13.604 10.1311C14.779 8.9831 14.738 7.4381 13.781 6.0571L10.678 1.6681C9.898 0.5611 8.859 0.0141 7.752 0.0001C6.85 -0.0129 5.893 0.3691 5.004 1.1211L4.717 1.3671C2.898 2.9531 2.188 4.6761 2.188 7.3281C2.188 9.2011 2.639 11.1981 3.719 13.5351C4.566 13.1801 5.482 12.9481 6.439 12.8791C5.291 10.5691 4.813 8.7781 4.84 7.1371C4.854 5.7151 5.359 4.4571 6.344 3.6101C6.453 3.5141 6.576 3.4181 6.686 3.3361C7.027 3.0491 7.41 2.8991 7.752 2.8991C8.148 2.8991 8.504 3.0761 8.777 3.4871L11.225 7.1101C11.594 7.6571 11.58 8.2851 11.047 8.7911L10.117 9.6941C8.955 10.7871 9.092 12.0591 9.844 13.0981C10.568 14.0961 11.908 15.5181 13.344 16.9401C14.93 18.4851 16.311 19.7701 17.186 20.4261C18.225 21.1921 19.496 21.3151 20.59 20.1661L21.492 19.2371C21.998 18.6901 22.613 18.6901 23.174 19.0591L26.633 21.3421C27.07 21.6161 27.221 21.9711 27.221 22.3671C27.221 22.7091 27.07 23.0781 26.783 23.4341C26.688 23.5431 26.606 23.6661 26.51 23.7761C25.662 24.7601 24.391 25.2661 22.982 25.2801C21.068 25.3071 18.977 24.7191 16.379 23.1741C16.283 24.1311 15.996 25.0611 15.586 25.8951C18.334 27.3301 20.672 27.8771 23.023 27.8771C25.43 27.8771 27.125 27.1121 28.711 25.4301C28.807 25.3341 28.902 25.2251 28.998 25.1161C29.764 24.2411 30.201 23.2151 30.201 22.3261C30.201 21.2461 29.682 20.2891 28.451 19.4421ZM7.205 29.2851C11.129 29.2851 14.397 26.0181 14.397 22.0801C14.397 18.1431 11.143 14.8891 7.205 14.8891C3.254 14.8891 0 18.1431 0 22.0801C0 26.0321 3.254 29.2851 7.205 29.2851ZM6.467 26.0181C6.152 26.0181 5.77 25.9221 5.523 25.6621L3.281 23.2151C3.063 22.9691 2.912 22.6681 2.912 22.3671C2.912 21.6161 3.5 21.1781 4.102 21.1781C4.457 21.1781 4.758 21.3011 4.963 21.5471L6.385 23.1331L9.42 18.9361C9.652 18.6211 10.008 18.4161 10.404 18.4161C11.047 18.4161 11.58 18.9361 11.58 19.5921C11.58 19.7971 11.512 20.0571 11.361 20.2621L7.424 25.5941C7.232 25.8541 6.863 26.0181 6.467 26.0181Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.103515625 29.6953125"
          className={className}
        >
          <path
            d="              M29.3674 19.7971L25.0054 16.7621C23.5434 15.7501 21.9574 15.7361 20.7954 16.9121L19.9334 17.7871C19.4274 18.2931 18.8534 18.3481 18.1154 17.7461C17.4454 17.2131 16.3104 16.2151 15.5174 15.4081C14.8064 14.7111 13.9594 13.7671 13.4804 13.1111C12.9064 12.3731 12.9334 11.7851 13.4394 11.2791L14.3144 10.4181C15.4904 9.2561 15.4904 7.6561 14.4644 6.2211L11.1834 1.6131C10.4454 0.5471 9.3384 0.0001 8.1754 0.0001C7.2324 0.0001 6.2614 0.3421 5.3864 1.0661L5.1274 1.2991C3.1584 2.9801 2.4204 4.7711 2.4204 7.5881C2.4204 9.4611 2.8164 11.4301 3.7594 13.6031C4.7034 13.2071 5.7424 12.9611 6.8084 12.9061C5.7554 10.7461 5.3454 8.9551 5.3594 7.2871C5.3594 5.9201 5.8794 4.6891 6.8084 3.8831C6.9314 3.7731 7.0684 3.6641 7.1914 3.5681C7.5054 3.3221 7.8474 3.1991 8.1624 3.1991C8.5584 3.1991 8.9144 3.3771 9.2014 3.7871L11.5394 7.2321C11.9494 7.8481 11.9214 8.5451 11.3204 9.1051L10.5414 9.8441C9.2424 11.0471 9.3924 12.3321 10.0624 13.3571C10.7054 14.3281 12.1134 15.8871 13.6714 17.4041C15.4764 19.1681 17.0764 20.6171 17.8694 21.1501C18.8944 21.8341 20.1794 21.9711 21.3824 20.6851L22.1214 19.9061C22.6814 19.3051 23.3794 19.2911 23.9944 19.6871L27.1934 21.7791C27.6304 22.0661 27.7814 22.4221 27.7814 22.8051C27.7814 23.1331 27.6714 23.4611 27.4124 23.7891C27.3164 23.9121 27.2074 24.0491 27.0974 24.1721C26.2914 25.1011 25.0464 25.6211 23.6794 25.6211C21.6294 25.6351 19.4144 25.0191 16.7614 23.3791C16.6524 24.4591 16.3244 25.4981 15.8594 26.4411C18.6214 27.9041 21.1364 28.4781 23.7484 28.4781C26.1814 28.4781 27.9454 27.6441 29.6274 25.9081C29.7224 25.8121 29.8184 25.7171 29.9144 25.6071C30.6384 24.7321 31.1034 23.6661 31.1034 22.7501C31.1034 21.6151 30.6114 20.6441 29.3674 19.7971ZM7.3414 29.6951C11.3344 29.6951 14.6704 26.3591 14.6704 22.3531C14.6704 18.3481 11.3474 15.0391 7.3414 15.0391C3.3224 15.0391 0.0004 18.3481 0.0004 22.3531C0.0004 26.3731 3.3224 29.6951 7.3414 29.6951ZM6.6584 26.4001C6.2894 26.4001 5.8514 26.2911 5.5784 25.9901L3.3494 23.5981C3.1174 23.3241 2.9254 22.9961 2.9254 22.6271C2.9254 21.7381 3.6094 21.2731 4.2934 21.2731C4.6894 21.2731 5.0174 21.3961 5.2634 21.6701L6.5354 23.1461L9.4204 19.1811C9.6794 18.8121 10.0894 18.5941 10.5414 18.5941C11.2934 18.5941 11.8944 19.1811 11.8944 19.9331C11.8944 20.1661 11.8264 20.4531 11.6484 20.6721L7.7384 25.9081C7.5194 26.2091 7.0954 26.4001 6.6584 26.4001Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.9453125 27.986658953557548"
          className={className}
        >
          <path
            d="              M26.4009 18.5527L22.4359 15.8187C21.3149 15.0397 19.9879 14.9167 18.7989 16.0787L17.8969 16.9667C17.5679 17.2957 17.0899 17.3637 16.6389 17.1037C16.1329 16.8027 14.6149 15.5587 13.4529 14.3967C12.1819 13.1257 11.2789 12.0997 10.8419 11.3067C10.5819 10.8557 10.6509 10.3777 10.9789 10.0487L11.8669 9.1467C13.0289 7.9577 12.9059 6.6307 12.1269 5.5097L9.3929 1.5457C8.6819 0.5057 7.8609 0.0277 6.9729 0.0007C6.1389 -0.0133 5.2229 0.3967 4.3479 1.2167L4.0879 1.4497C2.6109 2.8167 1.9829 4.4027 1.9829 6.5627C1.9829 8.5317 2.6659 10.7057 4.0879 13.2897C4.6079 13.0847 5.1539 12.9337 5.7289 12.8517C4.3199 10.3497 3.6089 8.3397 3.6369 6.5627C3.6509 5.0457 4.1699 3.7057 5.2769 2.6797C5.3589 2.6257 5.4139 2.5707 5.4829 2.5157C5.9879 2.0507 6.5079 1.8187 6.9449 1.8187C7.3829 1.8187 7.7519 1.9967 8.0389 2.4477L10.6919 6.3987C11.0329 6.9047 11.0879 7.4787 10.5269 8.0397L9.4059 9.1467C8.6129 9.9397 8.6539 11.0477 9.3649 11.9637C10.0899 12.9067 11.2659 14.1507 12.6189 15.5177C13.9179 16.8307 15.0529 17.8557 15.9829 18.5667C16.9119 19.2777 18.0199 19.3327 18.7989 18.5397L19.9059 17.4187C20.4669 16.8577 21.0409 16.9127 21.5469 17.2547L25.4979 19.9067C25.9489 20.1937 26.1269 20.5627 26.1269 21.0007C26.1269 21.4517 25.8949 21.9577 25.4299 22.4637C25.3609 22.5457 25.3199 22.5867 25.2659 22.6687C24.2399 23.7757 22.8869 24.2957 21.3419 24.3087C19.5509 24.3367 17.5409 23.6797 15.1079 22.2577C15.0389 22.8187 14.8749 23.3797 14.6699 23.8847C17.2809 25.3207 19.4139 25.9637 21.3279 25.9637C23.5159 25.9637 25.1149 25.3477 26.4959 23.8577C26.5779 23.7617 26.6599 23.6797 26.7289 23.5977C27.5489 22.7097 27.9449 21.8067 27.9449 20.9727C27.9449 20.0847 27.4399 19.2637 26.4009 18.5527ZM6.7949 27.9867C10.4999 27.9867 13.6039 24.9107 13.6039 21.1777C13.6039 17.4457 10.5269 14.3827 6.7949 14.3827C3.0759 14.3827 -0.0001 17.4597 -0.0001 21.1777C-0.0001 24.9237 3.0759 27.9867 6.7949 27.9867ZM5.9609 24.7737C5.7559 24.7737 5.5099 24.6777 5.3589 24.5007L3.0899 22.0257C2.9529 21.8617 2.8989 21.6567 2.8989 21.4787C2.8989 21.0547 3.2129 20.7407 3.6369 20.7407C3.8969 20.7407 4.0879 20.8637 4.2109 21.0137L5.9199 22.8457L9.2559 18.2387C9.3929 18.0477 9.6109 17.9107 9.8849 17.9107C10.2809 17.9107 10.6229 18.2387 10.6229 18.6487C10.6229 18.7987 10.5549 18.9497 10.4589 19.0997L6.5759 24.4867C6.4399 24.6507 6.2209 24.7737 5.9609 24.7737Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.09375 28.793310610197103"
          className={className}
        >
          <path
            d="              M27.3299 19.0179L23.2559 16.1879C21.9709 15.2989 20.4939 15.2309 19.3459 16.3789L18.4439 17.2819C18.0609 17.6509 17.5409 17.7049 17.0349 17.3639C16.5019 16.9949 15.1079 15.7639 14.1369 14.8069C13.1659 13.8359 12.1679 12.7149 11.7719 12.0859C11.4299 11.5799 11.4709 11.0609 11.8539 10.6919L12.7559 9.7889C13.9039 8.6409 13.8359 7.1509 12.9339 5.8789L10.0489 1.7499C9.2419 0.5749 8.2719 0.0139 7.2459 -0.0001C6.3709 -0.0131 5.4419 0.3829 4.5389 1.1759L4.2109 1.4629C2.5699 2.9129 1.9009 4.5389 1.9009 7.0279C1.9009 8.8729 2.4199 10.9109 3.6779 13.4539C4.4019 13.1529 5.1679 12.9339 5.9879 12.8379C4.7169 10.3639 4.1699 8.5589 4.1969 6.9459C4.2249 5.4689 4.7439 4.1979 5.7829 3.2819C5.8789 3.1999 5.9609 3.1309 6.0699 3.0489C6.4529 2.7209 6.8629 2.5429 7.2459 2.5429C7.6429 2.5429 7.9979 2.7069 8.2719 3.1179L10.8419 6.9729C11.1559 7.4379 11.1699 7.9569 10.7049 8.4219L9.5979 9.5159C8.5999 10.4869 8.7089 11.7309 9.5699 12.7839C10.4039 13.8089 11.6489 15.0669 12.9469 16.3659C14.2459 17.6509 15.3809 18.7579 16.3519 19.5509C17.4039 20.4129 18.6619 20.5219 19.6189 19.5379L20.7129 18.4299C21.1639 17.9519 21.6969 17.9789 22.1619 18.2929L25.9629 20.8089C26.3729 21.0819 26.5239 21.4239 26.5239 21.8339C26.5239 22.2039 26.3599 22.6269 26.0179 23.0099C25.9359 23.1059 25.8669 23.2019 25.7849 23.2969C24.8829 24.3359 23.5979 24.8559 22.1209 24.8829C20.3709 24.8969 18.4439 24.3639 15.9279 22.9279C15.8319 23.7479 15.5859 24.5139 15.2579 25.2389C17.9919 26.6329 20.1249 27.1529 22.1209 27.1529C24.5139 27.1529 26.1409 26.4689 27.6039 24.8699C27.6989 24.7599 27.7949 24.6509 27.8909 24.5279C28.6969 23.6249 29.0939 22.6819 29.0939 21.8209C29.0939 20.7949 28.5469 19.8659 27.3299 19.0179ZM7.0409 28.7929C10.8559 28.7929 14.0689 25.6079 14.0689 21.7519C14.0689 17.8969 10.8969 14.7249 7.0409 14.7249C3.1859 14.7249 -0.0001 17.9109 -0.0001 21.7519C-0.0001 25.6219 3.1859 28.7929 7.0409 28.7929ZM6.2349 25.5669C5.9749 25.5669 5.6599 25.4709 5.4689 25.2519L3.1719 22.7499C2.9939 22.5449 2.8989 22.2859 2.8989 22.0529C2.8989 21.4649 3.3499 21.0689 3.8689 21.0689C4.1839 21.0689 4.4299 21.2049 4.5939 21.3829L6.1799 23.1199L9.4059 18.6489C9.5979 18.4029 9.8849 18.2249 10.2269 18.2249C10.7599 18.2249 11.2109 18.6489 11.2109 19.1959C11.2109 19.3599 11.1429 19.5789 11.0059 19.7559L7.0409 25.2109C6.8769 25.4299 6.5759 25.5669 6.2349 25.5669Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.4921875 28.506201108605637"
          className={className}
        >
          <path
            d="              M26.7015 18.7715L22.7225 16.0105C21.4925 15.1625 20.0565 15.0665 18.9085 16.2015L17.9925 17.1175C17.6505 17.4595 17.1445 17.5005 16.7205 17.2265C16.2285 16.9265 14.7385 15.6275 13.7265 14.6155C12.6605 13.5625 11.6345 12.3875 11.2515 11.7715C10.9925 11.3345 11.0335 10.8425 11.3755 10.5005L12.2775 9.5845C13.4255 8.4355 13.3305 6.9865 12.4825 5.7695L9.7205 1.7915C8.8735 0.5745 7.9575 0.0135 6.9725 0.0005C6.1115 -0.0135 5.2095 0.3835 4.2935 1.2035L3.9515 1.5045C2.3925 2.8985 1.7505 4.4715 1.7505 6.8365C1.7505 8.6815 2.3105 10.7325 3.6645 13.3985C4.3065 13.1255 5.0175 12.9205 5.7425 12.8105C4.4025 10.2405 3.8145 8.4225 3.8415 6.8365C3.8695 5.3325 4.4025 4.0335 5.4685 3.1035C5.5645 3.0215 5.6325 2.9535 5.7285 2.8855C6.1385 2.5295 6.5765 2.3385 6.9725 2.3385C7.3695 2.3385 7.7245 2.4885 7.9845 2.8985L10.6365 6.8775C10.9235 7.3015 10.9515 7.7795 10.5275 8.2035L9.3245 9.4065C8.4215 10.3085 8.5175 11.5395 9.4195 12.5925C10.3085 13.6315 11.5115 14.8065 12.7425 16.0375C13.8635 17.1855 14.8615 18.1705 15.9005 19.0455C16.9665 19.9615 18.1975 20.0565 19.0855 19.1685L20.2895 17.9655C20.7125 17.5415 21.1775 17.5685 21.6155 17.8425L25.5935 20.4945C26.0035 20.7675 26.1545 21.1095 26.1545 21.5195C26.1545 21.9165 25.9625 22.3535 25.6075 22.7635C25.5255 22.8595 25.4705 22.9285 25.3885 23.0235C24.4595 24.0905 23.1605 24.6095 21.6425 24.6375C20.0015 24.6645 18.1565 24.1585 15.6815 22.7915C15.5855 23.5155 15.3675 24.2135 15.0805 24.8555C17.8145 26.2365 19.8245 26.7425 21.6285 26.7425C24.0215 26.7425 25.5935 26.0995 26.9745 24.5415C27.0845 24.4315 27.1795 24.3085 27.2895 24.1995C28.1095 23.2835 28.4925 22.3815 28.4925 21.5195C28.4925 20.5355 27.9185 19.6195 26.7015 18.7715ZM6.9455 28.5065C10.7185 28.5065 13.9045 25.3615 13.9045 21.5605C13.9045 17.7605 10.7595 14.6155 6.9455 14.6155C3.1445 14.6155 0.0005 17.7605 0.0005 21.5605C0.0005 25.3895 3.1445 28.5065 6.9455 28.5065ZM6.1255 25.3065C5.8925 25.3065 5.6195 25.2115 5.4415 25.0195L3.1175 22.4765C2.9665 22.2995 2.8985 22.0535 2.8985 21.8615C2.8985 21.3695 3.2675 21.0005 3.7465 21.0005C4.0335 21.0005 4.2515 21.1375 4.4025 21.3015L6.0845 23.1055L9.4195 18.4845C9.5705 18.2655 9.8305 18.1015 10.1445 18.1015C10.5955 18.1015 11.0055 18.4715 11.0055 18.9495C11.0055 19.1135 10.9375 19.2915 10.8145 19.4695L6.8355 24.9925C6.6995 25.1835 6.4255 25.3065 6.1255 25.3065Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.572265625 29.012072332974135"
          className={className}
        >
          <path
            d="              M27.8089 19.1957L23.6659 16.3247C22.3539 15.4087 20.8359 15.3407 19.6879 16.5027L18.7989 17.3907C18.3889 17.8007 17.8559 17.8557 17.2949 17.4457C16.7339 17.0497 15.3949 15.8737 14.4649 14.9437C13.5489 14.0277 12.5919 12.9617 12.1819 12.3327C11.7849 11.7717 11.8259 11.2387 12.2229 10.8287L13.1249 9.9257C14.2739 8.7777 14.2189 7.2737 13.3029 5.9477L10.3219 1.7097C9.5159 0.5607 8.5179 0.0137 7.4649 0.0007C6.5759 -0.0133 5.6469 0.3697 4.7439 1.1487L4.4299 1.4227C2.7069 2.9257 2.0239 4.5937 2.0239 7.1507C2.0239 9.0097 2.5159 11.0197 3.7049 13.4807C4.4709 13.1527 5.3049 12.9337 6.1799 12.8517C4.9629 10.4457 4.4569 8.6407 4.4709 7.0137C4.4839 5.5787 5.0039 4.3067 6.0159 3.4187C6.1249 3.3367 6.2209 3.2547 6.3299 3.1727C6.6989 2.8577 7.0959 2.6937 7.4649 2.6937C7.8609 2.6937 8.2169 2.8577 8.4899 3.2677L11.0059 7.0277C11.3479 7.5337 11.3479 8.0937 10.8559 8.5727L9.8169 9.5847C8.7639 10.6097 8.8729 11.8677 9.6799 12.9067C10.4729 13.9187 11.7579 15.2587 13.1249 16.6117C14.5329 18.0067 15.7769 19.1957 16.7069 19.9207C17.7599 20.7407 19.0179 20.8497 20.0289 19.7977L21.0409 18.7717C21.5329 18.2657 22.0939 18.2797 22.5999 18.6077L26.2499 21.0277C26.6739 21.3007 26.8239 21.6567 26.8239 22.0527C26.8239 22.4227 26.6599 22.8187 26.3459 23.1877C26.2639 23.2977 26.1819 23.3927 26.0999 23.5027C25.2109 24.5137 23.9399 25.0337 22.4899 25.0477C20.6719 25.0747 18.6759 24.5137 16.1189 23.0377C16.0239 23.9127 15.7639 24.7467 15.3949 25.5117C18.1429 26.9337 20.3579 27.4677 22.5039 27.4677C24.9099 27.4677 26.5649 26.7427 28.0819 25.1157C28.1779 25.0067 28.2739 24.8967 28.3689 24.7737C29.1619 23.8847 29.5719 22.9147 29.5719 22.0257C29.5719 20.9867 29.0389 20.0437 27.8089 19.1957ZM7.1089 29.0117C10.9649 29.0117 14.2189 25.7717 14.2189 21.8887C14.2189 18.0067 11.0059 14.7937 7.1089 14.7937C3.2129 14.7937 -0.0001 18.0067 -0.0001 21.8887C-0.0001 25.7997 3.2129 29.0117 7.1089 29.0117ZM6.3439 25.7587C6.0569 25.7587 5.7149 25.6627 5.4959 25.4167L3.2129 22.9417C3.0219 22.7227 2.8989 22.4497 2.8989 22.1757C2.8989 21.5197 3.4039 21.1097 3.9649 21.1097C4.3069 21.1097 4.5669 21.2467 4.7579 21.4517L6.2619 23.1197L9.4059 18.7717C9.6109 18.4847 9.9399 18.3067 10.3089 18.3067C10.8829 18.3067 11.3609 18.7717 11.3609 19.3597C11.3609 19.5507 11.3069 19.7697 11.1559 19.9747L7.2049 25.3757C7.0269 25.6077 6.6989 25.7587 6.3439 25.7587Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.220703125 27.26204963599058"
          className={className}
        >
          <path
            d="              M26.0173 18.2252L22.0803 15.5452C21.0823 14.8612 19.9063 14.6972 18.6623 15.9012L17.7733 16.7622C17.4723 17.0632 17.0353 17.1582 16.5563 16.9122C16.0093 16.6252 14.4653 15.4632 13.0973 14.0962C11.5393 12.5512 10.8413 11.7032 10.3083 10.6642C10.0623 10.1862 10.1443 9.7482 10.4593 9.4472L11.3203 8.5452C12.5233 7.3152 12.3593 6.1392 11.6753 5.1412L8.9963 1.2032C8.4353 0.3972 7.7383 0.0142 6.9723 0.0002C6.1663 -0.0138 5.2503 0.3972 4.4293 1.2032L4.2933 1.3402C2.8983 2.6942 2.2973 4.3202 2.2973 6.1942C2.2973 8.3262 3.1313 10.6512 4.6623 13.1112C5.0043 13.0162 5.3593 12.9342 5.7153 12.8792C4.2113 10.4732 3.3493 8.2312 3.3633 6.2072C3.3633 4.6492 3.8823 3.2542 5.0313 2.1332C5.0863 2.0922 5.1273 2.0512 5.1683 1.9962C5.7973 1.3952 6.4123 1.1082 6.9183 1.1082C7.3963 1.1082 7.7793 1.3402 8.1213 1.8322L10.7733 5.7562C11.1703 6.3442 11.2793 7.0692 10.5273 7.8072L9.5153 8.8052C8.8733 9.4342 8.8453 10.3632 9.2973 11.1022C9.8023 11.9222 10.9373 13.2622 12.4683 14.8202C13.9863 16.3652 15.2983 17.4182 16.1193 17.9102C16.8573 18.3752 17.7873 18.3482 18.4163 17.7052L19.4143 16.6942C20.1523 15.9422 20.8633 16.0512 21.4653 16.4472L25.3883 19.1002C25.8813 19.4282 26.1133 19.8242 26.1133 20.2892C26.1133 20.8222 25.8263 21.4242 25.1973 22.0532C25.1563 22.1082 25.1293 22.1352 25.0883 22.1762C23.9533 23.3382 22.5313 23.8582 20.9593 23.8582C18.9493 23.8712 16.7343 23.0372 14.3693 21.5472C14.3283 21.9032 14.2463 22.2582 14.1363 22.6002C16.5973 24.0902 18.8813 24.9242 20.9453 24.9242C22.8733 24.9242 24.5003 24.3502 25.8813 22.9282C25.9223 22.8732 25.9633 22.8462 26.0173 22.7912C26.8383 21.9442 27.2203 21.0552 27.2203 20.2352C27.2203 19.4832 26.8243 18.7722 26.0173 18.2252ZM6.6033 27.2622C10.2133 27.2622 13.2073 24.2812 13.2073 20.6582C13.2073 17.0352 10.2263 14.0552 6.6033 14.0552C2.9943 14.0552 0.0003 17.0492 0.0003 20.6582C0.0003 24.2952 2.9943 27.2622 6.6033 27.2622ZM5.7563 24.0352C5.5783 24.0352 5.4003 23.9672 5.2633 23.8172L3.0623 21.4102C2.9533 21.2742 2.8983 21.1102 2.8983 20.9592C2.8983 20.6172 3.1583 20.3852 3.4863 20.3852C3.7183 20.3852 3.8553 20.5082 3.9653 20.6172L5.7153 22.4902L9.0503 17.9102C9.1603 17.7462 9.3383 17.6512 9.5433 17.6512C9.8573 17.6512 10.1313 17.8972 10.1313 18.2252C10.1313 18.3612 10.0763 18.4852 9.9943 18.6082L6.2343 23.7892C6.1253 23.9402 5.9613 24.0352 5.7563 24.0352Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.8515625 26.893822931508165"
          className={className}
        >
          <path
            d="              M25.8124 18.0616L21.8884 15.3956C20.9724 14.7666 19.8654 14.5756 18.6074 15.7926L17.7184 16.6536C17.4184 16.9406 16.9944 17.0496 16.5154 16.8036C15.9554 16.5306 14.3964 15.3956 12.9204 13.9466C11.2114 12.2516 10.6094 11.4996 10.0354 10.3376C9.7894 9.8446 9.8984 9.4216 10.1854 9.1336L11.0464 8.2456C12.2634 6.9876 12.0724 5.8666 11.4574 4.9506L8.7774 1.0266C8.3124 0.3426 7.6834 0.0146 6.9864 0.0016C6.1794 -0.0264 5.2774 0.3976 4.4704 1.2046L4.3884 1.2866C3.0484 2.6266 2.4614 4.2666 2.4614 6.0036C2.4614 8.2046 3.3774 10.6246 4.9494 13.0166C5.2094 12.9756 5.4554 12.9216 5.7144 12.8936C4.1564 10.5426 3.2264 8.1636 3.2264 6.0166C3.2264 4.4446 3.7464 3.0086 4.9214 1.8336C4.9494 1.8056 4.9904 1.7646 5.0174 1.7376C5.7014 1.0536 6.3714 0.7396 6.9184 0.7396C7.4104 0.7396 7.8064 0.9996 8.1624 1.5056L10.8144 5.4156C11.2524 6.0576 11.3754 6.8506 10.5274 7.6846L9.5704 8.6146C8.9964 9.1746 8.9414 10.0226 9.2694 10.6516C9.6664 11.4176 10.7734 12.7976 12.3864 14.4526C14.0274 16.1206 15.4214 17.1866 16.1874 17.5696C16.8304 17.8976 17.6774 17.8426 18.2244 17.2686L19.1684 16.3116C19.9884 15.4636 20.7814 15.6006 21.4374 16.0386L25.3344 18.6906C25.8394 19.0326 26.1134 19.4426 26.1134 19.9346C26.1134 20.4956 25.7984 21.1376 25.0874 21.8486C25.0604 21.8766 25.0334 21.8896 25.0054 21.9306C23.8164 23.1206 22.3674 23.6266 20.7544 23.6266C18.6484 23.6266 16.3244 22.7106 13.9864 21.1656C13.9724 21.4246 13.9184 21.6716 13.8774 21.9306C16.2424 23.4486 18.6074 24.3786 20.7544 24.3786C22.5454 24.3786 24.1854 23.8316 25.5664 22.4506C25.5934 22.4226 25.6074 22.3956 25.6484 22.3686C26.4684 21.5476 26.8514 20.6596 26.8514 19.8526C26.8514 19.1696 26.5094 18.5266 25.8124 18.0616ZM6.5074 26.8936C10.0624 26.8936 13.0024 23.9676 13.0024 20.3856C13.0024 16.8176 10.0764 13.8916 6.5074 13.8916C2.9534 13.8916 0.0004 16.8316 0.0004 20.3856C0.0004 23.9676 2.9534 26.8936 6.5074 26.8936ZM5.6464 23.6676C5.4964 23.6676 5.3324 23.5986 5.2094 23.4486L3.0484 21.0836C2.9534 20.9606 2.8984 20.8236 2.8984 20.6866C2.8984 20.3996 3.1174 20.1806 3.4184 20.1806C3.6234 20.1806 3.7464 20.3036 3.8414 20.4136L5.6054 22.2996L8.9414 17.7336C9.0504 17.5836 9.2014 17.5016 9.3794 17.5016C9.6524 17.5016 9.8714 17.7336 9.8714 18.0066C9.8714 18.1436 9.8164 18.2396 9.7484 18.3486L6.0564 23.4346C5.9614 23.5716 5.8374 23.6676 5.6464 23.6676Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}