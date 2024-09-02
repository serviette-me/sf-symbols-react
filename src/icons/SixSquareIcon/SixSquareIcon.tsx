import { IconProps } from "../../types"

export default function SixSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM13.6997 19.7833C16.8847 19.7833 18.9907 18.0603 18.9907 15.3533C18.9907 13.1933 17.4727 11.7993 15.2717 11.7993C14.0817 11.7993 12.9887 12.3323 12.4827 13.0973H12.3457C12.3047 12.9063 12.2907 12.7153 12.2907 12.5233C12.2907 11.3203 12.9067 10.4183 13.9997 10.4183C14.5337 10.4183 14.8337 10.6233 15.1897 10.8283C15.5727 11.0473 15.9687 11.2933 16.6797 11.2933C17.6637 11.2933 18.2927 10.7183 18.2927 9.8713C18.2927 9.4613 18.1697 9.1053 17.9377 8.7773C17.3227 7.8473 15.8317 7.2873 14.0277 7.2873C10.2127 7.2873 7.9707 9.4883 7.9707 13.3983C7.9707 15.0113 8.2987 16.3793 8.9687 17.4183C9.8987 18.9222 11.4977 19.7833 13.6997 19.7833ZM13.4807 16.6112C12.7837 16.6112 12.3047 16.1463 12.3047 15.4353C12.3047 14.7653 12.7837 14.2873 13.4807 14.2873C14.1637 14.2873 14.6427 14.7653 14.6427 15.4493C14.6427 16.1333 14.1637 16.6112 13.4807 16.6112Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM13.2067 19.4277C16.1597 19.4277 18.1837 17.7737 18.1837 15.0117C18.1837 12.6327 16.4477 11.2247 14.2737 11.2247C12.7557 11.2247 11.6757 11.9487 11.1977 12.8237H11.0747C11.0607 12.7007 11.0607 12.5917 11.0607 12.4687C11.0607 10.4727 12.0037 9.1057 13.4807 9.1057C14.2327 9.1057 14.6567 9.4197 15.0257 9.7617C15.4357 10.0897 15.7637 10.3357 16.3517 10.3357C17.0767 10.3357 17.5687 9.8847 17.5687 9.2147C17.5687 8.9137 17.4867 8.6407 17.3227 8.3667C16.8027 7.4097 15.3267 6.6717 13.5347 6.6717C10.0217 6.6717 7.8887 8.9137 7.8887 13.1387C7.8887 14.8887 8.2307 16.2557 8.8457 17.2397C9.7477 18.7027 11.2927 19.4277 13.2067 19.4277ZM13.0427 17.0217C11.9357 17.0217 11.1427 16.2287 11.1427 15.0937C11.1427 14.0137 11.9357 13.2347 13.0567 13.2347C14.1777 13.2347 14.9437 14.0137 14.9437 15.1077C14.9437 16.2557 14.1917 17.0217 13.0427 17.0217Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM13.4667 19.6195C16.5427 19.6195 18.6077 17.9375 18.6077 15.2035C18.6077 12.9335 16.9807 11.5255 14.8067 11.5255C13.4527 11.5255 12.3727 12.1675 11.8807 12.9745H11.7437C11.7167 12.8105 11.7027 12.6605 11.7027 12.5095C11.7027 10.9235 12.4827 9.8025 13.7537 9.8025C14.3827 9.8025 14.7517 10.0625 15.1077 10.3355C15.5037 10.5955 15.8727 10.8415 16.5297 10.8415C17.3907 10.8415 17.9517 10.3355 17.9517 9.5705C17.9517 9.2145 17.8417 8.9005 17.6507 8.5855C17.0767 7.6425 15.5857 7.0135 13.7947 7.0135C10.1177 7.0135 7.9297 9.2285 7.9297 13.2895C7.9297 14.9705 8.2717 16.3245 8.9007 17.3355C9.8297 18.8265 11.4027 19.6195 13.4667 19.6195ZM13.2757 16.8165C12.3867 16.8165 11.7577 16.1875 11.7577 15.2855C11.7577 14.4235 12.3867 13.7945 13.2757 13.7945C14.1637 13.7945 14.7927 14.4105 14.7927 15.2985C14.7927 16.2015 14.1777 16.8165 13.2757 16.8165Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM12.4827 18.7575C15.1207 18.7575 16.9667 17.1585 16.9667 14.4925C16.9667 12.0315 15.1207 10.5275 12.9337 10.5275C11.0877 10.5275 9.9807 11.4435 9.4607 12.5645H9.3787V12.4145C9.3787 9.2835 10.6917 7.3415 12.7287 7.3415C13.7677 7.3415 14.5057 7.8345 14.9157 8.4765C15.2437 8.8325 15.4497 9.0235 15.8187 9.0235C16.1877 9.0235 16.4747 8.7635 16.4747 8.3805C16.4747 8.2035 16.4337 8.0665 16.3787 7.9165C16.0237 6.9725 14.6157 5.9605 12.7837 5.9605C9.7067 5.9605 7.8067 8.2855 7.8067 12.7015C7.8067 14.4785 8.1207 15.8325 8.6407 16.7205C9.4477 18.1155 10.8827 18.7575 12.4827 18.7575ZM12.4277 17.4455C10.7597 17.4455 9.5707 16.2425 9.5707 14.5605C9.5707 12.9475 10.7597 11.7855 12.4417 11.7855C14.1367 11.7855 15.2987 12.9195 15.2987 14.5745C15.2987 16.3245 14.1777 17.4455 12.4277 17.4455Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM12.8787 19.1953C15.7087 19.1953 17.6777 17.5823 17.6777 14.7933C17.6777 12.2773 15.7907 10.8423 13.6307 10.8423C11.9087 10.8423 10.8417 11.6893 10.3907 12.6463H10.2677C10.2677 12.5643 10.2677 12.4963 10.2677 12.4273C10.2677 9.9123 11.4157 8.2713 13.1527 8.2713C14.0277 8.2713 14.5337 8.6543 14.9157 9.0783C15.3397 9.4743 15.6267 9.7203 16.1467 9.7203C16.6937 9.7203 17.1177 9.3383 17.1177 8.7913C17.1177 8.5453 17.0487 8.3263 16.9397 8.1073C16.4747 7.1093 14.9977 6.2753 13.2207 6.2753C9.8987 6.2753 7.8337 8.5313 7.8337 12.9613C7.8337 14.8063 8.1757 16.1603 8.7637 17.1173C9.6527 18.5663 11.1697 19.1953 12.8787 19.1953ZM12.7697 17.2813C11.3887 17.2813 10.4047 16.2833 10.4047 14.8753C10.4047 13.5213 11.3887 12.5643 12.7837 12.5643C14.1777 12.5643 15.1487 13.5213 15.1487 14.8883C15.1487 16.3383 14.2187 17.2813 12.7697 17.2813Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM12.7017 19.0725C15.4497 19.0725 17.3907 17.4725 17.3907 14.6695C17.3907 12.0725 15.4217 10.6225 13.2617 10.6225C11.4297 10.6225 10.3767 11.5525 9.9257 12.5375H9.8167V12.4005C9.8167 9.5975 11.1017 7.7925 12.9747 7.7925C13.9177 7.7925 14.4647 8.2165 14.8617 8.6955C15.2847 9.1325 15.5587 9.3655 16.0237 9.3655C16.4887 9.3655 16.8577 9.0375 16.8577 8.5585C16.8577 8.3395 16.8027 8.1485 16.7207 7.9565C16.2967 6.9455 14.8207 6.0565 13.0427 6.0565C9.8167 6.0565 7.8067 8.3125 7.8067 12.8655C7.8067 14.7515 8.1487 16.1195 8.7227 17.0355C9.5977 18.4845 11.0877 19.0725 12.7017 19.0725ZM12.6187 17.4315C11.0877 17.4315 9.9937 16.3105 9.9937 14.7515C9.9937 13.2475 11.0747 12.1815 12.6187 12.1815C14.1777 12.1815 15.2437 13.2345 15.2437 14.7655C15.2437 16.3785 14.2187 17.4315 12.6187 17.4315Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM13.0297 19.305C15.9007 19.305 17.8967 17.664 17.8967 14.889C17.8967 12.428 16.0777 11.006 13.9047 11.006C12.2777 11.006 11.1977 11.799 10.7327 12.729H10.6227C10.6097 12.619 10.6097 12.537 10.6097 12.441C10.6097 10.158 11.6757 8.627 13.3027 8.627C14.1097 8.627 14.5747 8.982 14.9567 9.379C15.3807 9.748 15.6817 9.98 16.2427 9.98C16.8577 9.98 17.3087 9.57 17.3087 8.982C17.3087 8.709 17.2407 8.463 17.1037 8.23C16.6247 7.246 15.1347 6.453 13.3577 6.453C9.9397 6.453 7.8617 8.695 7.8617 13.043C7.8617 14.848 8.2027 16.201 8.7907 17.172C9.6937 18.635 11.2247 19.305 13.0297 19.305ZM12.8927 17.172C11.6347 17.172 10.7327 16.256 10.7327 14.971C10.7327 13.74 11.6207 12.852 12.8927 12.852C14.1777 12.852 15.0527 13.727 15.0527 14.984C15.0527 16.311 14.2047 17.172 12.8927 17.172Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM12.1817 18.3344C14.6977 18.3344 16.4197 16.7204 16.4197 14.2464C16.4197 11.9634 14.6977 10.3774 12.4957 10.3774C10.6507 10.3774 9.4607 11.2934 8.8457 12.5784H8.7907V12.4144C8.7907 8.8594 10.1717 6.7264 12.4137 6.7264C13.5767 6.7264 14.5747 7.3144 14.9977 8.1754C15.1757 8.4354 15.2987 8.5584 15.5317 8.5584C15.7907 8.5584 15.9687 8.3944 15.9687 8.1214C15.9687 8.0114 15.9417 7.9294 15.9137 7.8344C15.6547 6.9724 14.3417 5.8104 12.4417 5.8104C9.5427 5.8104 7.8067 8.2164 7.8067 12.4554C7.8067 14.0824 8.0797 15.4494 8.5177 16.2834C9.2427 17.6094 10.6097 18.3344 12.1817 18.3344ZM12.1817 17.4594C10.3357 17.4594 8.9957 16.1324 8.9957 14.3004C8.9957 12.5374 10.3497 11.2524 12.2087 11.2524C14.0817 11.2524 15.3677 12.4824 15.3677 14.3284C15.3677 16.2144 14.1097 17.4594 12.1817 17.4594Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM12.0317 18.115C14.4787 18.115 16.1327 16.502 16.1327 14.123C16.1327 11.936 14.4927 10.309 12.2777 10.309C10.4317 10.309 9.2017 11.211 8.5317 12.578H8.4767V12.414C8.4767 8.627 9.8987 6.412 12.2497 6.412C13.4667 6.412 14.6017 7.041 15.0387 8.012C15.1347 8.23 15.2167 8.313 15.3947 8.313C15.5997 8.313 15.7087 8.203 15.7087 7.998C15.7087 7.916 15.6957 7.861 15.6817 7.793C15.4767 6.973 14.2047 5.729 12.2637 5.729C9.4607 5.729 7.8067 8.176 7.8067 12.318C7.8067 13.891 8.0527 15.244 8.4627 16.051C9.1467 17.35 10.4727 18.115 12.0317 18.115ZM12.0587 17.459C10.1177 17.459 8.7087 16.078 8.7087 14.178C8.7087 12.318 10.1307 10.965 12.0857 10.965C14.0547 10.965 15.4087 12.264 15.4087 14.191C15.4087 16.174 14.0687 17.459 12.0587 17.459Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}