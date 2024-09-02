import { IconProps } from "../../types"

export default function CableConnectorIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.390625 34.15234375"
          className={className}
        >
          <path
            d="              M2.1877 5.1813H8.1897V1.9003C8.1897 0.6973 7.4927 0.0003 6.2617 0.0003H4.1157C2.8847 0.0003 2.1877 0.6973 2.1877 1.9003ZM1.9137 22.0803H3.4867V34.1523H6.9047V22.0803H8.4767C9.6937 22.0803 10.3907 21.3833 10.3907 20.1793V9.1873C10.3907 7.9573 9.6937 7.2463 8.4767 7.2463H1.9137C0.6977 7.2463 -0.0003 7.9573 -0.0003 9.1873V20.1793C-0.0003 21.3833 0.6977 22.0803 1.9137 22.0803Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.65234375 32.67578125"
          className={className}
        >
          <path
            d="              M1.9957 4.922H7.6567V1.791C7.6567 0.588 7.0687 0 5.8517 0H3.8007C2.5837 0 1.9957 0.588 1.9957 1.791ZM1.7907 21.123H3.4047V32.676H6.2617V21.123H7.8617C9.0647 21.123 9.6527 20.535 9.6527 19.332V8.572C9.6527 7.355 9.0647 6.754 7.8617 6.754H1.7907C0.5877 6.754 -0.0003 7.355 -0.0003 8.572V19.332C-0.0003 20.535 0.5877 21.123 1.7907 21.123Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.03515625 33.46875"
          className={className}
        >
          <path
            d="              M2.0917 5.0725H7.9437V1.8595C7.9437 0.6425 7.2867 0.0005 6.0707 0.0005H3.9647C2.7477 0.0005 2.0917 0.6425 2.0917 1.8595ZM1.8597 21.6285H3.4457V33.4685H6.6037V21.6285H8.1897C9.3927 21.6285 10.0347 20.9865 10.0347 19.7835V8.9005C10.0347 7.6835 9.3927 7.0275 8.1897 7.0275H1.8597C0.6427 7.0275 -0.0003 7.6835 -0.0003 8.9005V19.7835C-0.0003 20.9865 0.6427 21.6285 1.8597 21.6285Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.736328125 30.474609375"
          className={className}
        >
          <path
            d="              M1.8457 4.4846H6.8907V1.5446C6.8907 0.4646 6.4117 -0.0004 5.3317 -0.0004H3.4047C2.3247 -0.0004 1.8457 0.4646 1.8457 1.5446ZM1.5587 19.6466H3.4457V30.4746H5.3047V19.6466H7.1917C8.2717 19.6466 8.7367 19.1816 8.7367 18.1016V7.4516C8.7367 6.3716 8.2717 5.8926 7.1917 5.8926H1.5587C0.4787 5.8926 -0.0003 6.3716 -0.0003 7.4516V18.1016C-0.0003 19.1816 0.4787 19.6466 1.5587 19.6466Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.1875 31.732421875"
          className={className}
        >
          <path
            d="              M1.8597 4.7575H7.3277V1.7095C7.3277 0.5055 6.7947 0.0005 5.5917 0.0005H3.5957C2.3927 0.0005 1.8597 0.5055 1.8597 1.7095ZM1.7227 20.4945H3.3497V31.7325H5.8517V20.4945H7.4647C8.6677 20.4945 9.1877 19.9745 9.1877 18.7715V8.1755C9.1877 6.9725 8.6677 6.4395 7.4647 6.4395H1.7227C0.5197 6.4395 -0.0003 6.9725 -0.0003 8.1755V18.7715C-0.0003 19.9745 0.5197 20.4945 1.7227 20.4945Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.927734375 31.19921875"
          className={className}
        >
          <path
            d="              M1.7907 4.6757H7.1367V1.6817C7.1367 0.4787 6.6307 -0.0003 5.4417 -0.0003H3.4867C2.2837 -0.0003 1.7907 0.4787 1.7907 1.6817ZM1.6817 20.1527H3.3227V31.1997H5.6187V20.1527H7.2457C8.4357 20.1527 8.9277 19.6737 8.9277 18.4707V7.9567C8.9277 6.7677 8.4357 6.2757 7.2457 6.2757H1.6817C0.4787 6.2757 -0.0003 6.7677 -0.0003 7.9567V18.4707C-0.0003 19.6737 0.4787 20.1527 1.6817 20.1527Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.392578125 32.12890625"
          className={className}
        >
          <path
            d="              M1.9137 4.8265H7.4647V1.7495C7.4647 0.5465 6.9047 -0.0005 5.7017 -0.0005H3.6777C2.4747 -0.0005 1.9137 0.5465 1.9137 1.7495ZM1.7497 20.7535H3.3767V32.1285H6.0297V20.7535H7.6427C8.8317 20.7535 9.3927 20.2065 9.3927 19.0035V8.3395C9.3927 7.1365 8.8317 6.5765 7.6427 6.5765H1.7497C0.5467 6.5765 -0.0003 7.1365 -0.0003 8.3395V19.0035C-0.0003 20.2065 0.5467 20.7535 1.7497 20.7535Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.490234375 29.50390625"
          className={className}
        >
          <path
            d="              M1.9137 4.2244H6.5767V1.3804C6.5767 0.4514 6.1117 0.0004 5.1817 0.0004H3.3087C2.3787 0.0004 1.9137 0.4514 1.9137 1.3804ZM1.3807 18.9764H3.5957V29.5044H4.9087V18.9764H7.1097C8.0387 18.9764 8.4907 18.5254 8.4907 17.5954V6.7674C8.4907 5.8384 8.0387 5.3864 7.1097 5.3864H1.3807C0.4647 5.3864 -0.0003 5.8384 -0.0003 6.7674V17.5954C-0.0003 18.5254 0.4647 18.9764 1.3807 18.9764Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 8.3671875 28.998046875"
          className={className}
        >
          <path
            d="              M1.9547 4.0876H6.4117V1.2856C6.4117 0.4376 5.9607 -0.0004 5.1137 -0.0004H3.2537C2.4067 -0.0004 1.9547 0.4376 1.9547 1.2856ZM1.2987 18.6206H3.6777V28.9976H4.6897V18.6206H7.0687C7.9157 18.6206 8.3677 18.1836 8.3677 17.3356V6.4116C8.3677 5.5646 7.9157 5.1266 7.0687 5.1266H1.2987C0.4517 5.1266 -0.0003 5.5646 -0.0003 6.4116V17.3356C-0.0003 18.1836 0.4517 18.6206 1.2987 18.6206Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
