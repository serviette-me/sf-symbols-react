import { IconProps } from "../../types"

export default function PentagonIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.08025482702929 30.7958984375"
          className={className}
        >
          <path
            d="              M0.342 15.0731L4.321 26.9131C5.155 29.3881 7.028 30.7961 9.653 30.7961H22.422C25.061 30.7961 26.92 29.3881 27.768 26.9131L31.746 15.0731C32.58 12.5711 31.828 10.3431 29.75 8.8111L19.346 1.1691C17.213 -0.3899 14.862 -0.3899 12.729 1.1691L2.325 8.8111C0.246 10.3431 -0.506 12.5711 0.342 15.0731ZM4.881 13.9521C4.662 13.3371 4.854 12.8041 5.428 12.3661L15.19 5.1611C15.709 4.7781 16.352 4.7781 16.871 5.1611L26.647 12.3661C27.221 12.8041 27.426 13.3371 27.207 13.9521L23.434 25.1081C23.229 25.7241 22.668 26.1061 22.08 26.1061H10.008C9.407 26.1061 8.846 25.7241 8.641 25.1081Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.840481407585692 29.84912109375"
          className={className}
        >
          <path
            d="              M0.3016 14.2498L4.3076 26.4308C5.0326 28.6458 6.6456 29.8488 8.9966 29.8488H21.8486C24.2006 29.8488 25.8136 28.6458 26.5376 26.4308L30.5306 14.2768C31.2826 12.0078 30.6536 10.0928 28.7936 8.7258L18.3626 1.0558C16.4346 -0.3522 14.4106 -0.3522 12.4836 1.0558L2.0516 8.7258C0.1926 10.0928 -0.4364 12.0078 0.3016 14.2498ZM3.6106 13.3468C3.3366 12.5128 3.5286 11.9388 4.2666 11.3788L14.3836 3.9268C15.0946 3.4078 15.7376 3.4078 16.4616 3.9268L26.5786 11.3788C27.3176 11.9388 27.5086 12.5268 27.2356 13.3748L23.3386 25.2008C23.0786 26.0208 22.5326 26.4038 21.6706 26.4038H9.1746C8.3136 26.4038 7.7666 26.0208 7.5066 25.2008Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.49265357710663 30.34814453125"
          className={className}
        >
          <path
            d="              M0.3147 14.6937L4.3067 26.6977C5.0997 29.0497 6.8497 30.3477 9.3377 30.3477H22.1487C24.6507 30.3477 26.4007 29.0497 27.1797 26.6977L31.1717 14.7077C31.9647 12.3147 31.2677 10.2367 29.2987 8.7737L18.8807 1.1177C16.8437 -0.3723 14.6427 -0.3723 12.6187 1.1177L2.2017 8.7737C0.2187 10.2367 -0.4653 12.3147 0.3147 14.6937ZM4.2797 13.6817C4.0337 12.9577 4.2247 12.3967 4.8807 11.9047L14.8067 4.5907C15.4217 4.1387 16.0647 4.1387 16.6797 4.5907L26.6057 11.9047C27.2617 12.3967 27.4667 12.9577 27.2207 13.6817L23.3927 25.1527C23.1597 25.8637 22.5997 26.2467 21.8887 26.2467H9.6117C8.8867 26.2467 8.3397 25.8637 8.1077 25.1527Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.158933334792835 28.34521484375"
          className={className}
        >
          <path
            d="              M0.2592 13.0465L4.3332 25.6515C4.9212 27.4975 6.0832 28.3455 8.0382 28.3455H21.1502C23.0912 28.3455 24.2532 27.4975 24.8412 25.6515L28.8882 13.1425C29.5032 11.2145 29.0792 9.8195 27.5212 8.6715L16.9662 0.8925C15.3262 -0.2975 13.8632 -0.2975 12.2082 0.8925L1.6542 8.6715C0.0952 9.8065 -0.3418 11.1735 0.2592 13.0465ZM1.8592 12.5265C1.4902 11.4055 1.7082 10.7355 2.6792 10.0245L13.2202 2.2455C14.2322 1.5075 14.9432 1.5075 15.9542 2.2455L26.4952 10.0245C27.4662 10.7355 27.6712 11.4335 27.2882 12.6225L23.2552 25.1325C22.8862 26.2535 22.3262 26.6495 21.1502 26.6495H8.0382C6.8492 26.6495 6.2882 26.2535 5.9192 25.1325Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.053734903850387 29.2578125"
          className={className}
        >
          <path
            d="              M0.2777 13.7263L4.2967 26.1403C4.9537 28.1773 6.4027 29.2583 8.5767 29.2583H21.4827C23.6567 29.2583 25.1057 28.1773 25.7617 26.1403L29.7677 13.7673C30.4517 11.6623 29.9047 9.9393 28.1817 8.6813L17.7227 0.9843C15.9317 -0.3277 14.1267 -0.3277 12.3357 0.9843L1.8767 8.6813C0.1547 9.9393 -0.3923 11.6483 0.2777 13.7263ZM2.7927 12.9743C2.4787 12.0043 2.6977 11.3883 3.5317 10.7593L13.8677 3.1443C14.7017 2.5293 15.3577 2.5293 16.1917 3.1443L26.5277 10.7593C27.3747 11.3883 27.5807 12.0173 27.2517 13.0023L23.2877 25.2523C22.9727 26.2223 22.4397 26.6053 21.4137 26.6053H8.6447C7.6327 26.6053 7.0857 26.2223 6.7717 25.2523Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.600411724407543 28.91259765625"
          className={className}
        >
          <path
            d="              M0.2613 13.4228L4.2943 25.9598C4.9103 27.9148 6.2633 28.9128 8.3413 28.9128H21.2753C23.3533 28.9128 24.7063 27.9148 25.3223 25.9598L29.3283 13.4768C29.9703 11.4538 29.4783 9.8538 27.8373 8.6508L17.3653 0.9538C15.6423 -0.3182 13.9743 -0.3182 12.2513 0.9538L1.7793 8.6508C0.1383 9.8538 -0.3677 11.4398 0.2613 13.4228ZM2.3393 12.7528C1.9973 11.7138 2.2163 11.0848 3.1053 10.4148L13.5643 2.7038C14.4803 2.0338 15.1363 2.0338 16.0383 2.7038L26.4973 10.4148C27.4003 11.0848 27.6053 11.7268 27.2633 12.7938L23.2573 25.2898C22.9153 26.3288 22.3823 26.7118 21.2753 26.7118H8.3413C7.2343 26.7118 6.7013 26.3288 6.3593 25.2898Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.389326241785156 29.50732421875"
          className={className}
        >
          <path
            d="              M0.2875 13.9487L4.2935 26.2667C4.9915 28.3867 6.5085 29.5077 8.7645 29.5077H21.6435C23.8855 29.5077 25.4035 28.3867 26.1005 26.2667L30.0925 13.9757C30.8035 11.8157 30.2295 10.0107 28.4525 8.6987L17.9935 1.0147C16.1475 -0.3383 14.2465 -0.3383 12.4015 1.0147L1.9555 8.6987C0.1645 10.0107 -0.4095 11.8027 0.2875 13.9487ZM3.1455 13.1287C2.8445 12.2257 3.0495 11.6247 3.8425 11.0367L14.0825 3.4897C14.8755 2.9017 15.5185 2.9017 16.3115 3.4897L26.5515 11.0367C27.3445 11.6247 27.5495 12.2397 27.2355 13.1697L23.3115 25.2277C23.0245 26.1307 22.4775 26.5127 21.5205 26.5127H8.8735C7.9305 26.5127 7.3835 26.1307 7.0825 25.2277Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.577597334356966 27.5830078125"
          className={className}
        >
          <path
            d="              M0.2459 12.5298L4.4029 25.2448C4.9499 26.9408 5.8379 27.5828 7.6289 27.5828H20.9869C22.7639 27.5828 23.6659 26.9408 24.1999 25.2448L28.3009 12.7078C28.8889 10.8758 28.5609 9.7688 27.1119 8.7018L16.4339 0.8408C14.8889 -0.2802 13.7129 -0.2802 12.1679 0.8408L1.4909 8.7018C0.0409 9.7548 -0.3001 10.8208 0.2459 12.5298ZM1.2169 12.2298C0.8209 10.9988 1.0389 10.3018 2.1059 9.5228L12.7699 1.6478C13.9049 0.8138 14.6979 0.8138 15.8319 1.6478L26.5099 9.5228C27.5629 10.3018 27.7679 11.0398 27.3299 12.3938L23.2559 24.9308C22.8599 26.1478 22.2579 26.5718 20.9869 26.5718H7.6289C6.3439 26.5718 5.7429 26.1478 5.3459 24.9308Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.27753145504643 27.2001953125"
          className={className}
        >
          <path
            d="              M0.2413 12.2704L4.4253 25.0264C4.9453 26.6534 5.7103 27.2004 7.4053 27.2004H20.8863C22.5953 27.2004 23.3473 26.6534 23.8803 25.0264L27.9953 12.4754C28.5703 10.7124 28.2963 9.7414 26.9023 8.7154L16.1693 0.7994C14.6653 -0.2666 13.6403 -0.2666 12.1363 0.7994L1.4043 8.7154C0.0093 9.7274 -0.2777 10.6294 0.2413 12.2704ZM0.8983 12.0654C0.4743 10.7944 0.6933 10.0694 1.8003 9.2624L12.5323 1.3464C13.7363 0.4444 14.5703 0.4444 15.7593 1.3464L26.5053 9.2624C27.5993 10.0694 27.8183 10.8484 27.3393 12.2844L23.2513 24.8354C22.8413 26.0924 22.2263 26.5304 20.8863 26.5304H7.4053C6.0793 26.5304 5.4643 26.0924 5.0543 24.8354Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
