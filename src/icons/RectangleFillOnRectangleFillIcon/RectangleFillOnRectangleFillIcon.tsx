import { IconProps } from "../../types"

export default function RectangleFillOnRectangleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.94140625 31.404296875"
          className={className}
        >
          <path
            d="              M12.9887 4.7031H29.2847V4.6891C29.0257 1.7231 27.1117 0.0001 23.9527 0.0001H5.3597C1.9827 0.0001 -0.0003 1.9821 -0.0003 5.3591V18.7851C-0.0003 22.0531 1.8317 23.9941 5.0177 24.1171H5.0447V12.6331C5.0447 7.8341 8.1757 4.7031 12.9887 4.7031ZM12.9887 31.4041H31.5687C34.9587 31.4041 36.9417 29.4351 36.9417 26.0451V12.6331C36.9417 9.2561 34.9587 7.2731 31.5687 7.2731H12.9887C9.5977 7.2731 7.6157 9.2561 7.6157 12.6331V26.0451C7.6157 29.4351 9.5977 31.4041 12.9887 31.4041Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.478515625 29.55859375"
          className={className}
        >
          <path
            d="              M12.0177 4.5804H28.2737V4.4704C28.1507 1.5724 26.4687 0.0004 23.4607 0.0004H4.8267C1.7087 0.0004 -0.0003 1.6954 -0.0003 4.7984V17.9644C-0.0003 21.0004 1.6267 22.6814 4.6487 22.7504H4.9627V11.6074C4.9627 7.2734 7.6697 4.5804 12.0177 4.5804ZM12.0177 29.5584H30.6527C33.7697 29.5584 35.4787 27.8634 35.4787 24.7594V11.6074C35.4787 8.5044 33.7697 6.8084 30.6527 6.8084H12.0177C8.8867 6.8084 7.1917 8.5044 7.1917 11.6074V24.7594C7.1917 27.8634 8.8867 29.5584 12.0177 29.5584Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.244140625 30.529296875"
          className={className}
        >
          <path
            d="              M12.5237 4.6486H28.8067V4.5936C28.6157 1.6546 26.8107 -0.0004 23.7207 -0.0004H5.1137C1.8457 -0.0004 -0.0003 1.8456 -0.0003 5.0996V18.3886C-0.0003 21.5606 1.7367 23.3786 4.8397 23.4746H5.0037V12.1546C5.0037 7.5606 7.9297 4.6486 12.5237 4.6486ZM12.5237 30.5296H31.1307C34.3987 30.5296 36.2437 28.6836 36.2437 25.4436V12.1546C36.2437 8.9006 34.3987 7.0546 31.1307 7.0546H12.5237C9.2697 7.0546 7.4097 8.9006 7.4097 12.1546V25.4436C7.4097 28.6976 9.2697 30.5296 12.5237 30.5296Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.5234375 26.947265625"
          className={className}
        >
          <path
            d="              M10.4997 4.3749H27.0427V3.9919C27.0427 1.3669 25.6757 -0.0001 23.0097 -0.0001H4.0337C1.3537 -0.0001 -0.0003 1.3539 -0.0003 3.9919V16.9939C-0.0003 19.6469 1.3537 20.9999 4.0337 20.9999H4.8807V9.9529C4.8807 6.4259 6.9587 4.3749 10.4997 4.3749ZM10.4997 26.9469H29.4907C32.1567 26.9469 33.5237 25.5939 33.5237 22.9549V9.9529C33.5237 7.3279 32.1567 5.9609 29.4907 5.9609H10.4997C7.8337 5.9609 6.4807 7.3149 6.4807 9.9529V22.9549C6.4807 25.6079 7.8337 26.9469 10.4997 26.9469Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.53515625 28.35546875"
          className={className}
        >
          <path
            d="              M11.3887 4.4978H27.6177V4.3198C27.5767 1.4768 26.0447 -0.0002 23.1467 -0.0002H4.4847C1.5317 -0.0002 -0.0003 1.5178 -0.0003 4.4438V17.4318C-0.0003 20.3298 1.5037 21.8338 4.4157 21.8608H4.9087V10.9378C4.9087 6.9038 7.3417 4.4978 11.3887 4.4978ZM11.3887 28.3558H30.0507C33.0037 28.3558 34.5347 26.8378 34.5347 23.9258V10.9378C34.5347 8.0118 33.0037 6.4938 30.0507 6.4938H11.3887C8.4357 6.4938 6.9047 8.0118 6.9047 10.9378V23.9258C6.9047 26.8518 8.4357 28.3558 11.3887 28.3558Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.015625 27.69921875"
          className={className}
        >
          <path
            d="              M11.0467 4.4707H27.2617V4.2387C27.2617 1.4217 25.8127 -0.0003 22.9687 -0.0003H4.2927C1.4217 -0.0003 -0.0003 1.4217 -0.0003 4.2387V17.1307C-0.0003 19.9607 1.4217 21.3687 4.2927 21.3687H4.8807V10.5687C4.8807 6.7127 7.1507 4.4707 11.0467 4.4707ZM11.0467 27.6997H29.7227C32.5667 27.6997 34.0157 26.2777 34.0157 23.4607V10.5687C34.0157 7.7517 32.5667 6.3297 29.7227 6.3297H11.0467C8.1757 6.3297 6.7537 7.7517 6.7537 10.5687V23.4607C6.7537 26.2907 8.1757 27.6997 11.0467 27.6997Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.9453125 28.875"
          className={className}
        >
          <path
            d="              M11.6617 4.5386H27.9047V4.3746C27.8227 1.5176 26.2367 -0.0004 23.2837 -0.0004H4.6347C1.5997 -0.0004 -0.0003 1.5996 -0.0003 4.5936V17.6506C-0.0003 20.6176 1.5587 22.2036 4.5257 22.2446H4.9357V11.2246C4.9357 7.0546 7.4787 4.5386 11.6617 4.5386ZM11.6617 28.8746H30.3107C33.3317 28.8746 34.9457 27.2756 34.9457 24.2816V11.2246C34.9457 8.2306 33.3317 6.6306 30.3107 6.6306H11.6617C8.6267 6.6306 7.0277 8.2166 7.0277 11.2246V24.2816C7.0277 27.2886 8.6267 28.8746 11.6617 28.8746Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.8671875 25.962890625"
          className={className}
        >
          <path
            d="              M9.7887 4.252H26.7697V3.678C26.7697 1.285 25.4977 0 23.0777 0H3.6917C1.2717 0 -0.0003 1.258 -0.0003 3.678V16.816C-0.0003 19.236 1.2717 20.494 3.6917 20.494H4.8807V9.146C4.8807 6.057 6.6997 4.252 9.7887 4.252ZM9.7887 25.963H29.1757C31.5957 25.963 32.8677 24.664 32.8677 22.285V9.146C32.8677 6.754 31.5957 5.469 29.1757 5.469H9.7887C7.3687 5.469 6.1117 6.727 6.1117 9.146V22.285C6.1117 24.705 7.3687 25.963 9.7887 25.963Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.5390625 25.45703125"
          className={className}
        >
          <path
            d="              M9.4337 4.1833H26.6187V3.5133C26.6187 1.2583 25.4027 0.0003 23.1057 0.0003H3.5137C1.2167 0.0003 -0.0003 1.2173 -0.0003 3.5133V16.7203C-0.0003 19.0173 1.2167 20.2343 3.5137 20.2343H4.8807V8.7223C4.8807 5.8653 6.5627 4.1833 9.4337 4.1833ZM9.4337 25.4573H29.0257C31.3227 25.4573 32.5387 24.1993 32.5387 21.9433V8.7223C32.5387 6.4673 31.3227 5.2093 29.0257 5.2093H9.4337C7.1367 5.2093 5.9197 6.4263 5.9197 8.7223V21.9433C5.9197 24.2403 7.1367 25.4573 9.4337 25.4573Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}