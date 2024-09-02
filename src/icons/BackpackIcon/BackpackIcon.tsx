import { IconProps } from "../../types"

export default function BackpackIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.870013561318938 37.59765625"
          className={className}
        >
          <path
            d="              M8.1901 37.5972H16.6801C22.0531 37.5972 24.9101 34.6992 24.8691 29.2442C24.8151 23.6522 24.7871 19.5642 24.6371 16.5022C24.3091 9.1742 22.4771 5.6872 17.5821 4.4842C17.2541 1.7092 15.3131 0.0002 12.4141 0.0002C9.5161 0.0002 7.5881 1.7092 7.2461 4.4842C2.3931 5.7012 0.5611 9.1872 0.2331 16.5022C0.0821 19.5642 0.0551 23.6522 0.0001 29.2442C-0.0409 34.6992 2.8031 37.5972 8.1901 37.5972ZM12.4141 2.9672C13.2351 2.9672 13.8501 3.3492 14.1921 4.0062C13.6311 3.9782 13.0571 3.9652 12.4281 3.9652C11.8131 3.9652 11.2111 3.9782 10.6371 4.0192C10.9791 3.3492 11.6081 2.9672 12.4141 2.9672ZM8.1901 33.5232C5.0591 33.5232 4.0201 32.4572 4.0471 29.2712C4.1021 23.6932 4.1431 19.6602 4.2801 16.6932C4.5941 9.3512 5.8661 8.0252 12.4281 8.0252C19.0041 8.0252 20.2761 9.3512 20.5901 16.6932C20.7271 19.6602 20.7681 23.6932 20.8231 29.2712C20.8501 32.4572 19.8111 33.5232 16.6801 33.5232ZM8.1761 31.3082H16.6941C18.1981 31.3082 19.2091 30.2972 19.2091 28.8202V22.2172C19.2091 20.7542 18.1981 19.7282 16.6941 19.7282H8.1761C6.7001 19.7282 5.6601 20.7542 5.6601 22.2172V28.8202C5.6601 30.2832 6.7001 31.3082 8.1761 31.3082ZM8.5321 22.8872C8.5321 22.7092 8.6551 22.5862 8.8461 22.5862H16.0241C16.2151 22.5862 16.3381 22.7092 16.3381 22.8872V23.8572H8.5321ZM8.8461 28.4512C8.6551 28.4512 8.5321 28.3282 8.5321 28.1642V26.4962H16.3381V28.1642C16.3381 28.3282 16.2151 28.4512 16.0241 28.4512Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.680643976961267 35.95703125"
          className={className}
        >
          <path
            d="              M7.6292 35.9569H16.0512C21.1232 35.9569 23.7212 33.3049 23.6802 28.1639C23.6252 22.6269 23.5982 18.5799 23.4612 15.5589C23.1332 8.4079 21.4102 5.1269 16.6252 4.0329C16.3112 1.5999 14.4792 -0.0001 11.8402 -0.0001C9.1882 -0.0001 7.3422 1.5999 7.0412 4.0329C2.2702 5.1409 0.5472 8.4219 0.2192 15.5589C0.0822 18.5799 0.0552 22.6269 0.0002 28.1639C-0.0408 33.3049 2.5572 35.9569 7.6292 35.9569ZM11.8402 2.4469C12.7972 2.4469 13.5352 2.9119 13.8912 3.6509C13.2482 3.6089 12.5652 3.5959 11.8402 3.5959C11.1022 3.5959 10.4182 3.6089 9.7762 3.6509C10.1312 2.9119 10.8692 2.4469 11.8402 2.4469ZM7.6292 32.9079C4.2522 32.9079 2.9942 31.6369 3.0352 28.1919C3.0902 22.6539 3.1182 18.6619 3.2542 15.6949C3.5822 8.1619 5.0452 6.6309 11.8402 6.6309C18.6352 6.6309 20.0982 8.1619 20.4262 15.6949C20.5632 18.6619 20.5902 22.6539 20.6452 28.1919C20.6862 31.6369 19.4282 32.9079 16.0512 32.9079ZM7.4652 30.1189H16.2152C17.5822 30.1189 18.4982 29.2029 18.4982 27.8499V21.0819C18.4982 19.7419 17.5822 18.8259 16.2152 18.8259H7.4652C6.1122 18.8259 5.1822 19.7419 5.1822 21.0819V27.8499C5.1822 29.1899 6.1122 30.1189 7.4652 30.1189ZM7.5882 21.5879C7.5882 21.3559 7.7392 21.2049 7.9712 21.2049H15.7092C15.9422 21.2049 16.0922 21.3559 16.0922 21.5879V22.7229H7.5882ZM7.9712 27.7269C7.7392 27.7269 7.5882 27.5759 7.5882 27.3579V24.9099H16.0922V27.3579C16.0922 27.5759 15.9422 27.7269 15.7092 27.7269Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.309503184117283 36.818359375"
          className={className}
        >
          <path
            d="              M7.9301 36.8184H16.3791C21.6161 36.8184 24.3501 34.0434 24.3091 28.7384C24.2541 23.1734 24.2271 19.0994 24.0771 16.0644C23.7481 8.8184 21.9711 5.4274 17.1311 4.2794C16.8031 1.6684 14.9161 0.0004 12.1411 0.0004C9.3661 0.0004 7.4791 1.6684 7.1511 4.2794C2.3381 5.4414 0.5611 8.8324 0.2331 16.0644C0.0821 19.0994 0.0551 23.1734 0.0001 28.7384C-0.0409 34.0434 2.6941 36.8184 7.9301 36.8184ZM12.1411 2.7344C13.0301 2.7344 13.7001 3.1444 14.0551 3.8414C13.4531 3.8144 12.8251 3.7874 12.1551 3.7874C11.4851 3.7874 10.8421 3.8144 10.2271 3.8414C10.5821 3.1444 11.2661 2.7344 12.1411 2.7344ZM7.9301 33.2364C4.6761 33.2364 3.5411 32.0744 3.5691 28.7654C3.6231 23.2014 3.6511 19.1954 3.8011 16.2284C4.1161 8.7914 5.4831 7.3694 12.1551 7.3694C18.8271 7.3694 20.1941 8.7914 20.5081 16.2284C20.6591 19.1954 20.6861 23.2014 20.7411 28.7654C20.7681 32.0744 19.6331 33.2364 16.3791 33.2364ZM7.8341 30.7484H16.4751C17.9101 30.7484 18.8681 29.7914 18.8681 28.3694V21.6834C18.8681 20.2754 17.9101 19.3044 16.4751 19.3044H7.8341C6.4121 19.3044 5.4421 20.2894 5.4421 21.6834V28.3694C5.4421 29.7774 6.4121 30.7484 7.8341 30.7484ZM8.0941 22.2854C8.0941 22.0804 8.2311 21.9434 8.4361 21.9434H15.8731C16.0781 21.9434 16.2151 22.0804 16.2151 22.2854V23.3244H8.0941ZM8.4361 28.1234C8.2311 28.1234 8.0941 27.9864 8.0941 27.7814V25.7574H16.2151V27.7814C16.2151 27.9864 16.0781 28.1234 15.8731 28.1234Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.657365126428235 32.990234375"
          className={className}
        >
          <path
            d="              M6.7412 32.9903H14.9162C19.4832 32.9903 21.6982 30.7073 21.6572 26.0993C21.6022 20.7133 21.5752 16.8023 21.4382 13.8773C21.1372 6.9863 19.5372 4.0603 14.7802 3.1993C14.5202 1.3263 12.9342 0.0003 10.8422 0.0003C8.7372 0.0003 7.1512 1.3263 6.8912 3.1993C2.1192 4.0603 0.5202 6.9863 0.2192 13.8773C0.0822 16.8023 0.0552 20.7133 0.0002 26.0993C-0.0408 30.7073 2.1882 32.9903 6.7412 32.9903ZM10.8282 2.8983C9.9942 2.8983 9.2152 2.9253 8.4912 2.9943C8.8192 2.0913 9.7072 1.5173 10.8422 1.5173C11.9632 1.5173 12.8522 2.0913 13.1802 2.9943C12.4552 2.9253 11.6762 2.8983 10.8282 2.8983ZM6.7412 31.3903C3.0902 31.3903 1.5592 29.8453 1.6002 26.1133C1.6552 20.7403 1.6822 16.8433 1.8192 13.9593C2.1602 6.2753 3.8562 4.5113 10.8282 4.5113C17.8012 4.5113 19.4962 6.2753 19.8382 13.9593C19.9752 16.8433 20.0022 20.7403 20.0572 26.1133C20.0982 29.8453 18.5672 31.3903 14.9162 31.3903ZM6.5352 27.7403H15.1212C16.2972 27.7403 17.0772 26.9613 17.0772 25.7993V19.2223C17.0772 18.0473 16.2972 17.2813 15.1212 17.2813H6.5352C5.3732 17.2813 4.5942 18.0603 4.5942 19.2223V25.7993C4.5942 26.9613 5.3732 27.7403 6.5352 27.7403ZM6.0982 19.4143C6.0982 19.0453 6.3582 18.7853 6.7412 18.7853H14.9162C15.2992 18.7853 15.5592 19.0453 15.5592 19.4143V20.8773H6.0982ZM6.7412 26.2363C6.3582 26.2363 6.0982 25.9763 6.0982 25.6073V22.2443H15.5592V25.6073C15.5592 25.9763 15.2992 26.2363 14.9162 26.2363Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.928469341502183 34.890625"
          className={className}
        >
          <path
            d="              M7.2742 34.8907H15.6412C20.5222 34.8907 22.9552 32.4027 22.9282 27.4667C22.8732 21.9567 22.8322 17.9377 22.6962 14.9437C22.3812 7.9157 20.7272 4.7717 16.0242 3.7457C15.7232 1.5317 13.9462 -0.0003 11.4572 -0.0003C8.9832 -0.0003 7.1922 1.5317 6.9052 3.7457C2.1882 4.7717 0.5342 7.9157 0.2192 14.9437C0.0822 17.9377 0.0552 21.9567 0.0002 27.4667C-0.0408 32.4027 2.4072 34.8907 7.2742 34.8907ZM11.4572 2.1187C12.5242 2.1187 13.3442 2.6247 13.7132 3.4177C13.0162 3.3637 12.2642 3.3357 11.4572 3.3357C10.6642 3.3357 9.9122 3.3637 9.2152 3.4177C9.5712 2.6247 10.3912 2.1187 11.4572 2.1187ZM7.2742 32.5117C3.7332 32.5117 2.3522 31.0897 2.3792 27.4937C2.4342 21.9847 2.4752 18.0057 2.6122 15.0527C2.9402 7.3827 4.5262 5.7287 11.4572 5.7287C18.4032 5.7287 19.9752 7.3827 20.3172 15.0527C20.4532 18.0057 20.4942 21.9847 20.5352 27.4937C20.5772 31.0897 19.1822 32.5117 15.6412 32.5117ZM7.0002 29.3397H15.9142C17.2002 29.3397 18.0472 28.5057 18.0472 27.2207V20.3577C18.0472 19.0857 17.2002 18.2387 15.9142 18.2387H7.0002C5.7432 18.2387 4.8812 19.0997 4.8812 20.3577V27.2207C4.8812 28.4927 5.7432 29.3397 7.0002 29.3397ZM6.9732 20.7407C6.9732 20.4937 7.1512 20.3167 7.3972 20.3167H15.5182C15.7782 20.3167 15.9422 20.4937 15.9422 20.7407V21.9847H6.9732ZM7.3972 27.2617C7.1512 27.2617 6.9732 27.0837 6.9732 26.8377V23.8847H15.9422V26.8377C15.9422 27.0837 15.7782 27.2617 15.5182 27.2617Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.491289045281246 34.2890625"
          className={className}
        >
          <path
            d="              M7.0692 34.2889H15.4222C20.1802 34.2889 22.5322 31.8829 22.4912 27.0699C22.4362 21.5739 22.4092 17.5819 22.2722 14.5879C21.9572 7.6429 20.3442 4.5669 15.6822 3.5819C15.3952 1.4899 13.6312 -0.0001 11.2522 -0.0001C8.8602 -0.0001 7.1102 1.4899 6.8232 3.5819C2.1472 4.5669 0.5342 7.6289 0.2192 14.5879C0.0822 17.5819 0.0552 21.5739 0.0002 27.0699C-0.0408 31.8829 2.3112 34.2889 7.0692 34.2889ZM11.2522 3.1989C10.4052 3.1989 9.6252 3.2269 8.8872 3.2809C9.2562 2.4609 10.1312 1.9279 11.2522 1.9279C12.3732 1.9279 13.2482 2.4609 13.6042 3.2809C12.8792 3.2269 12.0862 3.1989 11.2522 3.1989ZM7.0692 32.2789C3.4462 32.2789 1.9832 30.7889 2.0102 27.0979C2.0652 21.6019 2.1062 17.6369 2.2432 14.6839C2.5842 6.9449 4.2252 5.2229 11.2522 5.2229C18.2662 5.2229 19.9072 6.9449 20.2622 14.6839C20.3852 17.6369 20.4262 21.6019 20.4812 27.0979C20.5082 30.7889 19.0452 32.2789 15.4222 32.2789ZM6.7542 28.9019H15.7502C16.9812 28.9019 17.7872 28.0959 17.7872 26.8789V19.9469C17.7872 18.7169 16.9812 17.9099 15.7502 17.9099H6.7542C5.5242 17.9099 4.7032 18.7309 4.7032 19.9469V26.8789C4.7032 28.0819 5.5242 28.9019 6.7542 28.9019ZM6.6312 20.2749C6.6312 20.0019 6.8092 19.8239 7.0822 19.8239H15.4092C15.6822 19.8239 15.8602 20.0019 15.8602 20.2749V21.5739H6.6312ZM7.0822 26.9879C6.8092 26.9879 6.6312 26.8109 6.6312 26.5509V23.2969H15.8602V26.5509C15.8602 26.8109 15.6822 26.9879 15.4092 26.9879Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.24317726682123 35.35546875"
          className={className}
        >
          <path
            d="              M7.4242 35.3551H15.8192C20.7822 35.3551 23.2842 32.7851 23.2432 27.7671C23.2022 22.2441 23.1602 18.2111 23.0242 15.2031C22.7092 8.1351 21.0282 4.9221 16.2842 3.8691C15.9832 1.5581 14.1642 0.0001 11.6212 0.0001C9.0652 0.0001 7.2602 1.5581 6.9592 3.8691C2.2292 4.9351 0.5472 8.1351 0.2192 15.2031C0.0822 18.2111 0.0552 22.2441 0.0002 27.7671C-0.0408 32.7851 2.4752 35.3551 7.4242 35.3551ZM11.6212 2.2691C12.6332 2.2691 13.4262 2.7481 13.7952 3.5271C13.1122 3.4731 12.4012 3.4451 11.6212 3.4451C10.8562 3.4451 10.1312 3.4731 9.4482 3.5271C9.8172 2.7481 10.6102 2.2691 11.6212 2.2691ZM7.4242 32.6891C3.9522 32.6891 2.6252 31.3221 2.6662 27.7951C2.7212 22.2711 2.7482 18.2931 2.8852 15.3261C3.2272 7.7251 4.7442 6.1251 11.6212 6.1251C18.4982 6.1251 20.0302 7.7251 20.3582 15.3261C20.4942 18.2931 20.5352 22.2711 20.5902 27.7951C20.6182 31.3221 19.2912 32.6891 15.8192 32.6891ZM7.2052 29.6821H16.0512C17.3642 29.6821 18.2392 28.8071 18.2392 27.4941V20.6721C18.2392 19.3731 17.3642 18.4981 16.0512 18.4981H7.2052C5.8932 18.4981 5.0042 19.3731 5.0042 20.6721V27.4941C5.0042 28.7931 5.8932 29.6821 7.2052 29.6821ZM7.2332 21.1091C7.2332 20.8631 7.3972 20.7131 7.6432 20.7131H15.6002C15.8462 20.7131 16.0102 20.8631 16.0102 21.1091V22.3121H7.2332ZM7.6432 27.4671C7.3972 27.4671 7.2332 27.3031 7.2332 27.0701V24.3221H16.0102V27.0701C16.0102 27.3031 15.8462 27.4671 15.6002 27.4671Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.550038122797737 31.25390625"
          className={className}
        >
          <path
            d="              M6.3033 31.254H14.2603C18.5533 31.254 20.5903 29.148 20.5493 24.814C20.5083 19.578 20.4673 15.777 20.3443 12.92C20.0433 6.111 18.4853 3.404 13.5903 2.693C13.3713 1.107 12.0043 0 10.2953 0C8.5733 0 7.1923 1.107 6.9873 2.693C2.0783 3.404 0.5063 6.111 0.2193 12.92C0.0823 15.777 0.0553 19.578 0.0003 24.814C-0.0407 29.148 2.0103 31.254 6.3033 31.254ZM10.2823 2.488C9.4483 2.488 8.6823 2.516 7.9853 2.584C8.2313 1.6 9.1603 0.957 10.2953 0.957C11.4163 0.957 12.3463 1.6 12.5923 2.584C11.8813 2.516 11.1163 2.488 10.2823 2.488ZM6.3033 30.201C2.6123 30.201 1.0123 28.588 1.0393 24.814C1.0943 19.578 1.1353 15.791 1.2583 12.988C1.5863 5.373 3.3643 3.555 10.2823 3.555C17.2003 3.555 18.9633 5.373 19.2913 12.988C19.4283 15.791 19.4553 19.578 19.5103 24.814C19.5373 28.588 17.9383 30.201 14.2603 30.201ZM6.2483 26.182H14.3153C15.3953 26.182 16.1193 25.457 16.1193 24.35V18.266C16.1193 17.172 15.3953 16.447 14.3153 16.447H6.2483C5.1553 16.447 4.4303 17.172 4.4303 18.266V24.35C4.4303 25.457 5.1553 26.182 6.2483 26.182ZM5.3873 18.279C5.3873 17.76 5.7433 17.404 6.2893 17.404H14.2743C14.8073 17.404 15.1623 17.76 15.1623 18.279V19.934H5.3873ZM6.2893 25.225C5.7433 25.225 5.3873 24.869 5.3873 24.336V20.85H15.1623V24.336C15.1623 24.869 14.8073 25.225 14.2743 25.225Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.989544985774604 30.365234375"
          className={className}
        >
          <path
            d="              M6.0713 30.3655H13.9183C18.0753 30.3655 20.0303 28.3415 19.9893 24.1585C19.9343 18.9905 19.9073 15.2445 19.7843 12.4415C19.4833 5.6875 17.9523 3.0765 12.9753 2.4475C12.7973 0.9985 11.5263 0.0005 10.0083 0.0005C8.4773 0.0005 7.2193 0.9985 7.0283 2.4475C2.0513 3.0765 0.5063 5.6735 0.2053 12.4415C0.0823 15.2445 0.0553 18.9905 0.0003 24.1585C-0.0407 28.3415 1.9143 30.3655 6.0713 30.3655ZM9.9943 2.2835C9.1743 2.2835 8.4223 2.3105 7.7253 2.3785C7.9303 1.3535 8.8873 0.6695 10.0083 0.6695C11.1293 0.6695 12.0733 1.3535 12.2783 2.3785C11.5803 2.3105 10.8283 2.2835 9.9943 2.2835ZM6.0713 29.5995C2.3663 29.5995 0.7253 27.9455 0.7663 24.1585C0.8213 18.9905 0.8483 15.2575 0.9713 12.4965C1.2993 4.9215 3.1043 3.0625 9.9943 3.0625C16.8853 3.0625 18.6903 4.9215 19.0183 12.4965C19.1413 15.2575 19.1683 18.9905 19.2233 24.1585C19.2643 27.9455 17.6233 29.5995 13.9183 29.5995ZM6.0983 25.3755H13.8913C14.9303 25.3755 15.6273 24.6775 15.6273 23.6255V17.7735C15.6273 16.7205 14.9303 16.0235 13.8913 16.0235H6.0983C5.0593 16.0235 4.3623 16.7205 4.3623 17.7735V23.6255C4.3623 24.6775 5.0593 25.3755 6.0983 25.3755ZM5.0323 17.7055C5.0323 17.1035 5.4423 16.6935 6.0573 16.6935H13.9323C14.5473 16.6935 14.9573 17.1035 14.9573 17.7055V19.4555H5.0323ZM6.0573 24.7055C5.4423 24.7055 5.0323 24.2945 5.0323 23.6935V20.1385H14.9573V23.6935C14.9573 24.2945 14.5473 24.7055 13.9323 24.7055Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}