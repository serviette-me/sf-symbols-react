import { IconProps } from "../../types"

export default function ClipboardFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.23828125 34.7265625"
          className={className}
        >
          <path
            d="              M8.4497 7.902H16.7757C17.7327 7.902 18.3067 7.287 18.3067 6.275V4.84C18.3067 3.814 17.7327 3.213 16.7757 3.213H16.0647C15.9277 1.422 14.4517 0 12.6187 0C10.7867 0 9.3107 1.422 9.1737 3.213H8.4497C7.5057 3.213 6.9317 3.814 6.9317 4.84V6.275C6.9317 7.287 7.5057 7.902 8.4497 7.902ZM12.6187 4.621C11.9087 4.621 11.3337 4.033 11.3337 3.35C11.3337 2.652 11.9087 2.078 12.6187 2.078C13.3297 2.078 13.8907 2.652 13.8907 3.35C13.8907 4.033 13.3297 4.621 12.6187 4.621ZM5.3867 34.727H19.8377C23.0917 34.727 25.2387 32.566 25.2387 29.258V8.764C25.2387 5.455 23.0917 3.295 19.8517 3.295H19.7147C19.9337 3.732 20.0427 4.252 20.0427 4.812V6.275C20.0427 8.23 18.7307 9.639 16.7757 9.639H8.4497C6.5077 9.639 5.1817 8.23 5.1817 6.275V4.812C5.1817 4.252 5.3047 3.732 5.5237 3.295H5.3727C2.1327 3.295 -0.0003 5.455 -0.0003 8.764V29.258C-0.0003 32.566 2.1327 34.727 5.3867 34.727Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.1171875 33.919921875"
          className={className}
        >
          <path
            d="              M7.8617 7.4239H16.2427C17.1307 7.4239 17.6507 6.8629 17.6507 5.9339V4.4979C17.6507 3.5549 17.1307 3.0079 16.2427 3.0079H15.2717C15.1487 1.3399 13.7677 -0.0001 12.0587 -0.0001C10.3497 -0.0001 8.9687 1.3399 8.8457 3.0079H7.8617C6.9867 3.0079 6.4667 3.5549 6.4667 4.4979V5.9339C6.4667 6.8629 6.9867 7.4239 7.8617 7.4239ZM12.0587 4.3609C11.3747 4.3609 10.8147 3.7869 10.8147 3.1309C10.8147 2.4469 11.3747 1.9009 12.0587 1.9009C12.7427 1.9009 13.2887 2.4469 13.2887 3.1309C13.2887 3.7869 12.7427 4.3609 12.0587 4.3609ZM4.8127 33.9199H19.3047C22.3397 33.9199 24.1177 32.1289 24.1177 29.0529V8.4219C24.1177 5.3459 22.3397 3.5549 19.3727 3.5549H19.1407C19.2637 3.8009 19.3187 4.0879 19.3187 4.4019V5.9339C19.3187 7.7659 18.0747 9.0919 16.2427 9.0919H7.8617C6.0427 9.0919 4.7987 7.7659 4.7987 5.9339V4.4019C4.7987 4.0879 4.8537 3.8009 4.9627 3.5549H4.7437C1.7777 3.5549 -0.0003 5.3459 -0.0003 8.4219V29.0529C-0.0003 32.1289 1.7777 33.9199 4.8127 33.9199Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.705078125 34.34375"
          className={className}
        >
          <path
            d="              M8.1757 7.6703H16.5297C17.4457 7.6703 17.9927 7.0823 17.9927 6.1113V4.6623C17.9927 3.6913 17.4457 3.1033 16.5297 3.1033H15.6817C15.5587 1.3813 14.1227 0.0003 12.3457 0.0003C10.5817 0.0003 9.1467 1.3813 9.0237 3.1033H8.1757C7.2597 3.1033 6.7127 3.6913 6.7127 4.6623V6.1113C6.7127 7.0823 7.2597 7.6703 8.1757 7.6703ZM12.3457 4.4983C11.6487 4.4983 11.0877 3.9243 11.0877 3.2403C11.0877 2.5563 11.6487 1.9823 12.3457 1.9823C13.0567 1.9823 13.6177 2.5563 13.6177 3.2403C13.6177 3.9243 13.0567 4.4983 12.3457 4.4983ZM5.1137 34.3433H19.5917C22.7367 34.3433 24.7047 32.3613 24.7047 29.1623V8.5993C24.7047 5.4003 22.7367 3.4183 19.6327 3.4183H19.4417C19.6187 3.7593 19.7017 4.1703 19.7017 4.6073V6.1113C19.7017 8.0113 18.4157 9.3793 16.5297 9.3793H8.1757C6.2887 9.3793 5.0037 8.0113 5.0037 6.1113V4.6073C5.0037 4.1703 5.0857 3.7593 5.2637 3.4183H5.0727C1.9687 3.4183 -0.0003 5.4003 -0.0003 8.5993V29.1623C-0.0003 32.3613 1.9687 34.3433 5.1137 34.3433Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 32.662109375"
          className={className}
        >
          <path
            d="              M7.1227 6.3576H15.4767C16.1877 6.3576 16.6247 5.9196 16.6247 5.1956V3.7876C16.6247 3.0626 16.1877 2.6246 15.4767 2.6246H14.0407C13.9727 1.1756 12.7697 -0.0004 11.3067 -0.0004C9.8297 -0.0004 8.6267 1.1756 8.5727 2.6246H7.1227C6.4117 2.6246 5.9887 3.0626 5.9887 3.7876V5.1956C5.9887 5.9196 6.4117 6.3576 7.1227 6.3576ZM11.3067 3.9106C10.6227 3.9106 10.0897 3.3496 10.0897 2.6936C10.0897 2.0096 10.6227 1.4766 11.3067 1.4766C11.9767 1.4766 12.5237 2.0096 12.5237 2.6936C12.5237 3.3496 11.9767 3.9106 11.3067 3.9106ZM3.9927 32.6626H18.6077C21.2597 32.6626 22.5997 31.2946 22.5997 28.6286V7.5466C22.5997 4.8676 21.2597 3.5136 18.7027 3.5136H18.0197V5.1956C18.0197 6.6996 16.9807 7.7656 15.4767 7.7656H7.1227C5.6187 7.7656 4.5937 6.6996 4.5937 5.1956V3.5136H3.9097C1.3537 3.5136 -0.0003 4.8676 -0.0003 7.5466V28.6286C-0.0003 31.2946 1.3537 32.6626 3.9927 32.6626Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.392578125 33.4140625"
          className={className}
        >
          <path
            d="              M7.4927 7.1228H15.9137C16.7347 7.1228 17.2407 6.6038 17.2407 5.7148V4.2798C17.2407 3.3908 16.7347 2.8708 15.9137 2.8708H14.7517C14.6567 1.2848 13.3297 -0.0002 11.7027 -0.0002C10.0767 -0.0002 8.7497 1.2848 8.6407 2.8708H7.4927C6.6587 2.8708 6.1657 3.3908 6.1657 4.2798V5.7148C6.1657 6.6038 6.6587 7.1228 7.4927 7.1228ZM11.7027 4.1968C11.0337 4.1968 10.4867 3.6368 10.4867 2.9808C10.4867 2.3238 11.0337 1.7778 11.7027 1.7778C12.3727 1.7778 12.9067 2.3238 12.9067 2.9808C12.9067 3.6368 12.3727 4.1968 11.7027 4.1968ZM4.4437 33.4138H18.9497C21.8617 33.4138 23.3927 31.8558 23.3927 28.9158V8.2168C23.3927 5.2638 21.8617 3.7188 19.0727 3.7188H18.7847C18.8267 3.8278 18.8397 3.9788 18.8397 4.1288V5.7148C18.8397 7.4788 17.6507 8.7368 15.9137 8.7368H7.4927C5.7427 8.7368 4.5527 7.4788 4.5527 5.7148V4.1288C4.5527 3.9788 4.5797 3.8278 4.6207 3.7188H4.3337C1.5447 3.7188 -0.0003 5.2638 -0.0003 8.2168V28.9158C-0.0003 31.8558 1.5447 33.4138 4.4437 33.4138Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.99609375 33.126953125"
          className={className}
        >
          <path
            d="              M7.2737 6.9457H15.7227C16.5157 6.9457 16.9937 6.4397 16.9937 5.5917V4.1567C16.9937 3.3087 16.5157 2.8027 15.7227 2.8027H14.4647C14.3687 1.2577 13.0837 -0.0003 11.4977 -0.0003C9.9117 -0.0003 8.6267 1.2577 8.5317 2.8027H7.2737C6.4807 2.8027 6.0017 3.3087 6.0017 4.1567V5.5917C6.0017 6.4397 6.4807 6.9457 7.2737 6.9457ZM11.4977 4.1017C10.8417 4.1017 10.3087 3.5547 10.3087 2.9117C10.3087 2.2417 10.8417 1.7087 11.4977 1.7087C12.1547 1.7087 12.6877 2.2417 12.6877 2.9117C12.6877 3.5547 12.1547 4.1017 11.4977 4.1017ZM4.2387 33.1267H18.7577C21.5877 33.1267 22.9957 31.7047 22.9957 28.8337V8.0937C22.9957 5.2227 21.5877 3.8007 18.8947 3.8007H18.5797V5.5917C18.5797 7.3147 17.4177 8.5317 15.7227 8.5317H7.2737C5.5777 8.5317 4.4157 7.3147 4.4157 5.5917V3.8007H4.1017C1.4087 3.8007 -0.0003 5.2227 -0.0003 8.0937V28.8337C-0.0003 31.7047 1.4087 33.1267 4.2387 33.1267Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.70703125 33.6328125"
          className={className}
        >
          <path
            d="              M7.6567 7.2458H16.0507C16.8987 7.2458 17.4177 6.7128 17.4177 5.8108V4.3618C17.4177 3.4588 16.8987 2.9258 16.0507 2.9258H14.9707C14.8617 1.3128 13.5217 -0.0002 11.8537 -0.0002C10.1857 -0.0002 8.8457 1.3128 8.7367 2.9258H7.6567C6.8087 2.9258 6.2887 3.4588 6.2887 4.3618V5.8108C6.2887 6.7128 6.8087 7.2458 7.6567 7.2458ZM11.8537 4.2658C11.1837 4.2658 10.6367 3.7048 10.6367 3.0488C10.6367 2.3788 11.1837 1.8318 11.8537 1.8318C12.5237 1.8318 13.0707 2.3788 13.0707 3.0488C13.0707 3.7048 12.5237 4.2658 11.8537 4.2658ZM4.6077 33.6328H19.0997C22.0667 33.6328 23.7067 31.9788 23.7067 28.9708V8.2988C23.7067 5.3048 22.0667 3.6368 19.1957 3.6368H18.9357C19.0177 3.8148 19.0447 4.0328 19.0447 4.2378V5.8108C19.0447 7.6018 17.8417 8.8868 16.0507 8.8868H7.6567C5.8657 8.8868 4.6617 7.6018 4.6617 5.8108V4.2378C4.6617 4.0328 4.6897 3.8148 4.7717 3.6368H4.5117C1.6407 3.6368 -0.0003 5.3048 -0.0003 8.2988V28.9708C-0.0003 31.9788 1.6407 33.6328 4.6077 33.6328Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 32.033203125"
          className={className}
        >
          <path
            d="              M6.9317 5.5781H15.1617C15.7497 5.5781 16.1187 5.2361 16.1187 4.6621V3.3221C16.1187 2.7341 15.7497 2.4061 15.1617 2.4061H13.4807C13.4527 1.0661 12.3727 0.0001 11.0467 0.0001C9.7207 0.0001 8.6407 1.0661 8.6137 2.4061H6.9317C6.3437 2.4061 5.9747 2.7341 5.9747 3.3221V4.6621C5.9747 5.2361 6.3437 5.5781 6.9317 5.5781ZM11.0467 3.6641C10.3357 3.6641 9.7887 3.0901 9.7887 2.4061C9.7887 1.7091 10.3357 1.1481 11.0467 1.1481C11.7437 1.1481 12.3047 1.7091 12.3047 2.4061C12.3047 3.0901 11.7437 3.6641 11.0467 3.6641ZM3.6777 32.0331H18.4157C20.8227 32.0331 22.0937 30.7621 22.0937 28.3421V6.8091C22.0937 4.3891 20.8227 3.1171 18.4437 3.1171H17.2817V4.6621C17.2817 5.8921 16.3927 6.7401 15.1617 6.7401H6.9317C5.6877 6.7401 4.8127 5.8921 4.8127 4.6621V3.1171H3.6507C1.2577 3.1171 -0.0003 4.3891 -0.0003 6.8091V28.3421C-0.0003 30.7621 1.2577 32.0331 3.6777 32.0331Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 31.71875"
          className={className}
        >
          <path
            d="              M6.8357 5.1813H14.9977C15.5317 5.1813 15.8597 4.8943 15.8597 4.3883V3.0763C15.8597 2.5843 15.5317 2.2833 14.9977 2.2833H13.1937C13.1937 1.0253 12.1677 0.0003 10.9097 0.0003C9.6657 0.0003 8.6407 1.0253 8.6407 2.2833H6.8357C6.3027 2.2833 5.9607 2.5843 5.9607 3.0763V4.3883C5.9607 4.8943 6.3027 5.1813 6.8357 5.1813ZM10.9097 3.5413C10.1997 3.5413 9.6387 2.9663 9.6387 2.2693C9.6387 1.5583 10.1997 0.9983 10.9097 0.9983C11.6347 0.9983 12.1957 1.5583 12.1957 2.2693C12.1957 2.9663 11.6347 3.5413 10.9097 3.5413ZM3.5137 31.7183H18.3207C20.6037 31.7183 21.8207 30.4883 21.8207 28.2053V6.4393C21.8207 4.1423 20.6037 2.9253 18.3067 2.9253H16.8987V4.3883C16.8987 5.4823 16.1057 6.2203 14.9977 6.2203H6.8357C5.7287 6.2203 4.9357 5.4823 4.9357 4.3883V2.9253H3.5137C1.2167 2.9253 -0.0003 4.1423 -0.0003 6.4393V28.2053C-0.0003 30.4883 1.2167 31.7183 3.5137 31.7183Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}