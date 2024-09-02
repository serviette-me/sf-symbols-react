import { IconProps } from "../../types"

export default function CheckmarkShieldFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.28125 28.1640625"
          className={className}
        >
          <path
            d="              M12.1404 28.164C12.4824 28.164 12.9064 28.014 13.2754 27.836C21.3554 23.98 24.2814 21.492 24.2814 16.598V7.041C24.2814 4.621 23.6254 3.5 21.4104 2.557C20.3574 2.119 15.7094 0.656 14.7934 0.396C13.9864 0.164 12.9334 0 12.1404 0C11.3614 0 10.3084 0.164 9.4884 0.396C8.5724 0.656 3.9374 2.119 2.8844 2.557C0.6704 3.486 0.0004 4.621 0.0004 7.041V16.598C0.0004 21.492 2.9534 23.953 11.0054 27.836C11.3754 28.014 11.8124 28.164 12.1404 28.164ZM10.6644 20.139C9.9124 20.139 9.3104 19.769 8.8184 19.195L5.8244 15.736C5.4144 15.244 5.2634 14.861 5.2634 14.369C5.2634 13.303 6.1664 12.469 7.2184 12.469C7.8204 12.469 8.2574 12.728 8.6684 13.166L10.6504 15.435L15.4634 7.889C15.9414 7.15 16.4744 6.781 17.1724 6.781C18.2244 6.781 19.1684 7.574 19.1684 8.627C19.1684 9.01 19.0454 9.447 18.7444 9.871L12.4684 19.141C12.0454 19.756 11.3754 20.139 10.6644 20.139Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.32421875 27.671875"
          className={className}
        >
          <path
            d="              M11.6617 27.672C11.9357 27.672 12.3187 27.563 12.6877 27.385C20.6037 23.42 23.3247 21.15 23.3247 16.256V6.316C23.3247 4.402 22.6957 3.623 21.0137 2.912C19.6877 2.365 14.8067 0.697 13.5627 0.301C12.9747 0.123 12.2497 0 11.6617 0C11.0747 0 10.3637 0.137 9.7757 0.301C8.5177 0.684 3.6367 2.365 2.3107 2.912C0.6427 3.609 -0.0003 4.402 -0.0003 6.316V16.256C-0.0003 21.15 2.8027 23.283 10.6507 27.385C11.0057 27.576 11.3887 27.672 11.6617 27.672ZM10.1587 19.961C9.5427 19.961 9.0647 19.674 8.6267 19.154L5.4277 15.313C5.1137 14.943 4.9767 14.588 4.9767 14.191C4.9767 13.344 5.6597 12.674 6.5077 12.674C6.9997 12.674 7.3687 12.865 7.7387 13.316L10.1307 16.242L15.4497 7.779C15.8187 7.205 16.2557 6.918 16.7887 6.918C17.6227 6.918 18.3617 7.506 18.3617 8.354C18.3617 8.695 18.2247 9.078 17.9787 9.434L11.6347 19.127C11.2797 19.647 10.7457 19.961 10.1587 19.961Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.84375 27.931640625"
          className={className}
        >
          <path
            d="              M11.9224 27.932C12.2364 27.932 12.6324 27.795 13.0024 27.617C21.0134 23.707 23.8434 21.328 23.8434 16.434V6.686C23.8434 4.512 23.1874 3.541 21.2324 2.721C20.0434 2.229 15.2854 0.67 14.2184 0.342C13.5074 0.137 12.6194 0 11.9224 0C11.2384 0 10.3364 0.15 9.6254 0.342C8.5584 0.67 3.8004 2.229 2.6254 2.721C0.6564 3.541 0.0004 4.512 0.0004 6.686V16.434C0.0004 21.328 2.8844 23.639 10.8414 27.617C11.2114 27.795 11.6214 27.932 11.9224 27.932ZM10.4314 20.043C9.7484 20.043 9.2014 19.715 8.7364 19.168L5.6464 15.531C5.2774 15.094 5.1404 14.725 5.1404 14.273C5.1404 13.316 5.9334 12.564 6.8904 12.564C7.4374 12.564 7.8474 12.783 8.2304 13.234L10.4184 15.818L15.4634 7.82C15.8864 7.164 16.3794 6.836 17.0074 6.836C17.9514 6.836 18.7984 7.533 18.7984 8.49C18.7984 8.859 18.6624 9.27 18.3884 9.652L12.0864 19.127C11.6894 19.701 11.0884 20.043 10.4314 20.043Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.943359375 26.90625"
          className={className}
        >
          <path
            d="              M10.9644 26.9058C11.2114 26.9058 11.5524 26.7828 11.8674 26.6188C19.5234 22.3808 21.9434 20.5898 21.9434 15.9418V5.6468C21.9434 4.1968 21.4104 3.7188 20.1664 3.2268C18.2244 2.4468 13.9724 0.8618 12.0454 0.2048C11.6894 0.0818 11.3344 -0.0002 10.9644 -0.0002C10.5954 -0.0002 10.2534 0.0818 9.8844 0.2048C7.9574 0.8748 3.7054 2.4608 1.7774 3.2268C0.5194 3.7048 0.0004 4.1968 0.0004 5.6468V15.9418C0.0004 20.5898 2.5294 22.1898 10.0624 26.6188C10.3774 26.7968 10.7184 26.9058 10.9644 26.9058ZM9.4614 19.4958C9.1054 19.4958 8.8324 19.3458 8.5454 18.9898L4.8394 14.5468C4.6754 14.3278 4.5804 14.0818 4.5804 13.8498C4.5804 13.3708 4.9494 12.9878 5.4274 12.9878C5.7284 12.9878 5.9614 13.0838 6.2074 13.4258L9.4204 17.3628L15.7094 7.4098C15.9004 7.0958 16.1874 6.9318 16.4614 6.9318C16.9254 6.9318 17.3494 7.2598 17.3494 7.7378C17.3494 7.9708 17.2264 8.2168 17.1034 8.4218L10.3364 18.9898C10.1174 19.3188 9.8304 19.4958 9.4614 19.4958Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.708984375 27.357421875"
          className={className}
        >
          <path
            d="              M11.348 27.3579C11.594 27.3579 11.949 27.2619 12.305 27.0839C20.125 23.0509 22.709 20.9319 22.709 16.0369V5.8519C22.709 4.2659 22.094 3.6919 20.754 3.1309C19.264 2.5159 14.219 0.7249 12.756 0.2329C12.318 0.0959 11.812 -0.0001 11.348 -0.0001C10.896 -0.0001 10.391 0.1089 9.953 0.2329C8.477 0.6969 3.445 2.5159 1.955 3.1309C0.615 3.6779 0 4.2659 0 5.8519V16.0369C0 20.9319 2.693 22.8589 10.404 27.0839C10.76 27.2759 11.115 27.3579 11.348 27.3579ZM9.83 19.8379C9.311 19.8379 8.9 19.6189 8.504 19.1129L5.154 15.0389C4.908 14.7379 4.785 14.4099 4.785 14.0679C4.785 13.3709 5.346 12.7969 6.043 12.7969C6.467 12.7969 6.795 12.9609 7.15 13.3989L9.789 16.7479L15.436 7.6969C15.736 7.2329 16.119 6.9859 16.543 6.9859C17.227 6.9859 17.855 7.4649 17.855 8.1759C17.855 8.4899 17.691 8.8319 17.5 9.1329L11.088 19.1129C10.787 19.5779 10.35 19.8379 9.83 19.8379Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.3671875 27.1796875"
          className={className}
        >
          <path
            d="              M11.184 27.1802C11.402 27.1802 11.744 27.0972 12.086 26.9202C19.865 22.8462 22.367 20.8082 22.367 15.9002V5.5922C22.367 4.1832 21.766 3.7322 20.617 3.2542C19.018 2.5972 13.904 0.7382 12.318 0.1912C11.949 0.0682 11.566 0.0002 11.184 0.0002C10.801 0.0002 10.418 0.0822 10.062 0.1912C8.463 0.7112 3.35 2.6112 1.75 3.2542C0.615 3.7192 0 4.1832 0 5.5922V15.9002C0 20.8082 2.639 22.6132 10.281 26.9202C10.637 27.1112 10.965 27.1802 11.184 27.1802ZM9.652 19.7562C9.187 19.7562 8.805 19.5782 8.449 19.0992L5.018 14.8882C4.812 14.6152 4.689 14.3012 4.689 14.0002C4.689 13.3712 5.168 12.8652 5.797 12.8652C6.18 12.8652 6.48 13.0022 6.822 13.4532L9.598 17.0352L15.436 7.6562C15.695 7.2322 16.051 7.0272 16.42 7.0272C17.008 7.0272 17.568 7.4372 17.568 8.0662C17.568 8.3812 17.404 8.6952 17.227 8.9692L10.801 19.0992C10.514 19.5372 10.117 19.7562 9.652 19.7562Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.982421875 27.494140625"
          className={className}
        >
          <path
            d="              M11.4977 27.4943C11.7577 27.4943 12.1137 27.3853 12.4687 27.2073C20.3437 23.2153 22.9827 21.0273 22.9827 16.1333V6.0562C22.9827 4.3203 22.3537 3.6642 20.8767 3.0353C19.4547 2.4473 14.4787 0.7112 13.1117 0.2602C12.6057 0.1092 12.0037 0.0003 11.4977 0.0003C10.9787 0.0003 10.3907 0.1092 9.8847 0.2602C8.5037 0.6973 3.5407 2.4473 2.1187 3.0353C0.6287 3.6503 -0.0003 4.3203 -0.0003 6.0562V16.1333C-0.0003 21.0273 2.7477 23.0373 10.5137 27.2073C10.8687 27.3983 11.2387 27.4943 11.4977 27.4943ZM9.9807 19.8793C9.4197 19.8793 8.9687 19.6333 8.5727 19.1273L5.2777 15.1623C5.0037 14.8203 4.8807 14.4923 4.8807 14.1233C4.8807 13.3573 5.4827 12.7423 6.2477 12.7423C6.6997 12.7423 7.0547 12.9203 7.4097 13.3573L9.9397 16.5293L15.4497 7.7383C15.7777 7.2183 16.1877 6.9593 16.6657 6.9593C17.4047 6.9593 18.0747 7.4782 18.0747 8.2583C18.0747 8.5863 17.9237 8.9413 17.7187 9.2563L11.3337 19.1133C11.0057 19.6052 10.5277 19.8793 9.9807 19.8793Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.3828125 26.537109375"
          className={className}
        >
          <path
            d="              M10.6912 26.5367C10.9922 26.5367 11.3342 26.3867 11.5942 26.2367C19.0992 21.7797 21.3832 20.3027 21.3832 15.9827V5.7147C21.3832 4.2247 20.9722 3.7187 19.5642 3.1857C17.1992 2.2697 14.0962 1.0387 11.7032 0.2047C11.3472 0.0817 11.0332 -0.0003 10.6912 -0.0003C10.3492 -0.0003 10.0352 0.0957 9.6802 0.2047C7.3142 1.0937 4.1972 2.2697 1.8182 3.1857C0.4242 3.7047 0.0002 4.2247 0.0002 5.7147V15.9827C0.0002 20.3027 2.3792 21.6427 9.8032 26.2367C10.0492 26.3867 10.4042 26.5367 10.6912 26.5367ZM9.2422 19.1407C9.0102 19.1407 8.8732 19.0587 8.7092 18.8667L4.6072 14.0957C4.5122 13.9457 4.4432 13.8087 4.4432 13.6587C4.4432 13.3577 4.6892 13.1387 4.9492 13.1387C5.1402 13.1387 5.2912 13.2067 5.4282 13.3847L9.2152 17.8147L16.0922 7.0957C16.2152 6.9317 16.3792 6.8227 16.5562 6.8227C16.8162 6.8227 17.0762 7.0407 17.0762 7.3147C17.0762 7.4377 17.0082 7.5877 16.9532 7.6977L9.7482 18.8667C9.6112 19.0447 9.4472 19.1407 9.2422 19.1407Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.08203125 26.345703125"
          className={className}
        >
          <path
            d="              M10.5409 26.346C10.8559 26.346 11.2109 26.168 11.4299 26.031C18.8539 21.451 21.0819 20.139 21.0819 15.996V5.742C21.0819 4.225 20.7269 3.719 19.2499 3.158C16.6519 2.174 14.1369 1.121 11.5119 0.205C11.1699 0.082 10.8689 0 10.5409 0C10.2129 0 9.9119 0.082 9.5699 0.205C6.9589 1.189 4.4299 2.174 1.8319 3.158C0.3559 3.691 -0.0001 4.225 -0.0001 5.742V15.996C-0.0001 20.139 2.2969 21.355 9.6519 26.031C9.8709 26.168 10.2269 26.346 10.5409 26.346ZM9.1059 18.949C8.9549 18.949 8.8729 18.895 8.7769 18.785L4.4849 13.85C4.4159 13.754 4.3609 13.645 4.3609 13.549C4.3609 13.344 4.5259 13.207 4.7029 13.207C4.8259 13.207 4.9359 13.262 5.0179 13.357L9.0919 18.047L16.2699 6.932C16.3519 6.836 16.4749 6.74 16.5839 6.74C16.7479 6.74 16.9259 6.918 16.9259 7.082C16.9259 7.15 16.8849 7.246 16.8579 7.314L9.4339 18.785C9.3379 18.881 9.2419 18.949 9.1059 18.949Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
