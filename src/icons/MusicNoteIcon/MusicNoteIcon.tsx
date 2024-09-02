import { IconProps } from "../../types"

export default function MusicNoteIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.798828125 29.07172806351296"
          className={className}
        >
          <path
            d="              M18.7987 6.9502V1.9062C18.7987 0.6482 17.7457 -0.2138 16.5297 0.0462L9.3927 1.6052C8.1077 1.8782 7.3967 2.6442 7.3967 3.7792V18.6672C7.4097 18.9952 7.3007 19.1322 7.0687 19.1872L4.8127 19.6522C1.6547 20.2942 -0.0003 22.0172 -0.0003 24.6152C-0.0003 27.2672 1.9687 29.0722 4.8127 29.0722C8.1207 29.0722 10.7737 26.5152 10.7737 22.9332V10.3272C10.7737 9.9862 10.6097 10.1362 10.9647 10.0402L17.4457 8.6322C18.2657 8.4542 18.7987 7.7842 18.7987 6.9502Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.732421875 28.2694278424301"
          className={className}
        >
          <path
            d="              M17.7327 6.5854V1.4864C17.7327 0.5014 16.9117 -0.1676 15.9547 0.0374L8.8867 1.5824C7.7927 1.8144 7.2047 2.4294 7.2047 3.3864L7.2187 18.4394C7.2597 18.9314 7.0407 19.2184 6.6307 19.3004L4.4157 19.7654C1.4767 20.3804 -0.0003 21.9254 -0.0003 24.2634C-0.0003 26.6424 1.7907 28.2694 4.3477 28.2694C6.9997 28.2694 9.8297 26.2594 9.8297 22.4724V9.9214C9.8297 9.3754 9.8167 9.3754 10.3227 9.2654L16.6797 7.8714C17.3227 7.7344 17.7327 7.2284 17.7327 6.5854Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.29296875 28.697373695421245"
          className={className}
        >
          <path
            d="              M18.2927 6.7809V1.7089C18.2927 0.5879 17.3497 -0.1911 16.2557 0.0409L9.1597 1.5999C7.9567 1.8459 7.3147 2.5429 7.3147 3.5959V18.5529C7.3417 18.9769 7.1777 19.1679 6.8637 19.2499L4.6207 19.7149C1.5727 20.3299 -0.0003 21.9709 -0.0003 24.4459C-0.0003 26.9749 1.8727 28.6969 4.5937 28.6969C7.5877 28.6969 10.3357 26.3869 10.3357 22.7089V10.1309C10.3357 9.6939 10.2407 9.7759 10.6637 9.6799L17.0897 8.2719C17.8147 8.1209 18.2927 7.5199 18.2927 6.7809Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.064453125 26.832283327096455"
          className={className}
        >
          <path
            d="              M16.0647 5.9831V0.9791C16.0647 0.3091 15.5447 -0.1009 14.9027 0.0221L8.1617 1.4841C7.3967 1.6491 6.9867 2.0721 6.9867 2.7561L7.0277 17.7541C7.0687 18.4791 6.7127 18.9711 6.0567 19.1081L3.8967 19.5591C1.2437 20.1061 -0.0003 21.4181 -0.0003 23.4281C-0.0003 25.4381 1.5317 26.8321 3.7187 26.8321C5.6877 26.8321 8.5727 25.4101 8.5727 21.5411V9.2361C8.5727 8.4571 8.7497 8.2521 9.4607 8.1021L15.3947 6.7891C15.8187 6.7071 16.0647 6.3931 16.0647 5.9831Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.0625 27.756219853094265"
          className={className}
        >
          <path
            d="              M17.0627 6.3459V1.2189C17.0627 0.3989 16.3927 -0.1341 15.5997 0.0299L8.5587 1.5609C7.6017 1.7659 7.0817 2.2859 7.0817 3.1329L7.1097 18.2819C7.1637 18.8829 6.8767 19.2659 6.3577 19.3749L4.1697 19.8269C1.3537 20.4149 -0.0003 21.8639 -0.0003 24.0379C-0.0003 26.2249 1.6677 27.7559 4.0467 27.7559C6.2887 27.7559 9.2287 26.0749 9.2287 22.1649V9.6409C9.2287 8.9849 9.3107 8.8889 9.9117 8.7659L16.2017 7.3849C16.7207 7.2759 17.0627 6.8659 17.0627 6.3459Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.6796875 27.463284998857244"
          className={className}
        >
          <path
            d="              M16.6797 6.2167V1.0767C16.6797 0.3517 16.0917 -0.1133 15.3947 0.0237L8.3677 1.5547C7.4927 1.7467 7.0137 2.2247 7.0137 2.9907L7.0407 18.1937C7.1097 18.8637 6.7947 19.3007 6.1937 19.4247L4.0197 19.8757C1.2847 20.4497 -0.0003 21.8437 -0.0003 23.9087C-0.0003 26.0007 1.6137 27.4637 3.8827 27.4637C5.8927 27.4637 8.9007 25.9867 8.9007 22.0087V9.4987C8.9007 8.7737 9.0367 8.6237 9.6797 8.4867L15.9277 7.1197C16.3927 7.0237 16.6797 6.6687 16.6797 6.2167Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.349609375 27.977025610918353"
          className={className}
        >
          <path
            d="              M17.3497 6.444V1.331C17.3497 0.442 16.6117 -0.146 15.7497 0.032L8.6957 1.577C7.6837 1.782 7.1367 2.356 7.1367 3.231L7.1507 18.338C7.2047 18.899 6.9587 19.241 6.4807 19.35L4.2797 19.801C1.4087 20.403 -0.0003 21.893 -0.0003 24.135C-0.0003 26.405 1.7227 27.977 4.1837 27.977C6.6037 27.977 9.4887 26.145 9.4887 22.29V9.766C9.4887 9.151 9.5297 9.096 10.0897 8.973L16.4067 7.592C16.9807 7.469 17.3497 7.018 17.3497 6.444Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.2578125 25.982588307684722"
          className={className}
        >
          <path
            d="              M15.2577 5.6802V0.8532C15.2577 0.2662 14.8067 -0.0898 14.2457 0.0192L7.8887 1.4002C7.2737 1.5372 6.9317 1.8922 6.9317 2.4672L6.9997 17.1642C7.0277 17.9712 6.5897 18.5312 5.8657 18.6822L3.7187 19.1332C1.2027 19.6522 -0.0003 20.8692 -0.0003 22.7972C-0.0003 24.6842 1.4217 25.9822 3.4997 25.9822C5.4137 25.9822 8.1487 24.6562 8.1487 20.9242V8.8922C8.1487 8.0452 8.3677 7.7582 9.1737 7.5802L14.6977 6.3632C15.0527 6.2952 15.2577 6.0352 15.2577 5.6802Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.84765625 25.546347061748797"
          className={className}
        >
          <path
            d="              M14.8477 5.5174V0.7864C14.8477 0.2394 14.4377 -0.0886 13.9177 0.0214L7.7517 1.3474C7.2047 1.4564 6.9047 1.7844 6.9047 2.3044L6.9997 16.8514C6.9997 17.7124 6.5347 18.3004 5.7697 18.4644L3.6227 18.9154C1.1897 19.4214 -0.0003 20.5834 -0.0003 22.4704C-0.0003 24.3024 1.3807 25.5464 3.3907 25.5464C5.2777 25.5464 7.9157 24.2614 7.9157 20.5974V8.7164C7.9157 7.8144 8.1617 7.4994 9.0237 7.3084L14.3277 6.1464C14.6567 6.0774 14.8477 5.8454 14.8477 5.5174Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
