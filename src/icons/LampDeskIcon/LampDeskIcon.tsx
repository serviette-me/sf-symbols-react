import { IconProps } from "../../types"

export default function LampDeskIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.198032807809334 35.71265943056591"
          className={className}
        >
          <path
            d="              M3.0347 22.6563C3.2267 22.6563 3.4177 22.6283 3.5957 22.6013L6.5217 25.5003C6.4397 25.7873 6.3987 26.0743 6.3987 26.3753C6.3987 27.3733 6.8497 28.2483 7.5747 28.7943V31.3513H3.1857C1.5857 31.3513 0.2597 32.3223 0.2597 33.8123C0.2597 34.8513 0.7797 35.7123 1.8047 35.7123H18.7307C19.7557 35.7123 20.2887 34.8513 20.2887 33.8123C20.2887 32.3223 18.9497 31.3513 17.3637 31.3513H11.2797V28.7943C12.0037 28.2483 12.4687 27.3733 12.4687 26.3753C12.4687 24.7483 11.1837 23.4213 9.5707 23.3533L6.0567 19.8533C6.0707 19.7713 6.0707 19.6893 6.0707 19.6213C6.0707 19.5523 6.0707 19.4843 6.0567 19.4163L11.0877 14.7943C11.2517 16.0393 11.5117 17.2013 11.8397 18.2813C12.6877 20.9883 15.4497 21.4943 17.1037 19.8533L18.9217 18.0353C19.8517 18.6643 20.9047 18.9513 21.9437 18.9513C24.8967 18.9513 27.4807 16.4353 27.4807 13.4553C27.4807 12.3883 27.1527 11.3223 26.5367 10.4063L28.2187 8.7243C30.0237 6.9193 29.2307 4.2943 26.6877 3.4883C24.0767 2.6543 20.9457 2.3533 17.4587 2.5173L17.1857 2.2443C15.7227 0.7813 13.7537 0.4123 12.0447 1.2053L11.3477 0.5073C10.6637 -0.1757 9.5837 -0.1627 8.8867 0.5073C8.2027 1.1913 8.2027 2.2713 8.8867 2.9683L9.5837 3.6793C8.7777 5.4433 9.1467 7.4803 10.6367 8.8613L10.8967 9.1073C10.8827 9.4083 10.8687 9.7083 10.8687 10.0093L3.6507 16.6403C3.4457 16.5993 3.2407 16.5853 3.0347 16.5853C1.3397 16.5853 -0.0003 17.9253 -0.0003 19.6213C-0.0003 21.3163 1.3397 22.6563 3.0347 22.6563ZM15.2167 16.9963C15.1207 17.0913 14.9847 17.1053 14.9027 16.8863C14.2187 14.6713 14.0277 12.0053 14.2737 8.8063C14.3007 8.1363 14.0277 7.4533 13.5077 6.9743L12.8787 6.4003C12.3187 5.9083 12.3047 5.1833 12.9477 4.5543C13.5897 3.9253 14.2597 3.9253 14.7797 4.5003L15.3537 5.1283C15.8457 5.6753 16.5977 5.9623 17.2817 5.8803C20.3707 5.5113 23.0237 5.8803 25.2247 6.5503C25.4567 6.6323 25.4707 6.7693 25.3617 6.8783ZM24.1447 13.4823C24.1447 14.6443 23.1187 15.6283 21.9707 15.6283C21.7797 15.6283 21.5877 15.6013 21.3967 15.5603L24.0627 12.8943C24.1177 13.0853 24.1447 13.2913 24.1447 13.4823Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.65419863665404 34.19677734375"
          className={className}
        >
          <path
            d="              M2.5837 21.3047C2.7887 21.3047 2.9807 21.2907 3.1717 21.2497L6.3167 24.3807C6.2207 24.6537 6.1797 24.9407 6.1797 25.2417C6.1797 26.1437 6.6037 26.9097 7.2867 27.3747V30.6967H3.0897C1.5997 30.6967 0.4927 31.5447 0.4927 32.8027C0.4927 33.5957 0.9297 34.1967 1.6817 34.1967H17.4317C18.1837 34.1967 18.6207 33.5957 18.6207 32.8027C18.6207 31.5447 17.5137 30.6967 16.0237 30.6967H10.2407V27.3887C10.9097 26.9237 11.3477 26.1577 11.3477 25.2417C11.3477 23.8057 10.1997 22.6577 8.7637 22.6577H8.7497L5.1407 19.0617C5.1547 18.9527 5.1677 18.8437 5.1677 18.7207C5.1677 18.6247 5.1547 18.5147 5.1547 18.4057L10.6227 13.3887C10.7737 14.8377 11.0467 16.2047 11.4567 17.5037C12.1407 19.6777 14.4517 20.2517 15.9417 18.7617L17.9097 16.7927C18.7577 17.3527 19.7287 17.6267 20.6857 17.6267C23.4197 17.6267 25.7437 15.3437 25.7437 12.5957C25.7437 11.6247 25.4567 10.6537 24.8967 9.8057L26.8107 7.8917C28.3687 6.3337 27.6587 4.0917 25.5797 3.4217C22.8727 2.5597 19.8377 2.2867 16.4067 2.4647L16.0507 2.0957C14.6977 0.7147 12.8247 0.3867 11.2247 1.2207L10.4047 0.3997C9.8577 -0.1333 8.9957 -0.1333 8.4497 0.3997C7.9157 0.9467 7.9027 1.8077 8.4497 2.3547L9.2697 3.1887C8.4357 4.8297 8.7497 6.7437 10.1587 8.0427L10.5137 8.3707C10.4997 8.7667 10.4867 9.1497 10.4727 9.5327L3.1997 16.2187C3.0077 16.1637 2.7887 16.1367 2.5837 16.1367C1.1347 16.1367 -0.0003 17.2847 -0.0003 18.7207C-0.0003 20.1827 1.1347 21.3047 2.5837 21.3047ZM14.3147 16.6557C14.1637 16.8197 13.9997 16.8057 13.8637 16.3827C13.1387 14.0717 12.9477 11.4057 13.1797 8.1797C13.2067 7.6047 12.9747 7.0577 12.5367 6.6617L11.9357 6.1007C11.2657 5.4997 11.2387 4.6387 11.9627 3.8997C12.7017 3.1887 13.5347 3.1887 14.1507 3.8867L14.7107 4.4877C15.1207 4.9387 15.7227 5.1847 16.3107 5.1167C19.4547 4.8297 22.1207 5.1167 24.4177 5.8417C24.8417 5.9647 24.8557 6.1287 24.7047 6.2787ZM23.1187 12.6227C23.1187 13.9217 21.9977 15.0017 20.7127 15.0017C20.4117 15.0017 20.1247 14.9467 19.8517 14.8507L22.9417 11.7617C23.0507 12.0347 23.1187 12.3217 23.1187 12.6227Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.47258403774758 34.99658203125"
          className={className}
        >
          <path
            d="              M2.8167 22.0223C3.0217 22.0223 3.2127 21.9943 3.4047 21.9673L6.4257 24.9753C6.3437 25.2483 6.2887 25.5353 6.2887 25.8363C6.2887 26.7933 6.7407 27.6133 7.4377 28.1333V31.0453H3.1307C1.5997 31.0453 0.3687 31.9613 0.3687 33.3423C0.3687 34.2583 0.8477 34.9963 1.7497 34.9963H18.1157C19.0177 34.9963 19.4957 34.2583 19.4957 33.3423C19.4957 31.9613 18.2657 31.0453 16.7347 31.0453H10.7867V28.1333C11.4847 27.6273 11.9357 26.8073 11.9357 25.8363C11.9357 24.3053 10.7187 23.0613 9.1877 23.0203L5.6327 19.4793C5.6327 19.3833 5.6467 19.2873 5.6467 19.1923C5.6467 19.1103 5.6327 19.0283 5.6327 18.9453L10.8687 14.1333C11.0337 15.4733 11.2927 16.7313 11.6617 17.9063C12.4277 20.3673 14.9847 20.9013 16.5567 19.3423L18.4437 17.4423C19.3317 18.0433 20.3437 18.3303 21.3557 18.3303C24.1997 18.3303 26.6597 15.9243 26.6597 13.0533C26.6597 12.0283 26.3457 11.0023 25.7577 10.1273L27.5627 8.3223C29.2437 6.6413 28.4927 4.1943 26.1547 3.4553C23.5017 2.6213 20.4117 2.3203 16.9667 2.4983L16.6527 2.1843C15.2437 0.7483 13.3167 0.4063 11.6487 1.2133L10.8967 0.4613C10.2817 -0.1537 9.3107 -0.1537 8.6817 0.4613C8.0667 1.0763 8.0667 2.0473 8.6817 2.6903L9.4337 3.4423C8.6137 5.1513 8.9547 7.1333 10.4177 8.4733L10.7187 8.7603C10.7047 9.1023 10.6917 9.4443 10.6777 9.7853L3.4317 16.4443C3.2407 16.4033 3.0347 16.3753 2.8167 16.3753C1.2437 16.3753 -0.0003 17.6193 -0.0003 19.1923C-0.0003 20.7783 1.2437 22.0223 2.8167 22.0223ZM14.7927 16.8403C14.6697 16.9633 14.5197 16.9633 14.4097 16.6493C13.7127 14.3933 13.5217 11.7273 13.7537 8.5143C13.7817 7.8853 13.5347 7.2703 13.0567 6.8323L12.4277 6.2583C11.8267 5.7113 11.7987 4.9323 12.4827 4.2483C13.1657 3.5783 13.9177 3.5783 14.4927 4.2073L15.0527 4.8223C15.5037 5.3283 16.1877 5.6023 16.8297 5.5203C19.9337 5.1923 22.5997 5.5203 24.8417 6.2173C25.1567 6.3263 25.1837 6.4633 25.0467 6.6003ZM23.6657 13.0803C23.6657 14.3113 22.5997 15.3363 21.3687 15.3363C21.1367 15.3363 20.8907 15.2953 20.6587 15.2273L23.5297 12.3563C23.6247 12.5883 23.6657 12.8343 23.6657 13.0803Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.00547196010807 31.68115234375"
          className={className}
        >
          <path
            d="              M1.5997 31.6812H14.7107C15.1077 31.6812 15.3947 31.3942 15.3947 30.9842C15.3947 30.1772 14.7107 29.5752 13.6037 29.5752H8.3677V24.8452C8.9137 24.5722 9.2697 23.9972 9.2697 23.3002C9.2697 22.3162 8.4907 21.5362 7.5197 21.5362C7.4377 21.5362 7.3557 21.5502 7.2737 21.5642L3.4457 17.7362C3.4867 17.5852 3.4997 17.4212 3.4997 17.2572C3.4997 17.0792 3.4867 16.9292 3.4457 16.7792L9.7347 10.9682C9.8437 12.7732 10.1307 14.4822 10.6507 16.1772C11.1157 17.6262 12.7017 18.1462 13.7947 17.0522L16.0917 14.7412C16.8297 15.2882 17.7187 15.5892 18.6487 15.5892C21.0137 15.5752 22.9417 13.6482 22.9417 11.2962C22.9417 10.3662 22.6407 9.4782 22.0937 8.7402L24.4177 6.4152C25.5117 5.3352 24.9927 3.7362 23.5707 3.2982C20.7267 2.3822 17.8417 2.1912 14.5057 2.3962L14.0407 1.8902C12.8377 0.6052 11.1697 0.3722 9.7757 1.2882L8.7227 0.2362C8.3947 -0.0788 7.9157 -0.0788 7.6017 0.2362C7.2867 0.5362 7.2867 1.0422 7.6017 1.3572L8.6547 2.4092C7.7517 3.8182 7.9847 5.5132 9.2697 6.6752L9.7757 7.1402C9.7347 7.6732 9.7207 8.2062 9.7067 8.7122L2.2557 15.5752C2.1057 15.5212 1.9277 15.4932 1.7497 15.4932C0.7657 15.4932 -0.0003 16.2732 -0.0003 17.2572C-0.0003 18.2412 0.7657 19.0072 1.7497 19.0072C1.9277 19.0072 2.0917 18.9802 2.2557 18.9392L5.9197 22.5892C5.8247 22.8082 5.7697 23.0402 5.7697 23.3002C5.7697 23.9702 6.1247 24.5442 6.6717 24.8452V29.5752H2.7207C1.5997 29.5752 0.9297 30.1772 0.9297 30.9842C0.9297 31.3942 1.2027 31.6812 1.5997 31.6812ZM12.7287 15.9862C12.4827 16.2182 12.2227 16.1632 12.0317 15.5482C11.2247 12.9912 11.0747 10.3122 11.2927 7.0852C11.3207 6.6892 11.1697 6.3612 10.8967 6.1152L10.2947 5.5682C9.4477 4.7882 9.3657 3.7492 10.2267 2.8472C11.1287 1.9722 12.1547 2.0542 12.9477 2.9152L13.4937 3.5172C13.7537 3.7902 14.1097 3.9412 14.5057 3.9132C17.6917 3.7082 20.3987 3.8592 22.9277 4.6652C23.5297 4.8572 23.5977 5.1162 23.3657 5.3492ZM21.4237 11.2962C21.4237 12.8272 20.1657 14.0722 18.6487 14.0722C18.1287 14.0722 17.6227 13.9082 17.2127 13.6342L20.9727 9.8612C21.2597 10.2712 21.4237 10.7772 21.4237 11.2962Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.673950199077666 33.23291015625"
          className={className}
        >
          <path
            d="              M2.2967 20.45C2.5017 20.45 2.7067 20.422 2.8847 20.368L6.1937 23.663C6.0837 23.922 6.0297 24.209 6.0297 24.51C6.0297 25.344 6.4527 26.055 7.0957 26.465V30.28H3.0347C1.6137 30.28 0.6427 31.045 0.6427 32.167C0.6427 32.782 1.0117 33.233 1.6137 33.233H16.5977C17.1857 33.233 17.5687 32.782 17.5687 32.167C17.5687 31.045 16.5977 30.28 15.1757 30.28H9.5707V26.479C10.2127 26.083 10.6227 25.372 10.6227 24.51C10.6227 23.239 9.6117 22.213 8.3267 22.213C8.2987 22.213 8.2717 22.213 8.2307 22.227L4.5527 18.549C4.5797 18.426 4.5937 18.29 4.5937 18.153C4.5937 18.016 4.5797 17.893 4.5527 17.77L10.3227 12.465C10.4727 14.051 10.7457 15.555 11.1977 17.004C11.7847 18.85 13.8087 19.452 15.1897 18.071L17.2677 15.993C18.0607 16.526 18.9627 16.786 19.8927 16.786C22.4767 16.786 24.6507 14.639 24.6507 12.055C24.6507 11.125 24.3637 10.209 23.8297 9.43L25.9217 7.352C27.3167 5.958 26.6597 3.948 24.8687 3.387C22.1077 2.499 19.1267 2.239 15.7367 2.43L15.3397 2.006C14.0277 0.667 12.2367 0.379 10.7047 1.241L9.8027 0.338C9.3377 -0.113 8.6267 -0.113 8.1757 0.338C7.7247 0.79 7.7107 1.5 8.1757 1.965L9.0777 2.881C8.2167 4.44 8.4907 6.272 9.8577 7.516L10.2677 7.913C10.2537 8.35 10.2267 8.788 10.2267 9.225L2.9117 15.938C2.7207 15.883 2.5157 15.856 2.2967 15.856C0.9977 15.856 -0.0003 16.881 -0.0003 18.153C-0.0003 19.452 0.9977 20.45 2.2967 20.45ZM13.7407 16.444C13.5347 16.635 13.3577 16.622 13.1937 16.061C12.4417 13.696 12.2497 11.016 12.4827 7.776C12.5097 7.27 12.2907 6.805 11.9217 6.463L11.3207 5.917C10.5957 5.247 10.5547 4.29 11.3337 3.483C12.1407 2.704 13.0707 2.731 13.7537 3.483L14.3007 4.084C14.6567 4.467 15.1757 4.686 15.6817 4.631C18.8677 4.399 21.5607 4.618 23.9117 5.37C24.4457 5.547 24.4727 5.711 24.2817 5.903ZM22.4497 12.055C22.4497 13.463 21.2737 14.598 19.8927 14.598C19.5507 14.598 19.1957 14.53 18.8807 14.379L22.2167 11.043C22.3677 11.358 22.4497 11.713 22.4497 12.055Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.10967898901378 32.6962890625"
          className={className}
        >
          <path
            d="              M1.5727 32.6958H16.1187C16.6247 32.6958 16.9667 32.3268 16.9667 31.7938C16.9667 30.7688 16.0777 30.0438 14.6977 30.0438H9.1877V25.9558C9.8167 25.6008 10.2267 24.9448 10.2267 24.1108C10.2267 22.9208 9.2697 21.9778 8.0937 21.9778C8.0387 21.9778 7.9977 21.9778 7.9437 21.9778L4.2247 18.2728C4.2517 18.1358 4.2657 17.9858 4.2657 17.8348C4.2657 17.6848 4.2517 17.5478 4.2247 17.4108L10.1587 11.9558C10.2947 13.6108 10.5817 15.1828 11.0607 16.7278C11.5797 18.3818 13.4527 19.0108 14.7657 17.6848L16.8987 15.5518C17.6507 16.0578 18.5387 16.3038 19.4417 16.3038C21.9567 16.3038 24.0217 14.2528 24.0217 11.7508C24.0217 10.8488 23.7617 9.9738 23.2427 9.2078L25.4027 7.0478C26.7147 5.7488 26.0857 3.8758 24.4587 3.3698C21.6697 2.4678 18.7167 2.2218 15.3537 2.4128L14.9297 1.9618C13.6587 0.6358 11.9087 0.3758 10.4177 1.2648L9.4607 0.3078C9.0507 -0.1022 8.4217 -0.1022 8.0117 0.3078C7.6157 0.7038 7.6017 1.3328 8.0117 1.7428L8.9827 2.7138C8.0937 4.2178 8.3537 6.0088 9.6797 7.2258L10.1307 7.6498C10.1037 8.1278 10.0897 8.5928 10.0767 9.0438L2.7477 15.7978C2.5567 15.7298 2.3517 15.7018 2.1327 15.7018C0.9297 15.7018 -0.0003 16.6458 -0.0003 17.8348C-0.0003 19.0378 0.9297 19.9678 2.1327 19.9678C2.3377 19.9678 2.5427 19.9408 2.7347 19.8858L6.1247 23.2628C6.0157 23.5228 5.9607 23.8098 5.9607 24.1108C5.9607 24.9038 6.3577 25.5868 6.9867 25.9428V30.0438H2.9937C1.6137 30.0438 0.7247 30.7688 0.7247 31.7938C0.7247 32.3268 1.0667 32.6958 1.5727 32.6958ZM13.4117 16.3178C13.1937 16.5358 13.0017 16.5088 12.8107 15.8798C12.0587 13.4868 11.8537 10.8078 12.0857 7.5398C12.1137 7.0888 11.9217 6.6518 11.5797 6.3508L10.9787 5.8038C10.2127 5.0928 10.1717 4.0948 10.9787 3.2468C11.8267 2.4408 12.8107 2.4678 13.5347 3.2608L14.0817 3.8618C14.3967 4.2038 14.8617 4.3958 15.3397 4.3548C18.5387 4.1498 21.2327 4.3548 23.6247 5.1198C24.2127 5.3118 24.2407 5.4888 24.0487 5.6808ZM22.0797 11.7508C22.0797 13.1998 20.8767 14.3758 19.4417 14.3758C19.0587 14.3758 18.6757 14.2798 18.3337 14.1158L21.8067 10.6438C21.9847 10.9858 22.0797 11.3548 22.0797 11.7508Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.093333904989 33.65504734773666"
          className={className}
        >
          <path
            d="              M2.4197 20.8174C2.6247 20.8174 2.8167 20.7894 3.0077 20.7484L6.2477 23.9754C6.1527 24.2354 6.0977 24.5224 6.0977 24.8234C6.0977 25.6844 6.5217 26.4224 7.1777 26.8604V30.4554H3.0487C1.6137 30.4554 0.5747 31.2624 0.5747 32.4384C0.5747 33.1354 0.9847 33.6554 1.6407 33.6554H16.9527C17.6227 33.6554 18.0197 33.1354 18.0197 32.4384C18.0197 31.2624 16.9937 30.4554 15.5447 30.4554H9.8577V26.8604C10.5137 26.4504 10.9377 25.7114 10.9377 24.8234C10.9377 23.4834 9.8577 22.4034 8.5177 22.4034H8.4627L4.8127 18.7664C4.8267 18.6574 4.8397 18.5344 4.8397 18.3974C4.8397 18.2744 4.8267 18.1644 4.8127 18.0414L10.4457 12.8604C10.5957 14.3914 10.8827 15.8404 11.3067 17.2214C11.9357 19.2034 14.0957 19.7914 15.5177 18.3704L17.5407 16.3324C18.3617 16.8794 19.2907 17.1534 20.2347 17.1534C22.8867 17.1394 25.1157 14.9384 25.1157 12.2864C25.1157 11.3424 24.8417 10.3994 24.2947 9.5924L26.3047 7.5824C27.7677 6.1204 27.0837 4.0144 25.1697 3.3994C22.4357 2.5244 19.4277 2.2644 16.0237 2.4424L15.6407 2.0454C14.3147 0.6784 12.4957 0.3914 10.9377 1.2394L10.0627 0.3644C9.5707 -0.1286 8.7907 -0.1146 8.2987 0.3644C7.8067 0.8564 7.7927 1.6354 8.2987 2.1414L9.1597 3.0164C8.3127 4.6024 8.5997 6.4754 9.9807 7.7464L10.3767 8.1164C10.3497 8.5264 10.3357 8.9504 10.3357 9.3604L3.0347 16.0594C2.8437 16.0044 2.6387 15.9774 2.4197 15.9774C1.0667 15.9774 -0.0003 17.0574 -0.0003 18.3974C-0.0003 19.7644 1.0527 20.8174 2.4197 20.8174ZM13.9867 16.5374C13.8087 16.7154 13.6307 16.7024 13.4807 16.1964C12.7427 13.8584 12.5507 11.1784 12.7837 7.9524C12.8107 7.4184 12.5917 6.9124 12.1957 6.5574L11.5797 5.9964C10.8827 5.3544 10.8557 4.4384 11.6077 3.6594C12.3867 2.9074 13.2617 2.9204 13.9317 3.6594L14.4787 4.2604C14.8617 4.6704 15.4087 4.8894 15.9547 4.8344C19.1267 4.5754 21.8067 4.8344 24.1307 5.5734C24.6097 5.7234 24.6367 5.8874 24.4587 6.0654ZM22.7367 12.2994C22.7367 13.6664 21.5877 14.7744 20.2477 14.7744C19.9197 14.7744 19.5917 14.7054 19.3047 14.5824L22.5317 11.3564C22.6677 11.6574 22.7367 11.9714 22.7367 12.2994Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.54978055394408 30.33964704865381"
          className={className}
        >
          <path
            d="              M1.6547 30.3396H12.8517C13.1247 30.3396 13.3027 30.1486 13.3027 29.8886C13.3027 29.3826 12.9067 28.9586 12.1677 28.9586H7.2867V23.3536C7.7247 23.1756 8.0257 22.7376 8.0257 22.2046C8.0257 21.5216 7.4647 20.9606 6.7677 20.9606C6.6447 20.9606 6.5217 20.9746 6.4117 21.0156L2.3787 16.9956C2.4607 16.8456 2.5017 16.6536 2.5017 16.4626C2.5017 16.2716 2.4607 16.0936 2.3787 15.9296L9.2017 9.6406C9.2557 11.6366 9.5157 13.5096 10.1177 15.4376C10.4867 16.6126 11.7027 16.9826 12.5097 16.1896L15.0387 13.6596C15.7367 14.2616 16.6387 14.6166 17.6097 14.6166C19.7697 14.6036 21.5197 12.8396 21.5197 10.6936C21.5197 9.7226 21.1637 8.8196 20.5627 8.1226L23.1187 5.5666C23.9257 4.7736 23.5567 3.5426 22.3677 3.1736C19.4687 2.2576 16.6797 2.1346 13.3707 2.3396L12.8517 1.7786C11.7437 0.5626 10.2127 0.3436 8.9137 1.3006L7.7387 0.1386C7.5467 -0.0394 7.2457 -0.0534 7.0547 0.1386C6.8497 0.3166 6.8497 0.6306 7.0547 0.8216L8.2307 2.0116C7.2867 3.2966 7.5057 4.8276 8.7227 5.9216L9.2837 6.4416C9.2427 7.0696 9.2147 7.6716 9.2017 8.2596L1.6137 15.2736C1.5037 15.2326 1.3807 15.2186 1.2437 15.2186C0.5607 15.2186 -0.0003 15.7656 -0.0003 16.4626C-0.0003 17.1736 0.5467 17.7066 1.2437 17.7066C1.3807 17.7066 1.5037 17.6936 1.6137 17.6656L5.6467 21.6716C5.5647 21.8356 5.5237 22.0136 5.5237 22.2046C5.5237 22.7376 5.8247 23.1616 6.2617 23.3536V28.9586H2.3377C1.5997 28.9586 1.2027 29.3826 1.2027 29.8886C1.2027 30.1486 1.3807 30.3396 1.6547 30.3396ZM11.8397 15.5056C11.5527 15.7926 11.1837 15.6836 10.9927 15.0686C10.1177 12.3336 10.0487 9.6406 10.2537 6.4416C10.2677 6.1536 10.1717 5.9486 9.9807 5.7846L9.3657 5.2246C8.4357 4.3766 8.2847 3.2696 9.2287 2.2846C10.1997 1.3416 11.3067 1.4916 12.1677 2.4216L12.7147 3.0366C12.8927 3.2286 13.1117 3.3236 13.3987 3.3236C16.5837 3.1056 19.2777 3.1876 22.0117 4.0626C22.6267 4.2536 22.7227 4.6226 22.4497 4.8966ZM20.5627 10.6936C20.5627 12.3196 19.2367 13.6466 17.6097 13.6596C16.8847 13.6596 16.2287 13.3866 15.7367 12.9626L19.8787 8.8196C20.3027 9.3126 20.5627 9.9826 20.5627 10.6936Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.803093380354042 29.66483387774176"
          className={className}
        >
          <path
            d="              M1.6817 29.6646H11.8947C12.0997 29.6646 12.2367 29.5286 12.2367 29.3366C12.2367 28.9816 11.9767 28.6396 11.4157 28.6396H6.7267V22.5966C7.1097 22.4596 7.3827 22.1046 7.3827 21.6536C7.3827 21.1196 6.9317 20.6686 6.3847 20.6686C6.2477 20.6686 6.1117 20.6956 5.9887 20.7506L1.8317 16.6216C1.9277 16.4576 1.9827 16.2796 1.9827 16.0746C1.9827 15.8696 1.9277 15.6926 1.8187 15.5286L8.9417 8.9516C8.9547 11.0576 9.1877 13.0126 9.8437 15.0636C10.1717 16.1156 11.1977 16.4036 11.8537 15.7466L14.4927 13.1086C15.1757 13.7506 16.0777 14.1196 17.0767 14.1196C19.1267 14.1066 20.7947 12.4386 20.7947 10.3876C20.7947 9.3896 20.4117 8.4866 19.7837 7.8176L22.4627 5.1376C23.1057 4.4946 22.8187 3.4556 21.7657 3.1276C18.8267 2.2116 16.0777 2.1296 12.7967 2.3346L12.2497 1.7336C11.1837 0.5436 9.7207 0.3386 8.4907 1.3366L7.2327 0.0926C7.0957 -0.0164 6.9047 -0.0444 6.7677 0.0926C6.6307 0.2156 6.6307 0.4346 6.7677 0.5706L8.0117 1.8156C7.0407 3.0456 7.2597 4.4816 8.4357 5.5476L9.0367 6.0946C8.9957 6.7646 8.9687 7.4066 8.9547 8.0496L1.2847 15.1316C1.1897 15.0906 1.0937 15.0766 0.9847 15.0766C0.4517 15.0766 -0.0003 15.5286 -0.0003 16.0746C-0.0003 16.6356 0.4237 17.0596 0.9847 17.0596C1.0937 17.0596 1.2027 17.0456 1.2847 17.0186L5.5097 21.2156C5.4417 21.3526 5.4007 21.5026 5.4007 21.6536C5.4007 22.1046 5.6597 22.4596 6.0567 22.5966V28.6396H2.1467C1.5857 28.6396 1.3397 28.9816 1.3397 29.3366C1.3397 29.5286 1.4767 29.6646 1.6817 29.6646ZM11.3747 15.2816C11.0747 15.5826 10.6507 15.4596 10.4587 14.8446C9.5567 12.0146 9.5157 9.3076 9.7347 6.1356C9.7347 5.8896 9.6657 5.7526 9.5017 5.6156L8.9007 5.0556C7.9157 4.1666 7.7387 3.0316 8.7227 2.0206C9.7347 1.0356 10.8687 1.2136 11.7577 2.1976L12.3187 2.7996C12.4547 2.9636 12.5917 3.0186 12.8377 3.0316C16.0097 2.8136 18.7167 2.8546 21.5467 3.7566C22.1617 3.9476 22.2847 4.3716 21.9847 4.6726ZM20.1247 10.3876C20.1247 12.0696 18.7577 13.4366 17.0767 13.4496C16.2557 13.4496 15.5177 13.1356 14.9707 12.6296L19.3047 8.2956C19.8107 8.8426 20.1247 9.5806 20.1247 10.3876Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
