import { IconProps } from "../../types"

export default function BoltBadgeAutomaticFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 34.594473835892984"
          className={className}
        >
          <path
            d="              M0 18.8852C0 19.6242 0.574 20.1432 1.326 20.1432H10.145L5.578 31.9282C4.867 33.7882 6.795 34.7722 8.053 33.2822L11.361 29.3312C11.197 28.6332 11.115 27.8812 11.115 27.1292C11.115 21.6332 15.955 17.0672 21.369 17.4772L22.381 16.2472C22.695 15.8772 22.832 15.5222 22.832 15.1252C22.832 14.3742 22.258 13.8542 21.506 13.8542H12.687L17.254 2.0692C17.979 0.2232 16.037 -0.7608 14.779 0.7152L0.451 17.7642C0.137 18.1202 0 18.4892 0 18.8852ZM20.795 34.5942C24.883 34.5942 28.246 31.1902 28.246 27.1292C28.246 23.0692 24.883 19.6922 20.795 19.6922C16.721 19.6922 13.344 23.0692 13.344 27.1292C13.344 31.2042 16.721 34.5942 20.795 34.5942ZM18.184 31.2312C17.254 31.2312 16.707 30.6982 16.707 29.8092C16.707 29.5632 16.762 29.2352 16.912 28.7842L18.32 24.4362C18.744 23.0692 19.523 22.4402 20.768 22.4402C22.053 22.4402 22.873 23.0692 23.297 24.4362L24.691 28.7842C24.828 29.2352 24.91 29.5632 24.91 29.8092C24.91 30.6982 24.35 31.2312 23.434 31.2312C22.627 31.2312 22.135 30.7932 21.957 29.9322L21.889 29.7132H19.715L19.646 29.9322C19.482 30.7932 18.977 31.2312 18.184 31.2312ZM20.193 27.5672H21.424L20.85 24.9972H20.768Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.93359375 32.720511954941685"
          className={className}
        >
          <path
            d="              M-0.0004 17.928C-0.0004 18.556 0.4786 19.021 1.1486 19.021H9.4196L5.0996 30.451C4.4706 32.092 6.1656 32.953 7.2596 31.627L10.6916 27.43C10.5546 26.814 10.4866 26.172 10.4866 25.515C10.4866 20.388 14.8206 16.15 19.8786 16.287L20.6446 15.344C20.9046 15.015 21.0406 14.701 21.0406 14.346C21.0406 13.717 20.5486 13.252 19.8926 13.252H11.6206L15.9416 1.822C16.5566 0.195 14.8616 -0.68 13.7676 0.646L0.3966 16.929C0.1226 17.258 -0.0004 17.572 -0.0004 17.928ZM19.7426 32.721C23.6526 32.721 26.9336 29.439 26.9336 25.515C26.9336 21.578 23.6796 18.324 19.7426 18.324C15.7906 18.324 12.5376 21.578 12.5376 25.515C12.5376 29.453 15.7906 32.721 19.7426 32.721ZM17.0356 29.59C16.3376 29.59 15.9136 29.166 15.9136 28.51C15.9136 28.305 15.9546 28.072 16.0506 27.758L17.9646 22.344C18.2796 21.414 18.8536 20.963 19.7286 20.963C20.6176 20.963 21.2326 21.414 21.5466 22.344L23.4476 27.758C23.5426 28.072 23.5976 28.305 23.5976 28.51C23.5976 29.166 23.1606 29.59 22.4766 29.59C21.8886 29.59 21.5056 29.275 21.3416 28.619L21.0276 27.648H18.4706L18.1566 28.619C17.9926 29.275 17.6226 29.59 17.0356 29.59ZM18.9356 25.926H20.5766L19.7696 23.164H19.7286Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.64453125 33.7033576348348"
          className={className}
        >
          <path
            d="              M0 18.4316C0 19.1156 0.533 19.6076 1.258 19.6076H9.803L5.359 31.2286C4.689 32.9786 6.508 33.9086 7.684 32.5006L11.061 28.4256C10.91 27.7696 10.828 27.0726 10.828 26.3616C10.828 21.0436 15.436 16.6276 20.672 16.9006L21.574 15.8206C21.861 15.4646 21.998 15.1236 21.998 14.7536C21.998 14.0566 21.465 13.5646 20.754 13.5646H12.195L16.639 1.9436C17.309 0.2076 15.49 -0.7224 14.314 0.6856L0.438 17.3656C0.137 17.7076 0 18.0486 0 18.4316ZM20.303 33.7036C24.309 33.7036 27.645 30.3676 27.645 26.3616C27.645 22.3556 24.322 19.0466 20.303 19.0466C16.283 19.0466 12.975 22.3556 12.975 26.3616C12.975 30.3676 16.283 33.7036 20.303 33.7036ZM17.65 30.4496C16.83 30.4496 16.338 29.9706 16.338 29.1916C16.338 28.9726 16.393 28.6856 16.516 28.3026L18.156 23.4496C18.539 22.2736 19.209 21.7406 20.289 21.7406C21.383 21.7406 22.107 22.2736 22.477 23.4496L24.117 28.3026C24.227 28.6856 24.295 28.9726 24.295 29.1916C24.295 29.9706 23.803 30.4496 22.982 30.4496C22.285 30.4496 21.848 30.0666 21.67 29.3006L21.492 28.7266H19.141L18.949 29.3006C18.785 30.0666 18.348 30.4496 17.65 30.4496ZM19.605 26.7856H21.027L20.344 24.1196H20.289Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.5546875 30.204128692357386"
          className={className}
        >
          <path
            d="              M0.0005 16.6284C0.0005 17.0104 0.2875 17.3114 0.7385 17.3114H8.5445L4.4025 28.5084C3.9785 29.6434 5.1275 30.2174 5.8515 29.3014L9.4885 24.7624C9.4065 24.3114 9.3655 23.8604 9.3655 23.4094C9.3655 18.9794 12.8785 15.3014 17.2405 15.0424L18.1835 13.8664C18.3755 13.6204 18.4985 13.4014 18.4985 13.1414C18.4985 12.7584 18.2105 12.4444 17.7465 12.4444H9.9535L14.0825 1.2474C14.5195 0.1124 13.3715 -0.4616 12.6325 0.4544L0.3005 15.9034C0.1095 16.1494 0.0005 16.3684 0.0005 16.6284ZM17.7465 30.2044C21.4515 30.2044 24.5545 27.1284 24.5545 23.4094C24.5545 19.6764 21.4785 16.6004 17.7465 16.6004C14.0275 16.6004 10.9515 19.6764 10.9515 23.4094C10.9515 27.1414 14.0275 30.2044 17.7465 30.2044ZM14.9165 27.3744C14.5335 27.3744 14.2595 27.1144 14.2595 26.7584C14.2595 26.6084 14.2875 26.4994 14.3285 26.3624L16.8715 19.5814C17.0215 19.1574 17.3495 18.9524 17.7735 18.9524C18.1695 18.9524 18.5115 19.1574 18.6755 19.5814L21.2055 26.3624C21.2595 26.4994 21.2875 26.6084 21.2875 26.7584C21.2875 27.1004 21.0135 27.3744 20.6175 27.3744C20.2895 27.3744 20.0705 27.2104 19.9475 26.8404L19.2775 24.9264H16.2555L15.5855 26.8404C15.4625 27.2104 15.2445 27.3744 14.9165 27.3744ZM16.6525 23.7644H18.8805L17.7735 20.6614Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.11328125 31.507843666701163"
          className={className}
        >
          <path
            d="              M0.0002 17.3166C0.0002 17.8766 0.4372 18.3006 1.0392 18.3006H8.9692L4.7992 29.4986C4.2382 30.9886 5.7832 31.7816 6.7672 30.5786L10.2812 26.2166C10.1722 25.6566 10.1032 25.0686 10.1032 24.4666C10.1032 19.5996 14.1092 15.5666 18.9352 15.5116L19.5372 14.7736C19.7832 14.4586 19.9062 14.1716 19.9062 13.8576C19.9062 13.2836 19.4692 12.8726 18.8672 12.8726H10.9372L15.1072 1.6626C15.6682 0.1716 14.1232 -0.6214 13.1382 0.5956L0.3832 16.4006C0.1362 16.7016 0.0002 16.9886 0.0002 17.3166ZM19.0722 31.5076C22.8862 31.5076 26.1132 28.3086 26.1132 24.4666C26.1132 20.6116 22.9282 17.4396 19.0722 17.4396C15.2172 17.4396 12.0312 20.6116 12.0312 24.4666C12.0312 28.3356 15.2172 31.5076 19.0722 31.5076ZM16.2972 28.5276C15.7772 28.5276 15.4222 28.1856 15.4222 27.6796C15.4222 27.5016 15.4492 27.3246 15.5312 27.1056L17.7602 20.9946C17.9782 20.3376 18.4432 20.0236 19.0862 20.0236C19.7152 20.0236 20.1932 20.3376 20.4262 20.9946L22.6542 27.1056C22.7222 27.3246 22.7632 27.5016 22.7632 27.6796C22.7632 28.1856 22.4082 28.5276 21.8752 28.5276C21.4102 28.5276 21.1232 28.2946 20.9722 27.7756L20.4802 26.3126H17.7052L17.2132 27.7756C17.0622 28.2946 16.7612 28.5276 16.2972 28.5276ZM18.1422 24.8766H20.0432L19.0992 21.9786H19.0862Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.634765625 30.826868998232218"
          className={className}
        >
          <path
            d="              M-0.0001 16.9637C-0.0001 17.4967 0.4099 17.8937 0.9849 17.8937H8.7089L4.6349 28.9677C4.1019 30.3757 5.5649 31.1277 6.4809 29.9787L10.0349 25.5357C9.9399 25.0027 9.8849 24.4417 9.8849 23.8817C9.8849 19.1507 13.6989 15.2407 18.4019 15.0907L18.9079 14.4477C19.1409 14.1607 19.2639 13.8877 19.2639 13.5727C19.2639 13.0537 18.8539 12.6437 18.2789 12.6437H10.5549L14.6289 1.5687C15.1619 0.1607 13.6989 -0.5913 12.7829 0.5707L0.3559 16.0887C0.1229 16.3897 -0.0001 16.6627 -0.0001 16.9637ZM18.6899 30.8267C22.4489 30.8267 25.6349 27.6827 25.6349 23.8817C25.6349 20.0807 22.5039 16.9357 18.6899 16.9357C14.8889 16.9357 11.7439 20.0807 11.7439 23.8817C11.7439 27.7097 14.8889 30.8267 18.6899 30.8267ZM15.8869 27.9417C15.4489 27.9417 15.1349 27.6417 15.1349 27.2177C15.1349 27.0537 15.1619 26.9027 15.2169 26.7387L17.6229 20.2447C17.8149 19.7527 18.1969 19.4927 18.7029 19.4927C19.2089 19.4927 19.6059 19.7527 19.7969 20.2447L22.2029 26.7387C22.2579 26.9027 22.2989 27.0537 22.2989 27.2177C22.2989 27.6417 21.9849 27.9417 21.5199 27.9417C21.1509 27.9417 20.8909 27.7367 20.7539 27.2997L20.1659 25.5627H17.2539L16.6659 27.2997C16.5289 27.7367 16.2699 27.9417 15.8869 27.9417ZM17.6919 24.2777H19.7289L18.7029 21.3107Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.46875 32.0329050528518"
          className={className}
        >
          <path
            d="              M-0.0001 17.5815C-0.0001 18.1695 0.4649 18.6075 1.0939 18.6075H9.1739L4.9359 29.9135C4.3479 31.4585 5.9609 32.2785 6.9859 31.0215L10.4589 26.7415C10.3499 26.1535 10.2809 25.5385 10.2809 24.9235C10.2809 19.9335 14.4239 15.8185 19.3459 15.8455L20.0159 15.0255C20.2749 14.6965 20.4119 14.3965 20.4119 14.0685C20.4119 13.4665 19.9469 13.0285 19.3179 13.0285H11.2379L15.4769 1.7355C16.0649 0.1775 14.4509 -0.6425 13.4259 0.6145L0.3969 16.6245C0.1369 16.9395 -0.0001 17.2395 -0.0001 17.5815ZM19.3589 32.0325C23.2289 32.0325 26.4689 28.7925 26.4689 24.9235C26.4689 21.0275 23.2559 17.8145 19.3589 17.8145C15.4769 17.8145 12.2639 21.0275 12.2639 24.9235C12.2639 28.8195 15.4769 32.0325 19.3589 32.0325ZM16.6249 28.9845C16.0239 28.9845 15.6409 28.6145 15.6409 28.0405C15.6409 27.8495 15.6679 27.6445 15.7639 27.3845L17.8559 21.5735C18.1149 20.7945 18.6209 20.4255 19.3729 20.4255C20.1109 20.4255 20.6449 20.7945 20.9179 21.5735L22.9959 27.3845C23.0779 27.6445 23.1329 27.8495 23.1329 28.0405C23.1329 28.6015 22.7359 28.9845 22.1349 28.9845C21.6289 28.9845 21.2869 28.7105 21.1369 28.1365L20.7269 26.8785H18.0469L17.6229 28.1365C17.4729 28.7105 17.1449 28.9845 16.6249 28.9845ZM18.4839 25.3195H20.2749L19.3869 22.4895H19.3729Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.119140625 29.35026713739969"
          className={className}
        >
          <path
            d="              M-0.0003 16.1567C-0.0003 16.3487 0.1227 16.5537 0.4377 16.5537H8.3267L4.1017 27.9007C3.8147 28.6667 4.5387 29.0087 5.0317 28.4067L8.7497 23.7177C8.7227 23.4027 8.6957 23.0747 8.6957 22.7607C8.6957 18.7407 11.7987 15.3777 15.7227 14.9807L17.2407 13.0807C17.3767 12.8897 17.4727 12.7387 17.4727 12.5477C17.4727 12.3557 17.3497 12.1647 17.0347 12.1647H9.1467L13.3707 0.8037C13.6587 0.0377 12.9337 -0.2903 12.4417 0.3117L0.2457 15.6237C0.0957 15.8147 -0.0003 15.9657 -0.0003 16.1567ZM16.5157 29.3507C20.1247 29.3507 23.1187 26.3837 23.1187 22.7607C23.1187 19.1237 20.1387 16.1567 16.5157 16.1567C12.9067 16.1567 9.9117 19.1377 9.9117 22.7607C9.9117 26.3837 12.9067 29.3507 16.5157 29.3507ZM13.6447 26.6157C13.3297 26.6157 13.1117 26.4107 13.1117 26.1237C13.1117 26.0277 13.1247 25.9457 13.1527 25.8637L15.8727 18.6867C15.9827 18.3577 16.2147 18.2217 16.5297 18.2217C16.8167 18.2217 17.0627 18.3577 17.1857 18.6867L19.9067 25.8637C19.9337 25.9457 19.9477 26.0277 19.9477 26.1237C19.9477 26.3967 19.7287 26.6157 19.4277 26.6157C19.1677 26.6157 18.9907 26.5067 18.8947 26.2197L18.1287 24.0597H14.9297L14.1637 26.2197C14.0687 26.5067 13.8907 26.6157 13.6447 26.6157ZM15.2987 23.0887H17.7597L16.5297 19.7797Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.39453125 28.924508540894745"
          className={className}
        >
          <path
            d="              M0.0003 15.923C0.0003 16.018 0.0543 16.155 0.2873 16.155H8.2173L3.9513 27.598C3.7323 28.173 4.2523 28.391 4.6073 27.954L8.3813 23.196C8.3673 22.936 8.3533 22.69 8.3533 22.43C8.3533 18.63 11.2523 15.43 14.9433 14.952L16.7483 12.682C16.8713 12.532 16.9533 12.409 16.9533 12.258C16.9533 12.163 16.9123 12.026 16.6793 12.026H8.7503L13.0153 0.596C13.2343 0.008 12.7013 -0.21 12.3453 0.241L0.2053 15.499C0.0953 15.649 0.0003 15.772 0.0003 15.923ZM15.8863 28.925C19.4413 28.925 22.3943 25.999 22.3943 22.43C22.3943 18.862 19.4683 15.923 15.8863 15.923C12.3323 15.923 9.3923 18.876 9.3923 22.43C9.3923 25.999 12.3323 28.925 15.8863 28.925ZM12.9883 26.231C12.7153 26.231 12.5233 26.053 12.5233 25.821C12.5233 25.725 12.5373 25.657 12.5643 25.616L15.3533 18.233C15.4633 17.96 15.6543 17.85 15.9003 17.85C16.1333 17.85 16.3383 17.96 16.4333 18.233L19.2363 25.616C19.2503 25.657 19.2773 25.725 19.2773 25.821C19.2773 26.04 19.0863 26.231 18.8263 26.231C18.5933 26.231 18.4433 26.149 18.3613 25.903L17.5273 23.62H14.2593L13.4393 25.903C13.3573 26.149 13.1933 26.231 12.9883 26.231ZM14.6153 22.745H17.1853L15.9003 19.327Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
