import { IconProps } from "../../types"
import React from "react"

export default function AirportExtremeTowerIconIcon({
  weight = "regular",
  className = "",
}: IconProps): React.ReactNode {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.423828125 34.7265625"
          className={className}
        >
          <path
            d="              M-0.0003 30.3376C-0.0003 33.0036 1.7367 34.7266 4.4157 34.7266H17.0077C19.6877 34.7266 21.4237 33.0036 21.4237 30.3376V8.6956C21.4237 6.7676 21.0817 5.6606 20.0707 4.4436L18.5257 2.5706C16.9807 0.6836 15.6817 -0.0004 13.4937 -0.0004H7.9297C5.7427 -0.0004 4.4437 0.6836 2.8987 2.5706L1.3537 4.4436C0.3417 5.6606 -0.0003 6.7676 -0.0003 8.6956ZM5.5647 5.5646L6.5077 4.4156C6.8357 4.0196 7.1777 3.8146 7.6157 3.8146H13.8227C14.2457 3.8146 14.6017 4.0196 14.9157 4.4156L15.8597 5.5646C15.9957 5.7426 15.8727 5.9606 15.5727 5.9606H5.8657C5.5507 5.9606 5.4417 5.7426 5.5647 5.5646ZM4.8537 28.8066V10.5546C5.1547 10.6366 5.4007 10.6506 5.7017 10.6506H15.7227C16.0237 10.6506 16.2697 10.6366 16.5707 10.5546V28.8066C16.5707 29.4626 16.1597 29.8726 15.5177 29.8726H5.9067C5.2637 29.8726 4.8537 29.4626 4.8537 28.8066ZM13.1937 28.1226C14.0957 28.1226 14.8337 27.3846 14.8337 26.4686C14.8337 25.5666 14.0957 24.8276 13.1937 24.8276C12.2637 24.8276 11.5387 25.5666 11.5387 26.4686C11.5387 27.3846 12.2637 28.1226 13.1937 28.1226Z"
            fill="currentColor"
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.892578125 33.11328125"
          className={className}
        >
          <path
            d="              M-0.0003 28.8067C-0.0003 31.5407 1.5857 33.1137 4.3617 33.1137H15.5447C18.3067 33.1137 19.8927 31.5407 19.8927 28.8067V7.7107C19.8927 6.2067 19.6057 5.3047 18.7847 4.3067L16.9527 2.0777C15.7367 0.6017 14.6427 -0.0003 12.9887 -0.0003H6.9047C5.2497 -0.0003 4.1697 0.6017 2.9527 2.0777L1.1207 4.3067C0.2867 5.3047 -0.0003 6.2067 -0.0003 7.7107ZM4.2247 5.2497L5.5507 3.6227C6.0157 3.0627 6.3577 2.7617 7.0407 2.7617H12.8657C13.5347 2.7617 13.8767 3.0627 14.3417 3.6227L15.6817 5.2497C15.8867 5.5097 15.8047 5.9477 15.2717 5.9477H4.6207C4.1017 5.9477 4.0197 5.5097 4.2247 5.2497ZM3.5277 27.9867V9.2007C3.8687 9.3517 4.1837 9.3927 4.5797 9.3927H15.3267C15.7227 9.3927 16.0367 9.3517 16.3657 9.2007V27.9867C16.3657 29.0117 15.7907 29.5857 14.7797 29.5857H5.1137C4.1157 29.5857 3.5277 29.0117 3.5277 27.9867ZM13.2207 27.8357C13.9997 27.8357 14.6287 27.2067 14.6287 26.4137C14.6287 25.6347 13.9997 25.0057 13.2207 25.0057C12.4277 25.0057 11.7987 25.6347 11.7987 26.4137C11.7987 27.2067 12.4277 27.8357 13.2207 27.8357Z"
            fill="currentColor"
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.712890625 33.9609375"
          className={className}
        >
          <path
            d="              M-0.0003 29.6132C-0.0003 32.3202 1.6677 33.9612 4.3887 33.9612H16.3107C19.0317 33.9612 20.7127 32.3202 20.7127 29.6132V8.2302C20.7127 6.5082 20.3847 5.4962 19.4547 4.3752L17.7867 2.3382C16.3927 0.6422 15.1897 0.0002 13.2617 0.0002H7.4517C5.5097 0.0002 4.3207 0.6422 2.9257 2.3382L1.2437 4.3752C0.3147 5.4962 -0.0003 6.5082 -0.0003 8.2302ZM4.9357 5.4142L6.0567 4.0472C6.4527 3.5682 6.7947 3.3222 7.3417 3.3222H13.3707C13.9177 3.3222 14.2597 3.5682 14.6427 4.0472L15.7777 5.4142C15.9417 5.6332 15.8457 5.9612 15.4357 5.9612H5.2777C4.8677 5.9612 4.7717 5.6332 4.9357 5.4142ZM4.2247 28.4102V9.9262C4.5527 10.0212 4.8267 10.0622 5.1677 10.0622H15.5317C15.8867 10.0622 16.1597 10.0212 16.4747 9.9262V28.4102C16.4747 29.2442 15.9827 29.7362 15.1757 29.7362H5.5367C4.7167 29.7362 4.2247 29.2442 4.2247 28.4102ZM13.2067 27.9862C14.0407 27.9862 14.7387 27.3032 14.7387 26.4412C14.7387 25.5942 14.0407 24.9102 13.2067 24.9102C12.3457 24.9102 11.6617 25.5942 11.6617 26.4412C11.6617 27.3032 12.3457 27.9862 13.2067 27.9862Z"
            fill="currentColor"
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.390625 30.21484375"
          className={className}
        >
          <path
            d="              M-0.0003 26.2092C-0.0003 28.8612 1.3677 30.2152 4.0337 30.2152H13.3577C16.0237 30.2152 17.3907 28.8612 17.3907 26.2092V6.2752C17.3907 5.3182 17.1857 4.7172 16.6117 4.0332L14.5467 1.5042C13.7407 0.5332 12.9197 0.0002 11.8267 0.0002H5.5647C4.4707 0.0002 3.6507 0.5332 2.8437 1.5042L0.7797 4.0332C0.2047 4.7172 -0.0003 5.3182 -0.0003 6.2752ZM2.3107 4.6352L4.1017 2.4612C4.6757 1.7502 5.0177 1.3812 5.9477 1.3812H11.4437C12.3727 1.3812 12.7147 1.7502 13.2887 2.4612L15.0797 4.6352C15.4357 5.0582 15.3677 5.8242 14.4377 5.8242H2.9527C2.0237 5.8242 1.9547 5.0582 2.3107 4.6352ZM1.6957 26.1272V7.1642C2.0097 7.4102 2.4197 7.5192 2.9807 7.5192H14.4097C14.9707 7.5192 15.3807 7.4102 15.6957 7.1642V26.1272C15.6957 27.6992 14.8617 28.5192 13.3297 28.5192H4.0607C2.5297 28.5192 1.6957 27.6992 1.6957 26.1272ZM12.8657 26.7692C13.4667 26.7692 13.9587 26.2772 13.9587 25.6622C13.9587 25.0602 13.4667 24.5682 12.8657 24.5682C12.2497 24.5682 11.7437 25.0602 11.7437 25.6622C11.7437 26.2772 12.2497 26.7692 12.8657 26.7692Z"
            fill="currentColor"
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.921875 32.087890625"
          className={className}
        >
          <path
            d="              M-0.0003 27.8222C-0.0003 30.6112 1.4907 32.0882 4.3207 32.0882H14.6017C17.4177 32.0882 18.9217 30.6112 18.9217 27.8222V7.0682C18.9217 5.8512 18.6617 5.0722 17.9517 4.2242L15.9417 1.7632C14.9437 0.5602 13.9727 0.0002 12.6597 0.0002H6.2477C4.9497 0.0002 3.9787 0.5602 2.9807 1.7632L0.9567 4.2242C0.2597 5.0722 -0.0003 5.8512 -0.0003 7.0682ZM3.3637 5.0452L4.9497 3.1172C5.4957 2.4472 5.8247 2.0922 6.6717 2.0922H12.2497C13.0837 2.0922 13.4257 2.4472 13.9727 3.1172L15.5587 5.0452C15.8187 5.3592 15.7497 5.9472 15.0937 5.9472H3.8277C3.1717 5.9472 3.1037 5.3592 3.3637 5.0452ZM2.6797 27.4532V8.3402C3.0347 8.5312 3.4047 8.5992 3.8557 8.5992H15.0667C15.5177 8.5992 15.8867 8.5312 16.2427 8.3402V27.4532C16.2427 28.7382 15.5447 29.4082 14.3007 29.4082H4.6077C3.3767 29.4082 2.6797 28.7382 2.6797 27.4532ZM13.2347 27.6582C13.9317 27.6582 14.4927 27.0972 14.4927 26.3872C14.4927 25.6892 13.9317 25.1292 13.2347 25.1292C12.5237 25.1292 11.9627 25.6892 11.9627 26.3872C11.9627 27.0972 12.5237 27.6582 13.2347 27.6582Z"
            fill="currentColor"
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.361328125 31.513671875"
          className={className}
        >
          <path
            d="              M-0.0003 27.2754C-0.0003 30.1054 1.4357 31.5134 4.2927 31.5134H14.0817C16.9257 31.5134 18.3617 30.1054 18.3617 27.2754V6.7264C18.3617 5.6604 18.1287 4.9624 17.4867 4.1834L15.3677 1.5994C14.4927 0.5334 13.5897 0.0004 12.4827 0.0004H5.8787C4.7717 0.0004 3.8827 0.5334 2.9937 1.5994L0.8747 4.1834C0.2327 4.9624 -0.0003 5.6604 -0.0003 6.7264ZM2.8707 4.9494L4.5937 2.8434C5.2087 2.1194 5.5367 1.7224 6.4527 1.7224H11.9087C12.8377 1.7224 13.1657 2.1194 13.7677 2.8434L15.4907 4.9494C15.7777 5.2914 15.7227 5.9474 14.9847 5.9474H3.3767C2.6387 5.9474 2.5977 5.2914 2.8707 4.9494ZM2.2017 27.1664V7.8754C2.5707 8.0804 2.9667 8.1484 3.4457 8.1484H14.9157C15.4087 8.1484 15.8047 8.0804 16.1597 7.8754V27.1664C16.1597 28.5874 15.4087 29.3124 14.0407 29.3124H4.3207C2.9527 29.3124 2.2017 28.5874 2.2017 27.1664ZM13.2477 27.5764C13.8907 27.5764 14.4237 27.0434 14.4237 26.3734C14.4237 25.7304 13.8907 25.1974 13.2477 25.1974C12.5777 25.1974 12.0587 25.7304 12.0587 26.3734C12.0587 27.0434 12.5777 27.5764 13.2477 27.5764Z"
            fill="currentColor"
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.345703125 32.525390625"
          className={className}
        >
          <path
            d="              M-0.0003 28.2463C-0.0003 31.0213 1.5317 32.5253 4.3337 32.5253H15.0117C17.8007 32.5253 19.3457 31.0213 19.3457 28.2463V7.3423C19.3457 6.0023 19.0727 5.1683 18.3067 4.2653L16.3787 1.9002C15.2847 0.5742 14.2597 0.0003 12.8107 0.0003H6.5347C5.0857 0.0003 4.0607 0.5742 2.9667 1.9002L1.0257 4.2653C0.2737 5.1683 -0.0003 6.0023 -0.0003 7.3423ZM3.7327 5.1403L5.2087 3.3363C5.7287 2.7072 6.0567 2.3792 6.8227 2.3792H12.5097C13.2887 2.3792 13.6177 2.7072 14.1367 3.3363L15.6137 5.1403C15.8457 5.4273 15.7777 5.9473 15.1757 5.9473H4.1697C3.5687 5.9473 3.4997 5.4273 3.7327 5.1403ZM3.0487 27.6723V8.7093C3.3907 8.8863 3.7327 8.9413 4.1567 8.9413H15.1757C15.5997 8.9413 15.9547 8.8863 16.2967 8.7093V27.6723C16.2967 28.8473 15.6407 29.4763 14.5057 29.4763H4.8267C3.6917 29.4763 3.0487 28.8473 3.0487 27.6723ZM13.2347 27.7403C13.9587 27.7403 14.5467 27.1383 14.5467 26.4003C14.5467 25.6763 13.9587 25.0743 13.2347 25.0743C12.4827 25.0743 11.8947 25.6763 11.8947 26.4003C11.8947 27.1383 12.4827 27.7403 13.2347 27.7403Z"
            fill="currentColor"
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.10546875 28.478515625"
          className={className}
        >
          <path
            d="              M-0.0003 24.8006C-0.0003 27.2066 1.2717 28.4786 3.6917 28.4786H12.4137C14.8337 28.4786 16.1057 27.2066 16.1057 24.8006V5.6876C16.1057 4.8396 15.9277 4.4026 15.4627 3.8286L13.4527 1.3676C12.7697 0.5056 12.0177 -0.0004 10.9647 -0.0004H5.1407C4.0877 -0.0004 3.3357 0.5056 2.6387 1.3676L0.6427 3.8286C0.1777 4.4026 -0.0003 4.8396 -0.0003 5.6876ZM1.5727 4.2106L3.4317 1.9416C3.9787 1.2716 4.3477 0.9156 5.2777 0.9156H10.8277C11.7577 0.9156 12.1267 1.2716 12.6737 1.9416L14.5337 4.2106C14.9707 4.7576 14.8887 5.6466 13.7267 5.6466H2.3787C1.2167 5.6466 1.1207 4.7576 1.5727 4.2106ZM1.0117 24.7466V6.2206C1.2717 6.5076 1.7087 6.6586 2.3657 6.6586H13.7407C14.3827 6.6586 14.8337 6.5076 15.0937 6.2206V24.7466C15.0937 26.5376 14.1507 27.4536 12.3867 27.4536H3.7187C1.9417 27.4536 1.0117 26.5376 1.0117 24.7466ZM12.3457 25.7166C12.9067 25.7166 13.3437 25.2516 13.3437 24.7056C13.3437 24.1586 12.9067 23.7066 12.3457 23.7066C11.7987 23.7066 11.3477 24.1586 11.3477 24.7056C11.3477 25.2516 11.7987 25.7166 12.3457 25.7166Z"
            fill="currentColor"
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.44921875 27.576171875"
          className={className}
        >
          <path
            d="              M-0.0003 24.0621C-0.0003 26.3591 1.2167 27.5761 3.5137 27.5761H11.9357C14.2187 27.5761 15.4497 26.3591 15.4497 24.0621V5.3731C15.4497 4.5941 15.2847 4.2381 14.8747 3.7191L12.9067 1.2991C12.2637 0.4921 11.5527 0.0001 10.5277 0.0001H4.9217C3.8967 0.0001 3.1857 0.4921 2.5427 1.2991L0.5747 3.7191C0.1507 4.2381 -0.0003 4.5941 -0.0003 5.3731ZM1.1897 3.9921L3.0897 1.6681C3.6227 1.0251 4.0057 0.6701 4.9217 0.6701H10.5137C11.4437 0.6701 11.8267 1.0251 12.3457 1.6681L14.2457 3.9921C14.7387 4.5941 14.6427 5.5511 13.3577 5.5511H2.0917C0.8067 5.5511 0.6977 4.5941 1.1897 3.9921ZM0.6697 24.0351V5.7281C0.8887 6.0431 1.3537 6.2211 2.0507 6.2211H13.3847C14.0957 6.2211 14.5467 6.0431 14.7797 5.7281V24.0351C14.7797 25.9351 13.7947 26.9061 11.8947 26.9061H3.5407C1.6547 26.9061 0.6697 25.9351 0.6697 24.0351ZM12.0857 25.1701C12.6057 25.1701 13.0297 24.7321 13.0297 24.2131C13.0297 23.6931 12.6057 23.2691 12.0857 23.2691C11.5667 23.2691 11.1287 23.6931 11.1287 24.2131C11.1287 24.7321 11.5667 25.1701 12.0857 25.1701Z"
            fill="currentColor"
          />
        </svg>
      )
    default:
      return null
  }
}
