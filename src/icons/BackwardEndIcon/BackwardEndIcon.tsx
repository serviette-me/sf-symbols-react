import { IconProps } from "../../types"

export default function BackwardEndIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.958984375 25.005859375"
          className={className}
        >
          <path
            d="              M2.9937 25.0062C4.7307 25.0062 5.9887 23.7752 5.9887 22.1072V13.1382C6.2347 14.2602 7.0957 15.0392 8.1757 15.6542L22.4907 24.0082C23.2287 24.4312 23.9807 24.6092 24.7597 24.6092C26.4957 24.6092 27.9587 23.3102 27.9587 21.0822V3.9372C27.9587 1.6952 26.5237 0.4102 24.8007 0.4102C23.9937 0.4102 23.2557 0.5882 22.4907 1.0252L8.1757 9.3652C7.0687 10.0082 6.2207 10.7322 5.9887 11.8122V2.8982C5.9887 1.2302 4.7307 0.0002 2.9937 0.0002C1.2577 0.0002 -0.0003 1.2302 -0.0003 2.8982V22.1072C-0.0003 23.7752 1.2577 25.0062 2.9937 25.0062ZM23.1057 18.8812C23.0507 18.8812 22.9957 18.8672 22.9547 18.8402L12.1677 12.6192C12.1407 12.5922 12.1137 12.5512 12.1137 12.4962C12.1137 12.4282 12.1267 12.4142 12.1677 12.3872L22.9547 6.1792C23.0097 6.1382 23.0507 6.1382 23.0917 6.1382C23.1597 6.1382 23.1877 6.1792 23.1877 6.2342V18.7852C23.1877 18.8402 23.1597 18.8812 23.1057 18.8812Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.541015625 23.7890625"
          className={className}
        >
          <path
            d="              M2.0777 23.789C3.2677 23.789 4.1567 22.928 4.1567 21.766V12.469C4.3617 13.303 5.0037 13.945 5.9067 14.492L20.0427 22.764C20.6857 23.133 21.2867 23.311 21.9567 23.311C23.3657 23.311 24.5407 22.258 24.5407 20.385V3.404C24.5407 1.518 23.3787 0.479 21.9707 0.479C21.3007 0.479 20.6997 0.656 20.0427 1.025L5.9067 9.311C4.9767 9.857 4.3617 10.459 4.1567 11.279V2.01C4.1567 0.861 3.2677 0 2.0777 0C0.8887 0 -0.0003 0.861 -0.0003 2.01V21.766C-0.0003 22.928 0.8887 23.789 2.0777 23.789ZM20.8357 19.182C20.7537 19.182 20.6717 19.154 20.5897 19.113L8.6957 12.141C8.5857 12.072 8.5317 12.004 8.5317 11.881C8.5317 11.758 8.5857 11.703 8.6957 11.648L20.5897 4.676C20.6857 4.621 20.7537 4.607 20.8227 4.607C20.9587 4.607 21.0547 4.689 21.0547 4.854V18.936C21.0547 19.1 20.9587 19.182 20.8357 19.182Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.345703125 24.431640625"
          className={className}
        >
          <path
            d="              M2.5567 24.4321C4.0467 24.4321 5.1267 23.3791 5.1267 21.9571V12.8241C5.3457 13.8091 6.1117 14.5191 7.1097 15.1071L21.3277 23.4201C22.0257 23.8301 22.7087 23.9941 23.4337 23.9941C25.0197 23.9941 26.3457 22.8181 26.3457 20.7541V3.6911C26.3457 1.6131 25.0337 0.4511 23.4607 0.4511C22.7227 0.4511 22.0387 0.6291 21.3277 1.0251L7.1097 9.3381C6.0837 9.9391 5.3457 10.6091 5.1267 11.5661V2.4881C5.1267 1.0661 4.0467 0.0001 2.5567 0.0001C1.0797 0.0001 -0.0003 1.0661 -0.0003 2.4881V21.9571C-0.0003 23.3791 1.0797 24.4321 2.5567 24.4321ZM22.0257 19.0311C21.9707 19.0311 21.9027 19.0041 21.8337 18.9761L10.5277 12.4001C10.4587 12.3591 10.4177 12.3051 10.4177 12.2091C10.4177 12.1271 10.4457 12.0861 10.5277 12.0451L21.8337 5.4691C21.9157 5.4281 21.9707 5.4141 22.0117 5.4141C22.1207 5.4141 22.1897 5.4821 22.1897 5.5921V18.8531C22.1897 18.9761 22.1207 19.0311 22.0257 19.0311Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.0703125 21.984375"
          className={className}
        >
          <path
            d="              M0.8887 21.9846C1.3807 21.9846 1.7777 21.6016 1.7777 21.1226V11.4846C1.9277 11.9626 2.2697 12.3726 2.8577 12.7146L16.9117 20.9866C17.3767 21.2596 17.8277 21.4376 18.3207 21.4376C19.2497 21.4376 20.0707 20.7406 20.0707 19.3456V2.6386C20.0707 1.2446 19.2497 0.5336 18.3207 0.5336C17.8277 0.5336 17.3907 0.7246 16.9117 0.9976L2.8577 9.2696C2.2697 9.6116 1.9137 10.0216 1.7777 10.4866V0.8746C1.7777 0.3826 1.3807 -0.0004 0.8887 -0.0004C0.3967 -0.0004 -0.0003 0.3826 -0.0003 0.8746V21.1226C-0.0003 21.6016 0.3967 21.9846 0.8887 21.9846ZM17.9097 19.5366C17.7867 19.5366 17.6507 19.4956 17.4587 19.3866L4.0747 11.4566C3.8417 11.3336 3.7047 11.1976 3.7047 10.9926C3.7047 10.7736 3.8277 10.6636 4.0747 10.5136L17.4587 2.5976C17.6637 2.4886 17.7867 2.4476 17.9097 2.4476C18.1427 2.4476 18.3887 2.5976 18.3887 3.0076V18.9626C18.3887 19.3726 18.1427 19.5366 17.9097 19.5366Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.353515625 23.0234375"
          className={className}
        >
          <path
            d="              M1.5037 23.0231C2.3377 23.0231 2.9937 22.3941 2.9937 21.5601V12.0581C3.1717 12.7151 3.6637 13.2751 4.4707 13.7401L18.4707 21.9711C19.0587 22.3121 19.5647 22.4901 20.1657 22.4901C21.3557 22.4901 22.3537 21.5881 22.3537 19.9331V3.0901C22.3537 1.4221 21.3687 0.5331 20.1657 0.5331C19.5647 0.5331 19.0587 0.7111 18.4707 1.0531L4.4707 9.2831C3.6507 9.7621 3.1717 10.2951 2.9937 10.9511V1.4631C2.9937 0.6291 2.3377 0.0001 1.5037 0.0001C0.6567 0.0001 -0.0003 0.6291 -0.0003 1.4631V21.5601C-0.0003 22.3941 0.6567 23.0231 1.5037 23.0231ZM19.3727 19.3871C19.2907 19.3871 19.1957 19.3591 19.0727 19.2911L6.4807 11.8401C6.3167 11.7581 6.2207 11.6761 6.2207 11.5121C6.2207 11.3481 6.3167 11.2651 6.4807 11.1701L19.0727 3.7321C19.1957 3.6641 19.2907 3.6371 19.3727 3.6371C19.5507 3.6371 19.7017 3.7461 19.7017 3.9781V19.0451C19.7017 19.2771 19.5507 19.3871 19.3727 19.3871Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.123046875 22.5859375"
          className={className}
        >
          <path
            d="              M1.1617 22.5864C1.8187 22.5864 2.3377 22.0934 2.3377 21.4514V11.8264C2.4887 12.3864 2.9117 12.8924 3.6507 13.3304L17.5817 21.5334C18.1427 21.8614 18.5937 22.0394 19.1547 22.0394C20.2347 22.0394 21.1227 21.2184 21.1227 19.6874V2.8984C21.1227 1.3674 20.2347 0.5464 19.1547 0.5464C18.5937 0.5464 18.1427 0.7244 17.5817 1.0524L3.6507 9.2554C2.9117 9.6934 2.4887 10.1994 2.3377 10.7594V1.1484C2.3377 0.5054 1.8187 0.0004 1.1617 0.0004C0.5197 0.0004 -0.0003 0.5054 -0.0003 1.1484V21.4514C-0.0003 22.0934 0.5197 22.5864 1.1617 22.5864ZM18.5667 19.5094C18.4707 19.5094 18.3617 19.4684 18.2247 19.3864L5.2367 11.6754C5.0447 11.5664 4.9357 11.4704 4.9357 11.2934C4.9357 11.1014 5.0317 11.0194 5.2367 10.9104L18.2247 3.1994C18.3617 3.1174 18.4707 3.0764 18.5667 3.0764C18.7577 3.0764 18.9357 3.2124 18.9357 3.4864V19.0994C18.9357 19.3734 18.7577 19.5094 18.5667 19.5094Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.296875 23.3515625"
          className={className}
        >
          <path
            d="              M1.7497 23.3512C2.7477 23.3512 3.4997 22.6272 3.4997 21.6562V12.2362C3.6777 12.9742 4.2387 13.5622 5.0857 14.0682L19.1407 22.3122C19.7557 22.6682 20.3027 22.8462 20.9457 22.8462C22.2167 22.8462 23.2967 21.8752 23.2967 20.1252V3.2262C23.2967 1.4632 22.2307 0.5062 20.9457 0.5062C20.3167 0.5062 19.7697 0.6832 19.1407 1.0392L5.0857 9.2832C4.2247 9.8032 3.6777 10.3632 3.4997 11.0882V1.6952C3.4997 0.7242 2.7477 0.0002 1.7497 0.0002C0.7517 0.0002 -0.0003 0.7242 -0.0003 1.6952V21.6562C-0.0003 22.6272 0.7517 23.3512 1.7497 23.3512ZM20.0017 19.3042C19.9197 19.3042 19.8377 19.2772 19.7287 19.2092L7.4377 11.9762C7.3007 11.8942 7.2187 11.8122 7.2187 11.6762C7.2187 11.5252 7.2867 11.4572 7.4377 11.3752L19.7287 4.1422C19.8377 4.0742 19.9197 4.0472 20.0017 4.0472C20.1657 4.0472 20.2887 4.1562 20.2887 4.3612V18.9902C20.2887 19.2092 20.1657 19.3042 20.0017 19.3042Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.662109375 21.205078125"
          className={className}
        >
          <path
            d="              M0.5197 21.2051C0.8067 21.2051 1.0387 20.9731 1.0387 20.6851V11.0331C1.1617 11.3891 1.4357 11.6761 1.8187 11.9081L16.0237 20.2621C16.3657 20.4671 16.8027 20.6581 17.1997 20.6581C17.9517 20.6581 18.6617 20.0981 18.6617 18.8941V2.2831C18.6617 1.0801 17.9517 0.5191 17.1997 0.5191C16.8027 0.5191 16.3927 0.7111 16.0237 0.9161L1.8187 9.2691C1.4217 9.5021 1.1617 9.7751 1.0387 10.1311V0.5061C1.0387 0.2191 0.8067 0.0001 0.5197 0.0001C0.2327 0.0001 -0.0003 0.2191 -0.0003 0.5061V20.6851C-0.0003 20.9731 0.2327 21.2051 0.5197 21.2051ZM17.0487 19.5781C16.8987 19.5781 16.7207 19.5371 16.4607 19.3871L2.5427 11.1701C2.2427 11.0191 2.0917 10.8421 2.0917 10.5821C2.0917 10.3221 2.2287 10.1851 2.5427 10.0081L16.4607 1.8051C16.7347 1.6401 16.8987 1.6131 17.0487 1.6131C17.3087 1.6131 17.6777 1.8051 17.6777 2.3791V18.7991C17.6777 19.3731 17.3087 19.5781 17.0487 19.5781Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.951171875 20.80859375"
          className={className}
        >
          <path
            d="              M0.3277 20.8087C0.5197 20.8087 0.6697 20.6577 0.6697 20.4807V10.8147C0.7797 11.1157 0.9977 11.3337 1.2847 11.5117L15.5587 19.9067C15.8597 20.0707 16.2697 20.2617 16.6387 20.2617C17.2947 20.2617 17.9517 19.7827 17.9517 18.6757V2.1187C17.9517 1.0117 17.2947 0.5327 16.6387 0.5327C16.2697 0.5327 15.8727 0.7247 15.5587 0.8887L1.2847 9.2827C0.9847 9.4607 0.7657 9.6797 0.6697 9.9667V0.3417C0.6697 0.1507 0.5197 -0.0003 0.3277 -0.0003C0.1507 -0.0003 -0.0003 0.1507 -0.0003 0.3417V20.4807C-0.0003 20.6577 0.1507 20.8087 0.3277 20.8087ZM16.6117 19.6057C16.4337 19.6057 16.2427 19.5647 15.9417 19.3867L1.7497 11.0327C1.4357 10.8687 1.2577 10.6637 1.2577 10.3907C1.2577 10.1037 1.4217 9.9527 1.7497 9.7617L15.9417 1.4077C16.2557 1.2307 16.4337 1.1897 16.6117 1.1897C16.8987 1.1897 17.3227 1.4077 17.3227 2.0777V18.7167C17.3227 19.3867 16.8987 19.6057 16.6117 19.6057Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}