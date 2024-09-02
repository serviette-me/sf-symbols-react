import { IconProps } from "../../types"

export default function HourglassAndLockIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.77734375 30.529296875"
          className={className}
        >
          <path
            d="              M3.1307 26.9606H11.0607V23.5836H4.7437C3.9647 23.5836 3.6507 22.6676 4.1977 22.1076L7.4787 18.7446C7.9567 18.2516 8.0257 18.1976 8.0257 17.3636V12.6876C8.0257 11.7986 7.7927 11.2246 7.1777 10.6366C6.5347 10.0356 5.5237 9.0646 4.8947 8.3396C4.3747 7.7656 4.5667 6.9586 5.4277 6.9586H12.2907C13.1387 6.9586 13.3297 7.7656 12.8247 8.3396C12.1817 9.0646 11.1837 10.0356 10.5407 10.6366C9.9117 11.2246 9.6797 11.7986 9.6797 12.6876V17.3636C9.6797 18.1976 9.7477 18.2516 10.2267 18.7446L12.0177 20.5896C12.1817 18.8266 12.9337 17.3636 14.0407 16.3656C13.5077 15.8046 13.0427 15.3396 12.7287 15.0116C11.7987 14.0956 11.8127 12.8246 12.7287 11.9086C13.9727 10.6506 17.7047 7.0686 17.7047 3.3226V3.1446C17.7047 1.1896 16.5157 -0.0004 14.5747 -0.0004H3.1307C1.2027 -0.0004 -0.0003 1.1896 -0.0003 3.1446V3.3226C-0.0003 7.0686 3.7327 10.6506 4.9907 11.9086C5.9067 12.8246 5.9067 14.0956 4.9907 15.0116C3.7327 16.2696 -0.0003 19.8786 -0.0003 23.5976V23.8026C-0.0003 25.7716 1.2027 26.9606 3.1307 26.9606ZM14.8617 30.5296H21.2327C22.2577 30.5296 22.7777 30.0096 22.7777 28.9026V24.1036C22.7777 23.2556 22.4627 22.7496 21.8617 22.5586V21.3416C21.8617 18.8396 20.3167 17.1446 18.0467 17.1446C15.7777 17.1446 14.2327 18.8396 14.2327 21.3416V22.5586C13.6177 22.7496 13.3167 23.2426 13.3167 24.1036V28.9026C13.3167 30.0096 13.8357 30.5296 14.8617 30.5296ZM16.6527 21.2596C16.6527 20.1936 17.1857 19.5646 18.0467 19.5646C18.9217 19.5646 19.4547 20.1796 19.4547 21.2596V22.4766H16.6527Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.806640625 30.173828125"
          className={className}
        >
          <path
            d="              M2.6797 26.0454H10.1717V23.4334H4.0197C3.3357 23.4334 3.1037 22.6404 3.5817 22.1754L7.3967 18.4164C7.7247 18.0874 7.7927 18.0334 7.7927 17.5004V12.1274C7.7927 11.3754 7.6157 10.9374 7.0687 10.4314C6.2887 9.7484 5.1407 8.7094 4.4027 7.9024C3.9647 7.4374 4.1567 6.8084 4.7987 6.8084H12.0727C12.7147 6.8084 12.9067 7.4374 12.4687 7.9024C11.7307 8.7094 10.5817 9.7484 9.8027 10.4314C9.2557 10.9374 9.0917 11.3754 9.0917 12.1274V17.5004C9.0917 18.0334 9.1467 18.0874 9.4747 18.4164L11.2387 20.1524C11.3887 18.4164 12.0587 16.9804 13.1387 15.9824C12.5917 15.3804 12.0727 14.8754 11.6757 14.4784C10.7457 13.5484 10.7867 12.4274 11.6757 11.5394C13.2617 9.9804 16.8707 6.4394 16.8707 2.9124V2.7074C16.8707 0.9844 15.8457 0.0004 14.1917 0.0004H2.6797C1.0257 0.0004 -0.0003 0.9844 -0.0003 2.7074V2.9124C-0.0003 6.4394 3.6227 9.9804 5.1957 11.5394C6.0837 12.4274 6.1247 13.5484 5.1957 14.4784C3.6227 16.0504 -0.0003 19.6054 -0.0003 23.1194V23.3514C-0.0003 25.0604 1.0257 26.0454 2.6797 26.0454ZM13.6997 30.1734H20.3437C21.3277 30.1734 21.8067 29.6814 21.8067 28.6294V23.5704C21.8067 22.6814 21.4517 22.1894 20.7677 22.0664V20.7544C20.7677 18.2654 19.2497 16.5844 17.0217 16.5844C14.7927 16.5844 13.2887 18.2654 13.2887 20.7544V22.0664C12.5777 22.1894 12.2367 22.6814 12.2367 23.5704V28.6294C12.2367 29.6814 12.7147 30.1734 13.6997 30.1734ZM15.3947 20.6304C15.3947 19.3864 15.9957 18.6894 17.0217 18.6894C18.0467 18.6894 18.6617 19.3864 18.6617 20.6304V22.0254H15.3947Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.3125 30.3515625"
          className={className}
        >
          <path
            d="              M2.9257 26.5238H10.6367V23.5018H4.4027C3.6637 23.5018 3.4047 22.6538 3.9097 22.1348L7.4517 18.5798C7.8477 18.1698 7.9157 18.1148 7.9157 17.4178V12.4138C7.9157 11.5938 7.7107 11.0878 7.1227 10.5408C6.4117 9.8848 5.3457 8.8868 4.6617 8.1208C4.1837 7.6018 4.3747 6.8908 5.1267 6.8908H12.1817C12.9337 6.8908 13.1387 7.6018 12.6597 8.1208C11.9627 8.8868 10.8967 9.8848 10.1857 10.5408C9.6117 11.0878 9.4067 11.5938 9.4067 12.4138V17.4178C9.4067 18.1148 9.4607 18.1698 9.8707 18.5798L11.6487 20.3848C11.8127 18.6348 12.5237 17.1858 13.6177 16.1878C13.0707 15.5998 12.5917 15.1078 12.2367 14.7518C11.3067 13.8358 11.3207 12.6328 12.2367 11.7308C13.6307 10.3218 17.3087 6.7538 17.3087 3.1168V2.9258C17.3087 1.0938 16.2017 -0.0002 14.3967 -0.0002H2.9257C1.1207 -0.0002 -0.0003 1.0938 -0.0003 2.9258V3.1168C-0.0003 6.7538 3.6777 10.3218 5.0857 11.7308C5.9887 12.6328 6.0157 13.8358 5.0857 14.7518C3.6777 16.1598 -0.0003 19.7418 -0.0003 23.3648V23.5838C-0.0003 25.4298 1.1207 26.5238 2.9257 26.5238ZM14.3147 30.3518H20.8227C21.8207 30.3518 22.3127 29.8458 22.3127 28.7658V23.8438C22.3127 22.9828 21.9847 22.4768 21.3417 22.3128V21.0548C21.3417 18.5668 19.8107 16.8708 17.5547 16.8708C15.3127 16.8708 13.7947 18.5668 13.7947 21.0548V22.3128C13.1387 22.4768 12.8107 22.9688 12.8107 23.8438V28.7658C12.8107 29.8458 13.3027 30.3518 14.3147 30.3518ZM16.0507 20.9588C16.0507 19.8108 16.6247 19.1408 17.5547 19.1408C18.5117 19.1408 19.0727 19.7968 19.0727 20.9588V22.2578H16.0507Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.357421875 29.39453125"
          className={className}
        >
          <path
            d="              M2.0237 24.6918H9.3247V23.1058H2.9667C2.4747 23.1058 2.3247 22.5308 2.6797 22.1898L7.2327 17.7458C7.3967 17.5818 7.4517 17.5138 7.4517 17.2808V11.5118C7.4517 11.0058 7.3687 10.7738 6.9867 10.4458C5.9337 9.5288 4.5937 8.2718 3.6917 7.2598C3.3907 6.9458 3.5547 6.5898 3.9237 6.5898H11.8267C12.1957 6.5898 12.3597 6.9458 12.0587 7.2598C11.1567 8.2718 9.8167 9.5288 8.7637 10.4458C8.3807 10.7738 8.2987 11.0058 8.2987 11.5118V17.2808C8.2987 17.5138 8.3537 17.5818 8.5177 17.7458L10.5687 19.6738C10.6367 18.0468 11.1287 16.6658 12.2497 15.6678C11.5257 14.8338 10.7867 14.0818 10.1587 13.4398C9.4067 12.6878 9.4477 11.9218 10.1587 11.2108C12.2637 9.1188 15.7497 5.5098 15.7497 2.3518V2.0238C15.7497 0.7378 14.9707 -0.0002 13.7267 -0.0002H2.0237C0.7797 -0.0002 -0.0003 0.7378 -0.0003 2.0238V2.3518C-0.0003 5.5098 3.4867 9.1188 5.5917 11.2108C6.3027 11.9218 6.3437 12.6878 5.5917 13.4398C3.4867 15.5308 -0.0003 19.1678 -0.0003 22.2988V22.6548C-0.0003 23.9528 0.7797 24.6918 2.0237 24.6918ZM12.2907 29.3948H18.9907C19.9197 29.3948 20.3577 28.9298 20.3577 27.9318V22.6548C20.3577 21.6968 19.9607 21.2458 19.1407 21.1918V19.8378C19.1407 17.5278 17.7327 15.9828 15.6407 15.9828C13.5627 15.9828 12.1547 17.5278 12.1547 19.8378V21.1918C11.3207 21.2458 10.9237 21.6968 10.9237 22.6548V27.9318C10.9237 28.9298 11.3747 29.3948 12.2907 29.3948ZM13.5767 19.7418C13.5767 18.2658 14.3687 17.4038 15.6407 17.4038C16.9257 17.4038 17.7187 18.2658 17.7187 19.7418V21.1918H13.5767Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.177734375 29.955078125"
          className={className}
        >
          <path
            d="              M2.3927 25.4703H9.6117V23.3383H3.5407C2.9257 23.3383 2.7617 22.6133 3.1857 22.2173L7.3557 18.1973C7.5747 17.9923 7.6287 17.9243 7.6287 17.5953V11.7853C7.6287 11.1153 7.4927 10.7463 6.9997 10.3223C6.1247 9.5563 4.8947 8.4763 4.0877 7.6153C3.7047 7.2183 3.8967 6.7133 4.4027 6.7133H11.9357C12.4417 6.7133 12.6327 7.2183 12.2497 7.6153C11.4437 8.4763 10.2127 9.5563 9.3377 10.3223C8.8457 10.7463 8.7087 11.1153 8.7087 11.7853V17.5953C8.7087 17.9243 8.7637 17.9923 8.9827 18.1973L10.7457 19.8793C10.8687 18.1703 11.4847 16.7483 12.5647 15.7503C12.0037 15.1213 11.4567 14.5743 11.0057 14.1363C10.0767 13.1933 10.1307 12.1953 11.0057 11.3203C12.7967 9.5433 16.3377 6.0293 16.3377 2.6383V2.4203C16.3377 0.8613 15.4217 0.0003 13.9457 0.0003H2.3927C0.9157 0.0003 -0.0003 0.8613 -0.0003 2.4203V2.6383C-0.0003 6.0293 3.5407 9.5433 5.3317 11.3203C6.2067 12.1953 6.2617 13.1933 5.3317 14.1363C3.5407 15.9003 -0.0003 19.4273 -0.0003 22.8043V23.0643C-0.0003 24.6233 0.9157 25.4703 2.3927 25.4703ZM12.9477 29.9553H19.7837C20.7267 29.9553 21.1777 29.4763 21.1777 28.4653V23.2423C21.1777 22.3263 20.8087 21.8473 20.0567 21.7523V20.3713C20.0567 17.8963 18.5667 16.2283 16.3657 16.2283C14.1637 16.2283 12.6737 17.8963 12.6737 20.3713V21.7523C11.9217 21.8473 11.5527 22.3263 11.5527 23.2423V28.4653C11.5527 29.4763 12.0037 29.9553 12.9477 29.9553ZM14.5747 20.2343C14.5747 18.8813 15.2437 18.1293 16.3657 18.1293C17.4997 18.1293 18.1567 18.8813 18.1567 20.2343V21.7383H14.5747Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.822265625 29.83203125"
          className={className}
        >
          <path
            d="              M2.2427 25.1422H9.2837V23.2832H3.2817C2.6937 23.2832 2.5707 22.5992 2.9527 22.2302L7.3277 18.0742C7.4927 17.9242 7.5467 17.8552 7.5467 17.6362V11.5802C7.5467 10.9512 7.4377 10.6362 6.9727 10.2402C6.0427 9.4612 4.7577 8.3402 3.9237 7.4512C3.5687 7.0952 3.7457 6.6582 4.1697 6.6582H11.8677C12.2907 6.6582 12.4687 7.0952 12.1137 7.4512C11.2797 8.3402 9.9937 9.4612 9.0647 10.2402C8.5997 10.6362 8.4907 10.9512 8.4907 11.5802V17.6362C8.4907 17.8552 8.5447 17.9242 8.7087 18.0742L10.4727 19.7282C10.5817 18.0192 11.1697 16.6112 12.2367 15.6132C11.6757 14.9702 11.1017 14.4102 10.6227 13.9312C9.6937 13.0022 9.7617 12.0452 10.6227 11.1832C12.5367 9.2972 16.0367 5.8102 16.0367 2.4882V2.2562C16.0367 0.7932 15.1757 0.0002 13.7947 0.0002H2.2427C0.8477 0.0002 -0.0003 0.7932 -0.0003 2.2562V2.4882C-0.0003 5.8102 3.4997 9.2972 5.4137 11.1832C6.2757 12.0452 6.3437 13.0022 5.4137 13.9312C3.4997 15.8322 -0.0003 19.3322 -0.0003 22.6272V22.9002C-0.0003 24.3632 0.8477 25.1422 2.2427 25.1422ZM12.5367 29.8322H19.4687C20.3847 29.8322 20.8227 29.3672 20.8227 28.3692V23.0372C20.8227 22.1212 20.4527 21.6562 19.6597 21.5882V20.1522C19.6597 17.6782 18.1837 16.0232 15.9957 16.0232C13.8087 16.0232 12.3317 17.6782 12.3317 20.1522V21.5882C11.5387 21.6562 11.1697 22.1212 11.1697 23.0372V28.3692C11.1697 29.3672 11.6077 29.8322 12.5367 29.8322ZM14.1227 20.0022C14.1227 18.5942 14.8207 17.8142 15.9957 17.8142C17.1857 17.8142 17.8687 18.5942 17.8687 20.0022V21.5742H14.1227Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.451171875 30.05078125"
          className={className}
        >
          <path
            d="              M2.5157 25.7163H9.8437V23.3793H3.7457C3.1037 23.3793 2.9117 22.6273 3.3497 22.1893L7.3687 18.2933C7.6427 18.0333 7.6977 17.9653 7.6977 17.5543V11.9353C7.6977 11.2243 7.5467 10.8283 7.0277 10.3633C6.1937 9.6383 5.0037 8.5723 4.2247 7.7383C3.8147 7.3143 4.0057 6.7543 4.5667 6.7543H11.9907C12.5647 6.7543 12.7427 7.3143 12.3457 7.7383C11.5667 8.5723 10.3767 9.6383 9.5297 10.3633C9.0237 10.8283 8.8727 11.2243 8.8727 11.9353V17.5543C8.8727 17.9653 8.9277 18.0333 9.2017 18.2933L10.9647 20.0023C11.0877 18.2793 11.7307 16.8433 12.8107 15.8453C12.2497 15.2303 11.7167 14.7113 11.2927 14.2733C10.3637 13.3433 10.4177 12.2913 11.2927 11.4163C12.9887 9.7203 16.5707 6.2073 16.5707 2.7613V2.5433C16.5707 0.9163 15.5997 0.0003 14.0407 0.0003H2.5157C0.9707 0.0003 -0.0003 0.9163 -0.0003 2.5433V2.7613C-0.0003 6.2073 3.5687 9.7203 5.2777 11.4163C6.1527 12.2913 6.2067 13.3433 5.2777 14.2733C3.5687 15.9683 -0.0003 19.5093 -0.0003 22.9413V23.1873C-0.0003 24.8143 0.9707 25.7163 2.5157 25.7163ZM13.2757 30.0503H20.0297C20.9867 30.0503 21.4517 29.5723 21.4517 28.5333V23.3793C21.4517 22.4763 21.0957 21.9983 20.3577 21.8883V20.5353C20.3577 18.0473 18.8537 16.3793 16.6527 16.3793C14.4377 16.3793 12.9337 18.0473 12.9337 20.5353V21.8883C12.2087 21.9983 11.8537 22.4763 11.8537 23.3793V28.5333C11.8537 29.5723 12.3187 30.0503 13.2757 30.0503ZM14.9297 20.4123C14.9297 19.0993 15.5727 18.3753 16.6527 18.3753C17.7327 18.3753 18.3747 19.0993 18.3747 20.4123V21.8613H14.9297Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.755859375 28.833984375"
          className={className}
        >
          <path
            d="              M1.7367 24.09H9.3787V22.859H2.5427C2.1737 22.859 2.0097 22.436 2.3247 22.121L7.0957 17.309C7.2867 17.117 7.3147 17.049 7.3147 16.816V11.402C7.3147 11.088 7.2737 10.951 7.0277 10.719C5.7967 9.625 4.3747 8.189 3.3907 7.027C3.1587 6.754 3.2817 6.48 3.5817 6.48H11.7847C12.0857 6.48 12.2087 6.754 11.9767 7.027C10.9927 8.189 9.5707 9.625 8.3537 10.719C8.0937 10.951 8.0527 11.088 8.0527 11.402V16.816C8.0527 17.049 8.0797 17.117 8.2717 17.309L10.6917 19.619C10.7187 18.074 11.0747 16.734 12.2497 15.75C11.3477 14.656 10.3767 13.645 9.5297 12.797C9.0097 12.277 9.0367 11.758 9.5297 11.252C11.8947 8.9 15.3677 5.127 15.3677 2.16V1.736C15.3677 0.67 14.6697 0 13.6307 0H1.7367C0.6977 0 -0.0003 0.67 -0.0003 1.736V2.16C-0.0003 5.127 3.4727 8.9 5.8377 11.252C6.3437 11.758 6.3577 12.277 5.8377 12.797C3.4727 15.148 -0.0003 18.949 -0.0003 21.889V22.34C-0.0003 23.406 0.6977 24.09 1.7367 24.09ZM11.9767 28.834H18.3747C19.3047 28.834 19.7557 28.383 19.7557 27.371V22.148C19.7557 21.164 19.3187 20.713 18.4437 20.686V19.441C18.4437 17.336 17.1307 15.928 15.1757 15.928C13.2347 15.928 11.9087 17.336 11.9087 19.441V20.686C11.0607 20.686 10.6097 21.137 10.6097 22.148V27.371C10.6097 28.383 11.0607 28.834 11.9767 28.834ZM12.8377 19.4C12.8377 17.842 13.7677 16.857 15.1757 16.857C16.5977 16.857 17.5137 17.842 17.5137 19.4V20.686H12.8377Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.44140625 28.546875"
          className={className}
        >
          <path
            d="              M1.5997 23.7756H9.4067V22.7496H2.3247C2.0097 22.7496 1.8457 22.3946 2.1327 22.0936L7.0277 17.0896C7.2187 16.8986 7.2457 16.8296 7.2457 16.5836V11.3616C7.2457 11.1286 7.2187 11.0336 7.0407 10.8696C5.7287 9.6796 4.2657 8.1486 3.2407 6.9046C3.0487 6.6586 3.1587 6.4396 3.4047 6.4396H11.7577C12.0177 6.4396 12.1267 6.6586 11.9357 6.9046C10.9097 8.1486 9.4477 9.6796 8.1347 10.8696C7.9437 11.0336 7.9297 11.1286 7.9297 11.3616V16.5836C7.9297 16.8296 7.9567 16.8986 8.1487 17.0896L10.7597 19.6056C10.7597 18.1016 11.0467 16.7756 12.2497 15.8046C11.2517 14.5746 10.1587 13.4256 9.2147 12.4686C8.8187 12.0856 8.8187 11.6756 9.2147 11.2796C11.7167 8.7906 15.1757 4.9216 15.1757 2.0776V1.5996C15.1757 0.6426 14.5337 -0.0004 13.5767 -0.0004H1.5997C0.6427 -0.0004 -0.0003 0.6426 -0.0003 1.5996V2.0776C-0.0003 4.9216 3.4587 8.7906 5.9607 11.2796C6.3577 11.6756 6.3577 12.0856 5.9607 12.4686C3.4587 14.9566 -0.0003 18.8396 -0.0003 21.6836V22.1896C-0.0003 23.1326 0.6427 23.7756 1.5997 23.7756ZM11.8267 28.5466H18.0607C18.9767 28.5466 19.4417 28.0956 19.4417 27.0836V21.9026C19.4417 20.8766 18.9907 20.4396 18.0877 20.4396V19.2366C18.0877 17.2406 16.8167 15.9006 14.9437 15.9006C13.0567 15.9006 11.7847 17.2406 11.7847 19.2366V20.4396C10.8967 20.4396 10.4457 20.8766 10.4457 21.9026V27.0836C10.4457 28.0956 10.8967 28.5466 11.8267 28.5466ZM12.4687 19.2366C12.4687 17.6226 13.4667 16.5706 14.9437 16.5706C16.4337 16.5706 17.4177 17.6226 17.4177 19.2366V20.4396H12.4687Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}