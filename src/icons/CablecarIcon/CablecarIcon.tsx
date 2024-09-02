import { IconProps } from "../../types"

export default function CablecarIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.55078125 38.896484375"
          className={className}
        >
          <path
            d="              M-0.0003 30.4742C-0.0003 31.7052 1.0117 32.7172 2.2427 32.7172H6.9047L4.3477 36.8322C3.8277 37.6522 4.1697 38.8962 5.3727 38.8962H6.6177C7.2737 38.8962 7.6697 38.6502 8.0257 38.1032L11.3747 32.7172H22.1757L25.5257 38.1032C25.8807 38.6502 26.2907 38.8962 26.9477 38.8962H27.8637C29.0667 38.8962 29.7227 37.6522 29.0667 36.5992L26.6467 32.7172H31.3227C32.5527 32.7172 33.5507 31.7052 33.5507 30.4742C33.5507 29.3122 32.6487 28.3422 31.4997 28.2462V9.3792C31.4997 7.0822 30.0917 5.6052 27.6177 5.3042C26.8787 5.2092 26.0727 5.1402 25.2247 5.0722V3.9102C26.0997 3.9512 26.9067 3.1312 26.9067 2.1462C26.9067 1.2172 26.1137 0.4782 25.0467 0.3692C22.9827 0.1232 20.0297 0.0002 16.7757 0.0002C13.6587 0.0002 10.5817 0.1362 8.3677 0.3832C7.3417 0.5192 6.6447 1.2302 6.6447 2.1462C6.6447 3.1442 7.4517 3.9652 8.3397 3.9102V5.0722C7.4647 5.1402 6.6447 5.2092 5.9067 5.3042C3.4587 5.6052 2.0507 7.0822 2.0507 9.3792V28.2462C0.9027 28.3422 -0.0003 29.3122 -0.0003 30.4742ZM16.7757 4.7712C14.9157 4.7712 13.0567 4.8122 11.2927 4.8812V3.6502C12.8787 3.5682 14.7247 3.5132 16.7757 3.5132C18.8127 3.5132 20.6587 3.5682 22.2577 3.6642V4.8942C20.4937 4.8122 18.6207 4.7712 16.7757 4.7712ZM5.9337 10.0492C5.9337 9.4742 6.1657 9.2012 6.6997 9.1462C8.9007 8.8322 12.4687 8.6812 16.7757 8.6812C21.0277 8.6812 24.5957 8.8322 26.8377 9.1462C27.4397 9.2012 27.5897 9.3922 27.5897 10.0492V28.2462H5.9337ZM13.9177 19.8382C13.9177 20.3032 14.2327 20.6172 14.7247 20.6172H18.7987C19.2777 20.6172 19.6057 20.3032 19.6057 19.8382V13.0562C19.6057 11.3612 18.4567 10.2132 16.7757 10.2132C15.0667 10.2132 13.9177 11.3612 13.9177 13.0562ZM7.2457 19.8382C7.2457 20.3032 7.5877 20.6172 8.0527 20.6172H12.1137C12.5917 20.6172 12.9197 20.3032 12.9197 19.8382V13.5492C12.9197 11.8812 11.7717 10.7322 10.1037 10.7322C8.3947 10.7322 7.2457 11.8812 7.2457 13.5492ZM20.6037 19.8382C20.6037 20.3032 20.9317 20.6172 21.4097 20.6172H25.4707C25.9357 20.6172 26.2777 20.3032 26.2777 19.8382V13.5492C26.2777 11.8812 25.1287 10.7322 23.4337 10.7322C21.7517 10.7322 20.6037 11.8532 20.6037 13.5492ZM16.7757 26.9332C18.1427 26.9332 19.2087 25.8942 19.2087 24.5132C19.2087 23.1332 18.1427 22.0252 16.7757 22.0252C15.3807 22.0252 14.3277 23.1052 14.3277 24.5132C14.3277 25.8942 15.3677 26.9332 16.7757 26.9332Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.0078125 36.12109375"
          className={className}
        >
          <path
            d="              M-0.0003 28.711C-0.0003 29.627 0.7517 30.379 1.6677 30.379H6.6997L4.1427 34.494C3.7047 35.191 4.0337 36.121 4.9627 36.121H5.9607C6.4807 36.121 6.7947 35.943 7.0687 35.492L10.2407 30.379H20.5077L23.6937 35.492C23.9667 35.943 24.2817 36.121 24.8007 36.121H25.6347C26.5647 36.121 27.0567 35.191 26.5507 34.385L24.0627 30.379H29.3397C30.2557 30.379 31.0077 29.627 31.0077 28.711C31.0077 27.795 30.2557 27.043 29.3397 27.043H29.1897V8.34C29.1897 6.357 27.9997 5.127 25.8537 4.867C25.0877 4.771 24.2537 4.689 23.3517 4.621V3.254C23.4067 3.268 23.4477 3.268 23.4887 3.268C24.2677 3.377 24.9647 2.652 24.9647 1.832C24.9647 1.066 24.3227 0.465 23.4747 0.369C21.4097 0.123 18.4977 0 15.4907 0C12.5647 0 9.5977 0.137 7.4517 0.383C6.6177 0.492 6.0157 1.066 6.0157 1.832C6.0157 2.652 6.7267 3.377 7.5057 3.268C7.5467 3.268 7.6017 3.254 7.6567 3.254V4.621C6.7407 4.689 5.8927 4.771 5.1267 4.867C2.9937 5.127 1.8187 6.357 1.8187 8.34V27.043H1.6677C0.7517 27.043 -0.0003 27.795 -0.0003 28.711ZM15.4907 4.348C13.6587 4.348 11.7847 4.389 10.0217 4.471V3.049C11.6487 2.953 13.5217 2.898 15.4907 2.898C17.4727 2.898 19.3597 2.953 20.9867 3.049V4.471C19.2227 4.389 17.3357 4.348 15.4907 4.348ZM4.6347 8.941C4.6347 8.162 4.9907 7.752 5.7557 7.656C7.9977 7.342 11.5257 7.205 15.4907 7.205C19.4417 7.205 22.9687 7.342 25.2247 7.656C26.0447 7.752 26.3457 8.08 26.3457 8.941V27.043H4.6347ZM12.6327 18.525C12.6327 18.963 12.9337 19.264 13.3847 19.264H17.5817C18.0467 19.264 18.3477 18.963 18.3477 18.525V11.635C18.3477 9.926 17.1997 8.777 15.4907 8.777C13.7817 8.777 12.6327 9.926 12.6327 11.635ZM6.0157 18.525C6.0157 18.963 6.3297 19.264 6.7817 19.264H10.6507C11.1017 19.264 11.4027 18.963 11.4027 18.525V12.031C11.4027 10.486 10.2817 9.352 8.7227 9.352C7.1507 9.352 6.0157 10.486 6.0157 12.031ZM19.5647 18.525C19.5647 18.963 19.8657 19.264 20.3297 19.264H24.1997C24.6507 19.264 24.9517 18.963 24.9517 18.525V12.031C24.9517 10.486 23.8167 9.352 22.2717 9.352C20.6997 9.352 19.5647 10.473 19.5647 12.031ZM15.4907 25.607C16.8027 25.607 17.8277 24.623 17.8277 23.324C17.8277 21.984 16.8027 20.945 15.4907 20.945C14.1637 20.945 13.1657 21.971 13.1657 23.324C13.1657 24.623 14.1507 25.607 15.4907 25.607Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.34765625 37.583984375"
          className={className}
        >
          <path
            d="              M-0.0003 29.6406C-0.0003 30.7206 0.8887 31.6096 1.9687 31.6096H6.8087L4.2517 35.7246C3.7737 36.4906 4.1017 37.5836 5.1817 37.5836H6.3027C6.9047 37.5836 7.2597 37.3786 7.5747 36.8726L10.8417 31.6096H21.3967L24.6637 36.8726C24.9787 37.3786 25.3337 37.5836 25.9357 37.5836H26.8107C27.8907 37.5836 28.4647 36.4906 27.8767 35.5606L25.4297 31.6096H30.3787C31.4587 31.6096 32.3477 30.7206 32.3477 29.6406C32.3477 28.5746 31.4867 27.6996 30.4197 27.6856V8.8866C30.4197 6.7406 29.1077 5.3866 26.7837 5.0996C26.0447 5.0036 25.2107 4.9216 24.3357 4.8536V3.6096C25.1977 3.7186 25.9907 2.9256 25.9907 1.9956C25.9907 1.1486 25.2657 0.4646 24.3087 0.3696C22.2437 0.1226 19.3047 -0.0004 16.1737 -0.0004C13.1387 -0.0004 10.1177 0.1366 7.9297 0.3826C6.9997 0.5056 6.3437 1.1616 6.3437 1.9956C6.3437 2.9256 7.1367 3.7186 7.9977 3.6096L8.0117 3.5956V4.8536C7.1227 4.9216 6.2887 5.0036 5.5367 5.0996C3.2407 5.3866 1.9417 6.7406 1.9417 8.8866V27.6856C0.8887 27.6856 -0.0003 28.5746 -0.0003 29.6406ZM16.1737 4.5666C14.3277 4.5666 12.4547 4.6076 10.6917 4.6896V3.3636C12.3047 3.2676 14.1507 3.2266 16.1737 3.2266C18.1837 3.2266 20.0427 3.2676 21.6567 3.3766V4.6896C19.8927 4.6076 18.0197 4.5666 16.1737 4.5666ZM5.3187 9.5296C5.3187 8.8596 5.6057 8.5176 6.2617 8.4496C8.4767 8.1346 12.0177 7.9846 16.1737 7.9846C20.2757 7.9846 23.8297 8.1346 26.0727 8.4496C26.7837 8.5176 27.0017 8.7776 27.0017 9.5296V27.6856H5.3187ZM13.3027 19.2226C13.3027 19.6736 13.6177 19.9746 14.0957 19.9746H18.2247C18.7027 19.9746 19.0177 19.6736 19.0177 19.2226V12.3866C19.0177 10.6916 17.8687 9.5426 16.1737 9.5426C14.4517 9.5426 13.3027 10.6916 13.3027 12.3866ZM6.6717 19.2226C6.6717 19.6736 6.9997 19.9746 7.4517 19.9746H11.4157C11.8947 19.9746 12.2087 19.6736 12.2087 19.2226V12.8376C12.2087 11.2246 11.0607 10.0766 9.4477 10.0766C7.8067 10.0766 6.6717 11.2246 6.6717 12.8376ZM20.1117 19.2226C20.1117 19.6736 20.4257 19.9746 20.9047 19.9746H24.8687C25.3207 19.9746 25.6487 19.6736 25.6487 19.2226V12.8376C25.6487 11.2246 24.5137 10.0766 22.8867 10.0766C21.2597 10.0766 20.1117 11.2106 20.1117 12.8376ZM16.1737 26.3046C17.5137 26.3046 18.5667 25.2926 18.5667 23.9526C18.5667 22.5996 17.5137 21.5196 16.1737 21.5196C14.8067 21.5196 13.7817 22.5726 13.7817 23.9526C13.7817 25.2926 14.7927 26.3046 16.1737 26.3046Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.34375 32.484375"
          className={className}
        >
          <path
            d="              M-0.0003 26.4823C-0.0003 26.9473 0.3827 27.3303 0.8477 27.3303H5.8657L3.2677 31.5003C2.9667 31.9783 3.2267 32.4843 3.7737 32.4843H4.4437C4.7847 32.4843 4.9627 32.3753 5.1267 32.0883L8.0937 27.3303H18.1697L21.1227 32.0883C21.3007 32.3753 21.4787 32.4843 21.8207 32.4843H22.4907C23.0367 32.4843 23.2837 31.9783 22.9827 31.5003L20.3987 27.3303H26.4957C26.9607 27.3303 27.3437 26.9473 27.3437 26.4823C27.3437 26.0173 26.9607 25.6343 26.4957 25.6343H26.0037V6.8083C26.0037 5.2503 25.1017 4.3343 23.3787 4.1293C22.5447 4.0193 21.6157 3.9373 20.6177 3.8553V2.1603C20.8087 2.1743 20.9997 2.2013 21.1777 2.2283C21.7247 2.2973 22.1487 1.8183 22.1487 1.3263C22.1487 0.8343 21.7657 0.4513 21.1917 0.3693C19.1407 0.1093 16.3107 0.0003 13.6587 0.0003C11.0197 0.0003 8.1897 0.1093 6.1387 0.3693C5.5647 0.4513 5.1817 0.8343 5.1817 1.3263C5.1817 1.8183 5.6057 2.2973 6.1527 2.2283C6.3437 2.2013 6.5347 2.1743 6.7407 2.1603V3.8553C5.7287 3.9243 4.7847 4.0193 3.9377 4.1293C2.2287 4.3343 1.3397 5.2503 1.3397 6.8083V25.6343H0.8477C0.3827 25.6343 -0.0003 26.0173 -0.0003 26.4823ZM13.6587 3.6233C11.8397 3.6233 9.9397 3.6773 8.1487 3.7733V2.0373C9.8167 1.9143 11.7437 1.8593 13.6587 1.8593C15.5857 1.8593 17.5277 1.9143 19.1957 2.0373V3.7733C17.4047 3.6773 15.4907 3.6233 13.6587 3.6233ZM2.7207 7.2593C2.7207 6.1793 3.2127 5.6603 4.3337 5.4963C6.6177 5.1683 10.0897 5.0453 13.6587 5.0453C17.2407 5.0453 20.6997 5.1683 22.9957 5.4963C24.1447 5.6463 24.5957 6.1253 24.5957 7.2593V25.6343H2.7207ZM10.7047 16.7753C10.7047 17.2263 10.9787 17.5003 11.4567 17.5003H15.8597C16.3517 17.5003 16.6117 17.2263 16.6117 16.7753V9.8433C16.6117 8.0663 15.4357 6.8903 13.6587 6.8903C11.8947 6.8903 10.7047 8.0663 10.7047 9.8433ZM4.2797 16.7753C4.2797 17.2263 4.5387 17.5003 5.0317 17.5003H8.6547C9.1467 17.5003 9.4067 17.2263 9.4067 16.7753V10.1033C9.4067 8.6273 8.3127 7.5333 6.8497 7.5333C5.3597 7.5333 4.2797 8.6273 4.2797 10.1033ZM17.9097 16.7753C17.9097 17.2263 18.1837 17.5003 18.6617 17.5003H22.2847C22.7777 17.5003 23.0507 17.2263 23.0507 16.7753V10.1033C23.0507 8.6273 21.9567 7.5333 20.4807 7.5333C19.0037 7.5333 17.9097 8.6273 17.9097 10.1033ZM13.6587 23.8713C14.8747 23.8713 15.8187 22.9683 15.8187 21.7793C15.8187 20.5493 14.8617 19.5923 13.6587 19.5923C12.4277 19.5923 11.5257 20.5353 11.5257 21.7793C11.5257 22.9823 12.4277 23.8713 13.6587 23.8713Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.380859375 34.34375"
          className={className}
        >
          <path
            d="              M-0.0003 27.5903C-0.0003 28.3003 0.5877 28.8883 1.2987 28.8883H6.5767L4.0057 33.0043C3.6227 33.6193 3.9517 34.3433 4.6897 34.3433H5.5507C5.9747 34.3433 6.2207 34.1933 6.4527 33.8243L9.5157 28.8883H19.4547L22.5177 33.8243C22.7497 34.1933 22.9957 34.3433 23.4197 34.3433H24.2127C24.9517 34.3433 25.3477 33.6193 24.9377 32.9633L22.3947 28.8883H28.0687C28.7797 28.8883 29.3807 28.3003 29.3807 27.5903C29.3807 26.8653 28.7797 26.2773 28.0687 26.2773H27.7127V7.6703C27.7127 5.8923 26.6597 4.8123 24.7327 4.5933C23.9527 4.4843 23.0917 4.4023 22.1617 4.3343V2.8303C22.2717 2.8433 22.3677 2.8573 22.4627 2.8713C23.1467 2.9533 23.7347 2.3243 23.7347 1.6273C23.7347 0.9573 23.1877 0.4513 22.4627 0.3693C20.3987 0.1233 17.5277 0.0003 14.6837 0.0003C11.8677 0.0003 8.9687 0.1233 6.8767 0.3693C6.1657 0.4653 5.6187 0.9573 5.6187 1.6273C5.6187 2.3243 6.2067 2.9533 6.9047 2.8713C6.9997 2.8573 7.1097 2.8433 7.2187 2.8303V4.3343C6.2757 4.4023 5.4007 4.4843 4.6207 4.5933C2.6937 4.8123 1.6547 5.8923 1.6547 7.6703V26.2773H1.2987C0.5877 26.2773 -0.0003 26.8653 -0.0003 27.5903ZM14.6837 4.0743C12.8517 4.0743 10.9647 4.1153 9.2147 4.2113V2.6523C10.8557 2.5433 12.7557 2.5023 14.6837 2.5023C16.6117 2.5023 18.5117 2.5433 20.1657 2.6523V4.2113C18.4027 4.1153 16.5157 4.0743 14.6837 4.0743ZM3.8007 8.2303C3.8007 7.3283 4.2387 6.8223 5.1547 6.6993C7.4097 6.3843 10.9097 6.2483 14.6837 6.2483C18.4297 6.2483 21.9297 6.3843 24.1997 6.6993C25.1567 6.8083 25.5527 7.2463 25.5527 8.2303V26.2773H3.8007ZM11.8127 17.6773C11.8127 18.1153 12.0857 18.3883 12.5367 18.3883H16.8027C17.2537 18.3883 17.5407 18.1153 17.5407 17.6773V10.7323C17.5407 9.0093 16.3927 7.8613 14.6837 7.8613C12.9477 7.8613 11.8127 9.0093 11.8127 10.7323ZM5.2367 17.6773C5.2367 18.1153 5.5237 18.3883 5.9607 18.3883H9.7067C10.1587 18.3883 10.4457 18.1153 10.4457 17.6773V11.0603C10.4457 9.5973 9.3247 8.4763 7.8477 8.4763C6.3577 8.4763 5.2367 9.5973 5.2367 11.0603ZM18.9087 17.6773C18.9087 18.1153 19.1957 18.3883 19.6327 18.3883H23.3787C23.8297 18.3883 24.1177 18.1153 24.1177 17.6773V11.0603C24.1177 9.5973 22.9827 8.4763 21.5197 8.4763C20.0297 8.4763 18.9087 9.5843 18.9087 11.0603ZM14.6837 24.7733C15.9417 24.7733 16.9397 23.8163 16.9397 22.5583C16.9397 21.2593 15.9417 20.2483 14.6837 20.2483C13.3847 20.2483 12.4277 21.2463 12.4277 22.5583C12.4277 23.8163 13.3847 24.7733 14.6837 24.7733Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.451171875 33.345703125"
          className={className}
        >
          <path
            d="              M-0.0003 26.9468C-0.0003 27.5488 0.4927 28.0548 1.0937 28.0548H6.4937L3.9377 32.1558C3.5817 32.7308 3.9097 33.3458 4.5527 33.3458H5.3187C5.6877 33.3458 5.9067 33.2228 6.1117 32.8948L9.1057 28.0548H18.8537L21.8477 32.8948C22.0527 33.2228 22.2717 33.3458 22.6547 33.3458H23.4197C24.0487 33.3458 24.3767 32.7308 24.0217 32.1558L21.4647 28.0548H27.3577C27.9587 28.0548 28.4517 27.5488 28.4517 26.9468C28.4517 26.3458 27.9587 25.8538 27.3577 25.8538H26.8787V7.3008C26.8787 5.6328 25.9087 4.6488 24.0897 4.4298C23.3107 4.3338 22.4357 4.2518 21.4927 4.1838V2.5978C21.6287 2.6118 21.7517 2.6248 21.8887 2.6388C22.5177 2.7208 23.0367 2.1328 23.0367 1.5178C23.0367 0.9028 22.5447 0.4508 21.8887 0.3688C19.8247 0.1228 16.9807 -0.0002 14.2187 -0.0002C11.4707 -0.0002 8.6267 0.1228 6.5487 0.3688C5.9067 0.4508 5.4007 0.9028 5.4007 1.5178C5.4007 2.1328 5.9197 2.7208 6.5627 2.6388C6.6857 2.6248 6.8227 2.6118 6.9587 2.5978V4.1698C6.0157 4.2518 5.1267 4.3338 4.3337 4.4298C2.5297 4.6488 1.5727 5.6328 1.5727 7.3008V25.8538H1.0937C0.4927 25.8538 -0.0003 26.3458 -0.0003 26.9468ZM14.2187 3.9238C12.3867 3.9238 10.5137 3.9788 8.7497 4.0608V2.4338C10.4177 2.3238 12.3187 2.2828 14.2187 2.2828C16.1187 2.2828 18.0337 2.3238 19.7017 2.4468V4.0608C17.9377 3.9788 16.0507 3.9238 14.2187 3.9238ZM3.3357 7.8338C3.3357 6.8498 3.8147 6.3028 4.8267 6.1658C7.0817 5.8518 10.5687 5.7148 14.2187 5.7148C17.8557 5.7148 21.3417 5.8518 23.6247 6.1658C24.6507 6.2888 25.1017 6.7678 25.1017 7.8338V25.8538H3.3357ZM11.3477 17.2128C11.3477 17.6228 11.6207 17.8968 12.0587 17.8968H16.3657C16.8167 17.8968 17.0897 17.6228 17.0897 17.2128V10.2128C17.0897 8.5038 15.9417 7.3558 14.2187 7.3558C12.4957 7.3558 11.3477 8.5038 11.3477 10.2128ZM4.7987 17.2128C4.7987 17.6228 5.0727 17.8968 5.5097 17.8968H9.1877C9.6247 17.8968 9.8987 17.6228 9.8987 17.2128V10.5278C9.8987 9.0918 8.7777 7.9848 7.3557 7.9848C5.9067 7.9848 4.7987 9.0918 4.7987 10.5278ZM18.5257 17.2128C18.5257 17.6228 18.8127 17.8968 19.2497 17.8968H22.9277C23.3657 17.8968 23.6387 17.6228 23.6387 17.2128V10.5278C23.6387 9.0918 22.5177 7.9848 21.0957 7.9848C19.6467 7.9848 18.5257 9.0918 18.5257 10.5278ZM14.2187 24.2948C15.4627 24.2948 16.4477 23.3648 16.4477 22.1208C16.4477 20.8498 15.4627 19.8648 14.2187 19.8648C12.9477 19.8648 12.0177 20.8498 12.0177 22.1208C12.0177 23.3648 12.9477 24.2948 14.2187 24.2948Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.078125 35.095703125"
          className={className}
        >
          <path
            d="              M-0.0003 28.0688C-0.0003 28.8618 0.6567 29.5308 1.4627 29.5308H6.6307L4.0607 33.6468C3.6637 34.2888 3.9927 35.0958 4.8127 35.0958H5.7287C6.1937 35.0958 6.4667 34.9458 6.7267 34.5348L9.8297 29.5308H19.9067L23.0237 34.5348C23.2697 34.9458 23.5427 35.0958 24.0217 35.0958H24.8277C25.6487 35.0958 26.0857 34.2888 25.6207 33.5648L23.1187 29.5308H28.6157C29.4217 29.5308 30.0777 28.8618 30.0777 28.0688C30.0777 27.2618 29.4217 26.6058 28.6157 26.6058H28.3557V7.9568C28.3557 6.0978 27.2477 4.9488 25.2107 4.7028C24.4457 4.6078 23.5837 4.5258 22.6817 4.4568V3.0078C22.7497 3.0218 22.8317 3.0348 22.9007 3.0348C23.6387 3.1308 24.2677 2.4608 24.2677 1.7088C24.2677 0.9978 23.6797 0.4508 22.9007 0.3688C20.8227 0.1228 17.9517 -0.0002 15.0257 -0.0002C12.1677 -0.0002 9.2427 0.1228 7.1227 0.3688C6.3577 0.4648 5.7967 0.9978 5.7967 1.7088C5.7967 2.4608 6.4257 3.1308 7.1637 3.0348C7.2327 3.0218 7.3147 3.0218 7.3967 3.0078V4.4568C6.4807 4.5258 5.6187 4.6078 4.8397 4.7028C2.8297 4.9488 1.7227 6.0978 1.7227 7.9568V26.6058H1.4627C0.6567 26.6058 -0.0003 27.2618 -0.0003 28.0688ZM15.0257 4.1838C13.1937 4.1838 11.3207 4.2378 9.5707 4.3208V2.8168C11.1977 2.7208 13.0837 2.6658 15.0257 2.6658C16.9807 2.6658 18.8807 2.7208 20.5217 2.8168V4.3208C18.7577 4.2378 16.8707 4.1838 15.0257 4.1838ZM4.1567 8.5308C4.1567 7.6838 4.5667 7.2188 5.4137 7.1098C7.6697 6.7948 11.1697 6.6578 15.0257 6.6578C18.8677 6.6578 22.3807 6.7948 24.6507 7.1098C25.5387 7.2048 25.8947 7.6018 25.8947 8.5308V26.6058H4.1567ZM12.1547 18.0468C12.1547 18.4708 12.4547 18.7578 12.9067 18.7578H17.1447C17.5957 18.7578 17.8827 18.4708 17.8827 18.0468V11.1148C17.8827 9.4058 16.7347 8.2578 15.0257 8.2578C13.3027 8.2578 12.1547 9.4058 12.1547 11.1148ZM5.5777 18.0468C5.5777 18.4708 5.8657 18.7578 6.3167 18.7578H10.1177C10.5687 18.7578 10.8557 18.4708 10.8557 18.0468V11.4848C10.8557 9.9808 9.7347 8.8458 8.2307 8.8458C6.6997 8.8458 5.5777 9.9808 5.5777 11.4848ZM19.1957 18.0468C19.1957 18.4708 19.4827 18.7578 19.9337 18.7578H23.7347C24.1717 18.7578 24.4727 18.4708 24.4727 18.0468V11.4848C24.4727 9.9808 23.3517 8.8458 21.8337 8.8458C20.3167 8.8458 19.1957 9.9668 19.1957 11.4848ZM15.0257 25.1288C16.3107 25.1288 17.3227 24.1578 17.3227 22.8868C17.3227 21.5738 16.3107 20.5488 15.0257 20.5488C13.7267 20.5488 12.7427 21.5608 12.7427 22.8868C12.7427 24.1578 13.7127 25.1288 15.0257 25.1288Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.853515625 31.3359375"
          className={className}
        >
          <path
            d="              M-0.0003 25.8811C-0.0003 26.1541 0.2327 26.3871 0.5057 26.3871H5.0317L2.3927 30.6251C2.1597 30.9801 2.3247 31.3361 2.7347 31.3361H3.2947C3.5687 31.3361 3.6917 31.2541 3.8417 31.0351L6.7407 26.3871H17.2677L20.1657 31.0351C20.3027 31.2541 20.4397 31.3361 20.7127 31.3361H21.2737C21.6837 31.3361 21.8477 30.9801 21.6157 30.6251L18.9767 26.3871H25.3477C25.6347 26.3871 25.8537 26.1541 25.8537 25.8811C25.8537 25.5941 25.6347 25.3611 25.3477 25.3611H24.8277V6.1661C24.8277 4.7301 24.0347 3.9371 22.4357 3.7321C21.5467 3.6091 20.5347 3.5141 19.4417 3.4451V1.5861C19.7287 1.6131 19.9887 1.6411 20.2477 1.6821C20.6717 1.7361 20.9727 1.4081 20.9727 1.0661C20.9727 0.7381 20.7407 0.4371 20.2757 0.3831C18.2247 0.1091 15.4217 0.0001 12.9337 0.0001C10.4317 0.0001 7.6287 0.1091 5.5777 0.3831C5.1137 0.4371 4.8807 0.7381 4.8807 1.0661C4.8807 1.4081 5.1817 1.7361 5.6057 1.6821C5.8657 1.6411 6.1387 1.6131 6.4257 1.5861V3.4451C5.3317 3.5141 4.3207 3.6091 3.4177 3.7321C1.8317 3.9371 1.0387 4.7301 1.0387 6.1661V25.3611H0.5057C0.2327 25.3611 -0.0003 25.5941 -0.0003 25.8811ZM12.9337 3.2261C11.1157 3.2261 9.1597 3.2811 7.3557 3.3771V1.5041C9.0097 1.3671 10.9787 1.3121 12.9337 1.3121C14.8887 1.3121 16.8707 1.3671 18.5257 1.5041V3.3771C16.7067 3.2811 14.7517 3.2261 12.9337 3.2261ZM1.9277 6.4941C1.9277 5.2911 2.4067 4.8121 3.6917 4.6211C6.0017 4.2791 9.4337 4.1561 12.9337 4.1561C16.4197 4.1561 19.8517 4.2791 22.1617 4.6211C23.4607 4.8121 23.9257 5.2771 23.9257 6.4941V25.3611H1.9277ZM9.8577 16.2151C9.8577 16.6931 10.1177 16.9801 10.6637 16.9801H15.1897C15.7367 16.9801 15.9957 16.6931 15.9957 16.2151V9.3511C15.9957 7.5061 14.7657 6.2751 12.9337 6.2751C11.0877 6.2751 9.8577 7.5061 9.8577 9.3511ZM3.5817 16.2151C3.5817 16.6931 3.8557 16.9801 4.4027 16.9801H7.9567C8.5037 16.9801 8.7637 16.6931 8.7637 16.2151V9.5291C8.7637 8.0121 7.7107 6.9451 6.1797 6.9451C4.6487 6.9451 3.5817 8.0121 3.5817 9.5291ZM17.0897 16.2151C17.0897 16.6931 17.3497 16.9801 17.8967 16.9801H21.4517C21.9977 16.9801 22.2717 16.6931 22.2717 16.2151V9.5291C22.2717 8.0121 21.2047 6.9451 19.6737 6.9451C18.1427 6.9451 17.0897 8.0121 17.0897 9.5291ZM12.9337 23.3241C14.0817 23.3241 14.9847 22.4631 14.9847 21.3141C14.9847 20.1391 14.0687 19.2361 12.9337 19.2361C11.7437 19.2361 10.8967 20.1251 10.8967 21.3141C10.8967 22.4761 11.7307 23.3241 12.9337 23.3241Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.1015625 30.748046875"
          className={className}
        >
          <path
            d="              M-0.0003 25.5523C-0.0003 25.7443 0.1507 25.8943 0.3277 25.8943H4.5937L1.9417 30.1743C1.7497 30.4613 1.8597 30.7483 2.2147 30.7483H2.7067C2.9527 30.7483 3.0487 30.6793 3.1717 30.4883L6.0427 25.8943H16.8167L19.6737 30.4883C19.7967 30.6793 19.9067 30.7483 20.1387 30.7483H20.6447C20.9867 30.7483 21.1097 30.4613 20.9177 30.1743L18.2517 25.8943H24.7737C24.9517 25.8943 25.1017 25.7443 25.1017 25.5523C25.1017 25.3753 24.9517 25.2243 24.7737 25.2243H24.2267V5.8383C24.2267 4.4573 23.4747 3.7323 21.9437 3.5273C21.0277 3.4043 19.9747 3.2953 18.8537 3.2263V1.2853C19.1817 1.3123 19.4827 1.3533 19.7697 1.3943C20.1247 1.4353 20.3707 1.1893 20.3707 0.9293C20.3707 0.6973 20.2207 0.4373 19.7967 0.3833C17.7597 0.0953 14.9707 0.0003 12.5507 0.0003C10.1307 0.0003 7.3417 0.0953 5.3047 0.3833C4.8807 0.4373 4.7307 0.6973 4.7307 0.9293C4.7307 1.1893 4.9767 1.4353 5.3317 1.3943C5.6187 1.3533 5.9337 1.3123 6.2757 1.2853V3.2263C5.1407 3.2953 4.0747 3.4043 3.1587 3.5273C1.6267 3.7323 0.8747 4.4573 0.8747 5.8383V25.2243H0.3277C0.1507 25.2243 -0.0003 25.3753 -0.0003 25.5523ZM12.5507 3.0213C10.7327 3.0213 8.7777 3.0623 6.9457 3.1723V1.2173C8.5857 1.0933 10.5957 1.0253 12.5507 1.0253C14.5197 1.0253 16.5297 1.0933 18.1697 1.2173V3.1723C16.3377 3.0623 14.3687 3.0213 12.5507 3.0213ZM1.5177 6.0973C1.5177 4.8263 1.9957 4.3753 3.3637 4.1703C5.6737 3.8143 9.1057 3.6913 12.5507 3.6913C16.0097 3.6913 19.4277 3.8143 21.7387 4.1703C23.1057 4.3753 23.5837 4.8263 23.5837 6.0973V25.2243H1.5177ZM9.4197 15.9273C9.4197 16.4203 9.6797 16.7073 10.2677 16.7073H14.8337C15.4217 16.7073 15.6817 16.4203 15.6817 15.9273V9.0923C15.6817 7.2183 14.4237 5.9613 12.5507 5.9613C10.6777 5.9613 9.4197 7.2183 9.4197 9.0923ZM3.2407 15.9273C3.2407 16.4203 3.4997 16.7073 4.0747 16.7073H7.6017C8.1757 16.7073 8.4357 16.4203 8.4357 15.9273V9.2423C8.4357 7.6833 7.3967 6.6443 5.8377 6.6443C4.2797 6.6443 3.2407 7.6833 3.2407 9.2423ZM16.6657 15.9273C16.6657 16.4203 16.9257 16.7073 17.4997 16.7073H21.0277C21.6017 16.7073 21.8747 16.4203 21.8747 15.9273V9.2423C21.8747 7.6833 20.8227 6.6443 19.2637 6.6443C17.7187 6.6443 16.6657 7.6833 16.6657 9.2423ZM12.5507 23.0233C13.6857 23.0233 14.5607 22.1893 14.5607 21.0823C14.5607 19.9333 13.6717 19.0453 12.5507 19.0453C11.4027 19.0453 10.5687 19.9063 10.5687 21.0823C10.5687 22.2033 11.3887 23.0233 12.5507 23.0233Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
