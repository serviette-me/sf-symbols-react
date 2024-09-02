import { IconProps } from "../../types"

export default function OneTwoLaneIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 24.431640625"
          className={className}
        >
          <path
            d="              M-0.0003 22.012C-0.0003 23.352 1.0937 24.432 2.4337 24.432C3.7597 24.432 4.8537 23.352 4.8537 22.012V2.434C4.8537 1.094 3.7597 0 2.4337 0C1.0937 0 -0.0003 1.094 -0.0003 2.434ZM22.2577 22.012C22.2577 23.352 23.3517 24.432 24.6777 24.432C26.0177 24.432 27.1117 23.352 27.1117 22.012V2.434C27.1117 1.094 26.0177 0 24.6777 0C23.3517 0 22.2577 1.094 22.2577 2.434ZM14.6287 17.062H19.2777C19.9747 17.062 20.3437 16.639 20.3437 15.996C20.3437 15.326 19.9477 14.902 19.2777 14.902H16.7207V14.848L18.2247 13.344C18.5527 13.016 18.8537 12.687 19.1407 12.373C19.7287 11.662 20.1527 10.924 20.1527 9.885C20.1527 7.861 18.5527 6.863 16.6387 6.863C15.2027 6.863 13.6997 7.643 13.3707 8.928C13.3297 9.078 13.3027 9.256 13.3027 9.434C13.3027 10.158 13.7537 10.609 14.4787 10.609C15.0797 10.609 15.4767 10.281 15.7227 9.734C15.9007 9.27 16.1597 8.969 16.6117 8.969C17.1857 8.969 17.4727 9.406 17.4727 9.98C17.4727 10.527 17.2677 10.937 16.9397 11.375C16.7347 11.648 16.4477 12.004 16.0507 12.414L14.0687 14.465C13.6447 14.875 13.3027 15.299 13.3027 15.928C13.3027 16.557 13.6717 17.062 14.6287 17.062ZM10.3907 17.227C11.2657 17.227 11.8127 16.611 11.8127 15.736V8.559C11.8127 7.533 11.1427 6.959 10.1307 6.959C9.3377 6.959 8.7497 7.301 8.1077 7.766L7.1917 8.449C6.8227 8.709 6.6037 9.051 6.6037 9.488C6.6037 10.049 6.9867 10.473 7.5467 10.473C7.8207 10.473 7.9707 10.377 8.1897 10.213L8.9137 9.68H8.9827V15.736C8.9827 16.611 9.5157 17.227 10.3907 17.227Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 22.517578125"
          className={className}
        >
          <path
            d="              M-0.0003 20.7543C-0.0003 21.7243 0.7927 22.5173 1.7637 22.5173C2.7347 22.5173 3.5277 21.7243 3.5277 20.7543V1.7633C3.5277 0.7933 2.7347 0.0003 1.7637 0.0003C0.7927 0.0003 -0.0003 0.7933 -0.0003 1.7633ZM22.6137 20.7543C22.6137 21.7243 23.4067 22.5173 24.3767 22.5173C25.3477 22.5173 26.1407 21.7243 26.1407 20.7543V1.7633C26.1407 0.7933 25.3477 0.0003 24.3767 0.0003C23.4067 0.0003 22.6137 0.7933 22.6137 1.7633ZM14.0687 16.6113H19.0447C19.6467 16.6113 20.0017 16.2423 20.0017 15.6683C20.0017 15.0803 19.6327 14.7113 19.0447 14.7113H15.9137V14.6293L17.7457 12.6873C18.1567 12.2363 18.5257 11.8263 18.8127 11.4573C19.3867 10.7183 19.7697 9.9803 19.7697 8.9823C19.7697 6.9723 18.2247 5.8793 16.2837 5.8793C14.7247 5.8793 13.2887 6.8363 12.9887 8.1343C12.9477 8.2713 12.9337 8.4353 12.9337 8.5993C12.9337 9.2143 13.3297 9.6113 13.9457 9.6113C14.4787 9.6113 14.8207 9.3383 15.0257 8.8453C15.2307 8.1623 15.6267 7.7383 16.2697 7.7383C17.0347 7.7383 17.4457 8.3123 17.4457 9.0643C17.4457 9.6933 17.2127 10.1583 16.8577 10.6643C16.6247 10.9643 16.3247 11.3613 15.9007 11.8123L13.5767 14.3413C13.2207 14.7113 12.9197 15.0803 12.9197 15.6273C12.9197 16.1463 13.2207 16.6113 14.0687 16.6113ZM9.7617 16.7203C10.5137 16.7203 10.9787 16.1873 10.9787 15.4353V7.2873C10.9787 6.4123 10.4177 5.9063 9.5427 5.9063C8.8597 5.9063 8.3677 6.2073 7.8067 6.6173L6.5347 7.5603C6.2067 7.7933 6.0157 8.0933 6.0157 8.4903C6.0157 8.9823 6.3577 9.3513 6.8497 9.3513C7.0817 9.3513 7.2327 9.2693 7.4237 9.1323L8.4907 8.3263H8.5447V15.4353C8.5447 16.1873 9.0097 16.7203 9.7617 16.7203Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 23.529296875"
          className={className}
        >
          <path
            d="              M-0.0003 21.4102C-0.0003 22.5722 0.9437 23.5292 2.1187 23.5292C3.2817 23.5292 4.2247 22.5722 4.2247 21.4102V2.1052C4.2247 0.9432 3.2817 0.0002 2.1187 0.0002C0.9437 0.0002 -0.0003 0.9432 -0.0003 2.1052ZM22.4217 21.4102C22.4217 22.5722 23.3787 23.5292 24.5407 23.5292C25.7027 23.5292 26.6597 22.5722 26.6597 21.4102V2.1052C26.6597 0.9432 25.7027 0.0002 24.5407 0.0002C23.3787 0.0002 22.4217 0.9432 22.4217 2.1052ZM14.3687 16.8442H19.1677C19.8247 16.8442 20.1797 16.4472 20.1797 15.8322C20.1797 15.2032 19.8107 14.8062 19.1677 14.8062H16.3377V14.7382L17.9927 13.0292C18.3617 12.6462 18.7027 12.2772 18.9907 11.9352C19.5647 11.2112 19.9747 10.4722 19.9747 9.4472C19.9747 7.4372 18.4027 6.3982 16.4747 6.3982C14.9847 6.3982 13.5077 7.2602 13.1937 8.5452C13.1527 8.6952 13.1387 8.8592 13.1387 9.0372C13.1387 9.7072 13.5487 10.1312 14.2327 10.1312C14.7927 10.1312 15.1617 9.8302 15.3947 9.3102C15.5857 8.7502 15.9007 8.3812 16.4477 8.3812C17.1037 8.3812 17.4587 8.8872 17.4587 9.5432C17.4587 10.1312 17.2407 10.5542 16.8987 11.0332C16.6797 11.3202 16.3927 11.6892 15.9827 12.1272L13.8357 14.3962C13.4527 14.7932 13.1247 15.1892 13.1247 15.7772C13.1247 16.3512 13.4667 16.8442 14.3687 16.8442ZM10.1037 16.9802C10.9097 16.9802 11.4157 16.4062 11.4157 15.5862V7.9572C11.4157 7.0002 10.8007 6.4672 9.8577 6.4672C9.1057 6.4672 8.5727 6.7812 7.9707 7.2192L6.8767 8.0252C6.5347 8.2712 6.3297 8.5862 6.3297 9.0102C6.3297 9.5432 6.6857 9.9392 7.2187 9.9392C7.4787 9.9392 7.6157 9.8572 7.8337 9.7072L8.7087 9.0372H8.7777V15.5862C8.7777 16.4062 9.2697 16.9802 10.1037 16.9802Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 20.521484375"
          className={className}
        >
          <path
            d="              M-0.0003 19.6873C-0.0003 20.1383 0.3827 20.5213 0.8477 20.5213C1.3127 20.5213 1.6957 20.1383 1.6957 19.6873V0.8473C1.6957 0.3823 1.3127 0.0003 0.8477 0.0003C0.3827 0.0003 -0.0003 0.3823 -0.0003 0.8473ZM23.0647 19.6873C23.0647 20.1383 23.4477 20.5213 23.9117 20.5213C24.3767 20.5213 24.7597 20.1383 24.7597 19.6873V0.8473C24.7597 0.3823 24.3767 0.0003 23.9117 0.0003C23.4477 0.0003 23.0647 0.3823 23.0647 0.8473ZM8.9417 16.2013C9.4477 16.2013 9.7617 15.8453 9.7617 15.3403V5.5913C9.7617 5.0173 9.4067 4.6893 8.8317 4.6893C8.3677 4.6893 8.0387 4.8943 7.6697 5.1683L5.7427 6.5903C5.5097 6.7543 5.3597 6.9593 5.3597 7.2593C5.3597 7.6013 5.6187 7.8753 5.9607 7.8753C6.1247 7.8753 6.2617 7.8203 6.3987 7.7113L8.1077 6.4533H8.1207V15.3403C8.1207 15.8453 8.4357 16.2013 8.9417 16.2013ZM13.0427 16.1463H18.6207C19.0317 16.1463 19.3047 15.8863 19.3047 15.4763C19.3047 15.0523 19.0317 14.7933 18.6207 14.7933H14.3687V14.7243L16.8167 11.9633C17.3637 11.3473 17.7867 10.8143 18.1017 10.3773C18.6617 9.5973 18.9907 8.8453 18.9907 7.8883C18.9907 5.9613 17.5817 4.7033 15.6267 4.7033C13.8767 4.7033 12.5647 5.9203 12.3317 7.2733C12.3047 7.3963 12.2907 7.5333 12.2907 7.6423C12.2907 8.0663 12.5647 8.3533 12.9887 8.3533C13.3577 8.3533 13.5897 8.1483 13.7127 7.7933C13.9457 6.7813 14.5607 6.0293 15.6267 6.0293C16.7347 6.0293 17.4047 6.8633 17.4047 7.9573C17.4047 8.6953 17.1447 9.2563 16.7207 9.8713C16.4607 10.2403 16.1057 10.7053 15.6407 11.2523L12.7017 14.5883C12.4687 14.8343 12.2637 15.0933 12.2637 15.4633C12.2637 15.8183 12.4827 16.1463 13.0427 16.1463Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 21.287109375"
          className={className}
        >
          <path
            d="              M-0.0003 19.9468C-0.0003 20.6858 0.6017 21.2868 1.3397 21.2868C2.0777 21.2868 2.6797 20.6858 2.6797 19.9468V1.3398C2.6797 0.6018 2.0777 -0.0002 1.3397 -0.0002C0.6017 -0.0002 -0.0003 0.6018 -0.0003 1.3398ZM22.8457 19.9468C22.8457 20.6858 23.4477 21.2868 24.1857 21.2868C24.9097 21.2868 25.5257 20.6858 25.5257 19.9468V1.3398C25.5257 0.6018 24.9097 -0.0002 24.1857 -0.0002C23.4477 -0.0002 22.8457 0.6018 22.8457 1.3398ZM9.3517 16.4058C10.0347 16.4058 10.4457 15.9278 10.4457 15.2578V6.4668C10.4457 5.6878 9.9527 5.2498 9.1737 5.2498C8.5587 5.2498 8.1207 5.5238 7.6157 5.8928L6.1117 6.9998C5.8247 7.2188 5.6327 7.4788 5.6327 7.8478C5.6327 8.2988 5.9477 8.6408 6.3987 8.6408C6.6177 8.6408 6.7537 8.5718 6.9317 8.4358L8.2307 7.4648H8.2717V15.2578C8.2717 15.9418 8.6817 16.4058 9.3517 16.4058ZM13.6997 16.3518H18.8947C19.4417 16.3518 19.7697 16.0098 19.7697 15.4768C19.7697 14.9438 19.4417 14.6148 18.8947 14.6148H15.3947V14.5198L17.4317 12.2908C17.9097 11.7578 18.3067 11.2788 18.6077 10.8688C19.1817 10.1168 19.5237 9.3788 19.5237 8.4078C19.5237 6.4118 18.0057 5.2498 16.0647 5.2498C14.4237 5.2498 13.0157 6.3298 12.7427 7.6428C12.7147 7.7788 12.7017 7.9298 12.7017 8.0668C12.7017 8.6268 13.0427 8.9828 13.6037 8.9828C14.0817 8.9828 14.3827 8.7368 14.5607 8.2848C14.7927 7.4648 15.2717 6.9458 16.0507 6.9458C16.9397 6.9458 17.4317 7.6288 17.4317 8.4898C17.4317 9.1598 17.1997 9.6658 16.8167 10.2128C16.5707 10.5408 16.2427 10.9648 15.8187 11.4568L13.2617 14.3008C12.9477 14.6288 12.6737 14.9568 12.6737 15.4488C12.6737 15.9008 12.9197 16.3518 13.6997 16.3518Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 20.603515625"
          className={className}
        >
          <path
            d="              M-0.0003 19.4963C-0.0003 20.0973 0.4927 20.6033 1.0937 20.6033C1.7087 20.6033 2.2017 20.0973 2.2017 19.4963V1.0933C2.2017 0.4923 1.7087 0.0003 1.0937 0.0003C0.4927 0.0003 -0.0003 0.4923 -0.0003 1.0933ZM22.9687 19.4963C22.9687 20.0973 23.4747 20.6033 24.0767 20.6033C24.6777 20.6033 25.1697 20.0973 25.1697 19.4963V1.0933C25.1697 0.4923 24.6777 0.0003 24.0767 0.0003C23.4747 0.0003 22.9687 0.4923 22.9687 1.0933ZM9.1187 16.2283C9.7477 16.2283 10.1307 15.7913 10.1307 15.1623V6.0023C10.1307 5.2913 9.6937 4.8673 8.9687 4.8673C8.3947 4.8673 7.9847 5.1273 7.5197 5.4683L5.8787 6.6853C5.5917 6.9043 5.4277 7.1363 5.4277 7.4923C5.4277 7.9163 5.7147 8.2303 6.1387 8.2303C6.3437 8.2303 6.4807 8.1753 6.6447 8.0523L8.0937 6.9723H8.1077V15.1623C8.1077 15.7913 8.4907 16.2283 9.1187 16.2283ZM13.4937 16.2013H18.8127C19.3187 16.2013 19.6327 15.8863 19.6327 15.3813C19.6327 14.8753 19.3187 14.5743 18.8127 14.5743H15.0937V14.4643L17.2537 12.0583C17.7597 11.4843 18.1837 10.9783 18.4977 10.5543C19.0447 9.7753 19.3727 9.0373 19.3727 8.0933C19.3727 6.0973 17.8827 4.8943 15.9417 4.8943C14.2597 4.8943 12.8657 6.0563 12.6057 7.3553C12.5777 7.5063 12.5647 7.6423 12.5647 7.7653C12.5647 8.2983 12.8927 8.6273 13.4117 8.6273C13.8637 8.6273 14.1367 8.3943 14.3007 7.9703C14.5467 7.0823 15.0667 6.4943 15.9277 6.4943C16.8847 6.4943 17.4177 7.2323 17.4177 8.1753C17.4177 8.8733 17.1857 9.3923 16.7887 9.9663C16.5427 10.3083 16.2017 10.7463 15.7637 11.2523L13.0837 14.2733C12.7837 14.5883 12.5367 14.9023 12.5367 15.3673C12.5367 15.7633 12.7557 16.2013 13.4937 16.2013Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 21.8203125"
          className={className}
        >
          <path
            d="              M-0.0003 20.3029C-0.0003 21.1369 0.6837 21.8199 1.5177 21.8199C2.3657 21.8199 3.0487 21.1369 3.0487 20.3029V1.5179C3.0487 0.6839 2.3657 -0.0001 1.5177 -0.0001C0.6837 -0.0001 -0.0003 0.6839 -0.0003 1.5179ZM22.7497 20.3029C22.7497 21.1369 23.4337 21.8199 24.2677 21.8199C25.1017 21.8199 25.7847 21.1369 25.7847 20.3029V1.5179C25.7847 0.6839 25.1017 -0.0001 24.2677 -0.0001C23.4337 -0.0001 22.7497 0.6839 22.7497 1.5179ZM13.8497 16.4609H18.9627C19.5237 16.4609 19.8657 16.1189 19.8657 15.5589C19.8657 14.9979 19.5237 14.6559 18.9627 14.6559H15.6137V14.5739L17.5687 12.4689C18.0197 11.9629 18.4027 11.5249 18.7027 11.1289C19.2637 10.3769 19.6327 9.6389 19.6327 8.6539C19.6327 6.6579 18.1017 5.5239 16.1597 5.5239C14.5607 5.5239 13.1387 6.5629 12.8517 7.8479C12.8107 7.9979 12.7967 8.1489 12.7967 8.2989C12.7967 8.8869 13.1657 9.2699 13.7537 9.2699C14.2597 9.2699 14.5747 8.9959 14.7657 8.5309C14.9847 7.7789 15.4217 7.2869 16.1467 7.2869C16.9807 7.2869 17.4317 7.9299 17.4317 8.7499C17.4317 9.3929 17.1997 9.8709 16.8297 10.4039C16.5977 10.7329 16.2837 11.1429 15.8457 11.6209L13.3987 14.3149C13.0707 14.6699 12.7837 15.0119 12.7837 15.5309C12.7837 16.0099 13.0567 16.4609 13.8497 16.4609ZM9.5297 16.5429C10.2407 16.5429 10.6777 16.0509 10.6777 15.3399V6.8219C10.6777 6.0019 10.1587 5.5369 9.3377 5.5369C8.6957 5.5369 8.2167 5.8239 7.6977 6.2069L6.2887 7.2459C5.9887 7.4789 5.7967 7.7519 5.7967 8.1349C5.7967 8.5999 6.1247 8.9549 6.5897 8.9549C6.8227 8.9549 6.9587 8.8729 7.1507 8.7359L8.3397 7.8479H8.3807V15.3399C8.3807 16.0509 8.8187 16.5429 9.5297 16.5429Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 20.42578125"
          className={className}
        >
          <path
            d="              M-0.0003 19.9196C-0.0003 20.2066 0.2327 20.4256 0.5057 20.4256C0.7927 20.4256 1.0117 20.2066 1.0117 19.9196V0.5056C1.0117 0.2326 0.7927 -0.0004 0.5057 -0.0004C0.2327 -0.0004 -0.0003 0.2326 -0.0003 0.5056ZM23.1877 19.9196C23.1877 20.2066 23.4197 20.4256 23.6937 20.4256C23.9667 20.4256 24.1997 20.2066 24.1997 19.9196V0.5056C24.1997 0.2326 23.9667 -0.0004 23.6937 -0.0004C23.4197 -0.0004 23.1877 0.2326 23.1877 0.5056ZM12.4417 16.0916H18.3477C18.6347 16.0916 18.8397 15.9006 18.8397 15.5996C18.8397 15.2986 18.6347 15.1076 18.3477 15.1076H13.3847V15.0796L16.2287 11.8126C16.8027 11.1566 17.2537 10.5956 17.5687 10.1306C18.1157 9.3516 18.4707 8.5856 18.4707 7.6286C18.4707 5.7836 17.1447 4.4296 15.1897 4.4296C13.3707 4.4296 12.1407 5.7286 11.9497 7.1506C11.9357 7.2736 11.9217 7.3826 11.9217 7.4646C11.9217 7.7656 12.1137 7.9706 12.4137 7.9706C12.6877 7.9706 12.8517 7.8206 12.9197 7.5606C13.1247 6.3706 13.8497 5.3866 15.2027 5.3866C16.5017 5.3866 17.3907 6.3706 17.3907 7.6696C17.3907 8.4626 17.0897 9.0776 16.6387 9.7346C16.3517 10.1446 15.9687 10.6506 15.4627 11.2386L12.1957 14.9846C12.0317 15.1756 11.8947 15.3536 11.8947 15.5996C11.8947 15.8866 12.0997 16.0916 12.4417 16.0916ZM8.6957 16.1606C9.0367 16.1606 9.2557 15.9006 9.2557 15.5726V5.0446C9.2557 4.6616 9.0237 4.4436 8.6407 4.4436C8.3397 4.4436 8.1347 4.5666 7.9027 4.7436L5.5647 6.4396C5.4007 6.5626 5.2777 6.6996 5.2777 6.9176C5.2777 7.1776 5.4687 7.3686 5.7287 7.3686C5.8377 7.3686 5.9607 7.3416 6.0567 7.2736L8.1347 5.7426V15.5726C8.1347 15.9136 8.3397 16.1606 8.6957 16.1606Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 20.384765625"
          className={className}
        >
          <path
            d="              M-0.0003 20.0433C-0.0003 20.2343 0.1507 20.3843 0.3277 20.3843C0.5197 20.3843 0.6697 20.2343 0.6697 20.0433V0.3413C0.6697 0.1503 0.5197 0.0003 0.3277 0.0003C0.1507 0.0003 -0.0003 0.1503 -0.0003 0.3413ZM23.2557 20.0433C23.2557 20.2343 23.4067 20.3843 23.5837 20.3843C23.7757 20.3843 23.9257 20.2343 23.9257 20.0433V0.3413C23.9257 0.1503 23.7757 0.0003 23.5837 0.0003C23.4067 0.0003 23.2557 0.1503 23.2557 0.3413ZM12.1267 16.0503H18.1977C18.4297 16.0503 18.5937 15.9003 18.5937 15.6683C18.5937 15.4353 18.4297 15.2713 18.1977 15.2713H12.8657L15.9277 11.7443C16.5017 11.0743 16.9667 10.4863 17.2947 10.0083C17.8277 9.2153 18.1977 8.4493 18.1977 7.4783C18.1977 5.6873 16.9257 4.2933 14.9707 4.2933C13.0977 4.2933 11.9217 5.6333 11.7577 7.0823C11.7437 7.2053 11.7307 7.3143 11.7307 7.3833C11.7307 7.6013 11.8807 7.7653 12.1137 7.7653C12.3317 7.7653 12.4547 7.6423 12.4957 7.4373C12.6877 6.1523 13.4807 5.0453 14.9847 5.0453C16.3787 5.0453 17.3767 6.1113 17.3767 7.5193C17.3767 8.3403 17.0487 8.9823 16.5837 9.6663C16.2967 10.0903 15.9007 10.6233 15.3677 11.2383L11.9217 15.2033C11.7987 15.3533 11.7027 15.4763 11.7027 15.6813C11.7027 15.9273 11.8947 16.0503 12.1267 16.0503ZM8.5727 16.1463C8.8317 16.1463 8.9827 15.9413 8.9827 15.6813V4.7583C8.9827 4.4843 8.8187 4.3203 8.5447 4.3203C8.3267 4.3203 8.1897 4.4023 8.0117 4.5393L5.4687 6.3713C5.3457 6.4663 5.2367 6.5763 5.2367 6.7543C5.2367 6.9453 5.4007 7.1093 5.5917 7.1093C5.6877 7.1093 5.7967 7.0953 5.8787 7.0273L8.1487 5.3733V15.6813C8.1487 15.9553 8.2987 16.1463 8.5727 16.1463Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}