import { IconProps } from "../../types"

export default function TwohIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.6796875 21.505859375"
          className={className}
        >
          <path
            d="              M22.723 21.5055C24.281 21.5055 25.566 20.2205 25.566 18.6485V13.0015H31.965V18.6485C31.965 20.2205 33.25 21.5055 34.822 21.5055C36.395 21.5055 37.68 20.2205 37.68 18.6485V2.8575C37.68 1.2855 36.395 -0.0005 34.822 -0.0005C33.25 -0.0005 31.965 1.2855 31.965 2.8575V8.4495H25.566V2.8575C25.566 1.2855 24.281 -0.0005 22.723 -0.0005C21.15 -0.0005 19.865 1.2855 19.865 2.8575V18.6485C19.865 20.2205 21.15 21.5055 22.723 21.5055ZM2.611 21.1775H14.41C15.777 21.1775 16.721 20.3025 16.721 18.9625C16.721 17.6095 15.791 16.7485 14.41 16.7485H7.396V16.6245L12.469 12.2225C14.916 10.0895 16.146 8.4905 16.146 6.2895C16.146 2.5835 13.002 0.0135 7.943 0.0135C3.855 0.0135 1.121 1.5995 0.178 4.4575C0.055 4.8395 0 5.1675 0 5.6195C0 6.9585 0.971 7.8885 2.406 7.8885C3.65 7.8885 4.443 7.3555 4.881 6.2895C4.99 5.9745 5.141 5.7285 5.318 5.4825C5.838 4.7985 6.645 4.3745 7.766 4.3745C9.42 4.3745 10.432 5.3185 10.432 6.6175C10.432 7.7105 9.83 8.6815 8.203 10.1035L1.518 15.9555C0.533 16.8165 0.027 17.7185 0.027 18.7445C0.027 20.2345 1.025 21.1775 2.611 21.1775Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.3828125 20.849609375"
          className={className}
        >
          <path
            d="              M20.672 20.8501C21.793 20.8501 22.709 19.9341 22.709 18.8121V11.9631H31.322V18.8121C31.322 19.9341 32.225 20.8501 33.346 20.8501C34.467 20.8501 35.383 19.9341 35.383 18.8121V2.0371C35.383 0.9161 34.467 0.0001 33.346 0.0001C32.225 0.0001 31.322 0.9161 31.322 2.0371V8.6271H22.709V2.0371C22.709 0.9161 21.793 0.0001 20.672 0.0001C19.551 0.0001 18.635 0.9161 18.635 2.0371V18.8121C18.635 19.9341 19.551 20.8501 20.672 20.8501ZM1.9 20.5351H13.48C14.506 20.5351 15.203 19.8791 15.203 18.8811C15.203 17.8831 14.506 17.2261 13.48 17.2261H5.428V17.1311L10.623 12.3321C13.48 9.6801 14.574 8.0661 14.574 5.9201C14.574 2.4881 11.607 0.0141 7.219 0.0141C3.732 0.0141 1.121 1.5861 0.232 4.2251C0.082 4.6481 0.027 5.0041 0.027 5.4001C0.027 6.4121 0.711 7.0961 1.764 7.0961C2.707 7.0961 3.24 6.6851 3.568 5.8101C3.678 5.4411 3.814 5.1271 4.02 4.8261C4.648 3.8691 5.729 3.2811 7.137 3.2811C9.064 3.2811 10.459 4.5251 10.459 6.1521C10.459 7.4781 9.844 8.4901 7.67 10.5411L1.135 16.6521C0.355 17.3631 0 17.9921 0 18.7441C0 19.8511 0.752 20.5351 1.9 20.5351Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.5859375 21.19140625"
          className={className}
        >
          <path
            d="              M21.7383 21.1911C23.0913 21.1911 24.1993 20.0841 24.1993 18.7171V12.5101H31.6503V18.7171C31.6503 20.0841 32.7573 21.1911 34.1113 21.1911C35.4653 21.1911 36.5863 20.0841 36.5863 18.7171V2.4611C36.5863 1.1071 35.4653 0.0001 34.1113 0.0001C32.7573 0.0001 31.6503 1.1071 31.6503 2.4611V8.5311H24.1993V2.4611C24.1993 1.1071 23.0913 0.0001 21.7383 0.0001C20.3843 0.0001 19.2773 1.1071 19.2773 2.4611V18.7171C19.2773 20.0841 20.3843 21.1911 21.7383 21.1911ZM2.2563 20.8771H13.9593C15.1623 20.8771 15.9963 20.0981 15.9963 18.9221C15.9963 17.7321 15.1753 16.9671 13.9593 16.9671H6.4533V16.8711L11.5933 12.2641C14.2183 9.8981 15.3943 8.2851 15.3943 6.1111C15.3943 2.5431 12.3323 0.0141 7.5883 0.0141C3.7733 0.0141 1.1073 1.5861 0.1913 4.3481C0.0543 4.7441 0.0003 5.0991 0.0003 5.5101C0.0003 6.6991 0.8343 7.5191 2.0913 7.5191C3.1993 7.5191 3.8693 7.0411 4.2523 6.0571C4.3613 5.7281 4.4983 5.4411 4.6893 5.1681C5.2633 4.3611 6.1933 3.8551 7.4513 3.8551C9.2423 3.8551 10.4313 4.9491 10.4313 6.3981C10.4313 7.6011 9.8163 8.5861 7.9433 10.3081L1.3263 16.2831C0.4373 17.0761 0.0003 17.8421 0.0003 18.7441C0.0003 20.0571 0.8883 20.8771 2.2563 20.8771Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.552734375 20.20703125"
          className={className}
        >
          <path
            d="              M18.211 20.2066C18.717 20.2066 19.127 19.7966 19.127 19.2906V10.6916H30.707V19.2906C30.707 19.7966 31.117 20.2066 31.637 20.2066C32.143 20.2066 32.553 19.7966 32.553 19.2906V0.9296C32.553 0.4106 32.143 -0.0004 31.637 -0.0004C31.117 -0.0004 30.707 0.4106 30.707 0.9296V9.0506H19.127V0.9296C19.127 0.4106 18.717 -0.0004 18.211 -0.0004C17.691 -0.0004 17.281 0.4106 17.281 0.9296V19.2906C17.281 19.7966 17.691 20.2066 18.211 20.2066ZM0.93 19.9606H12.592C13.111 19.9606 13.453 19.6326 13.453 19.1266C13.453 18.6076 13.111 18.2796 12.592 18.2796H2.639V18.2246L8.395 12.4686C11.662 9.2146 12.646 7.6016 12.646 5.5236C12.646 2.4196 9.953 0.0276 6.344 0.0276C3.555 0.0276 1.148 1.5176 0.314 3.8416C0.123 4.3476 0.027 4.8266 0.027 5.1956C0.027 5.7426 0.328 6.0836 0.861 6.0836C1.354 6.0836 1.572 5.8516 1.709 5.3186C1.805 4.8806 1.928 4.4566 2.133 4.0746C2.857 2.6656 4.361 1.6816 6.344 1.6816C8.805 1.6816 10.76 3.4456 10.76 5.6196C10.76 7.2736 10.021 8.4626 7.137 11.3616L0.574 17.9926C0.137 18.4296 0 18.6896 0 19.0726C0 19.6326 0.369 19.9606 0.93 19.9606Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.919921875 20.42578125"
          className={className}
        >
          <path
            d="              M19.359 20.426C20.193 20.426 20.877 19.742 20.877 18.908V11.307H30.898V18.908C30.898 19.742 31.582 20.426 32.416 20.426C33.25 20.426 33.92 19.742 33.92 18.908V1.504C33.92 0.67 33.25 0 32.416 0C31.582 0 30.898 0.67 30.898 1.504V8.736H20.877V1.504C20.877 0.67 20.193 0 19.359 0C18.525 0 17.855 0.67 17.855 1.504V18.908C17.855 19.742 18.525 20.426 19.359 20.426ZM1.436 20.125H12.879C13.686 20.125 14.219 19.605 14.219 18.826C14.219 18.047 13.699 17.527 12.879 17.527H4.156V17.445L9.447 12.387C12.551 9.42 13.563 7.793 13.563 5.674C13.563 2.434 10.719 0.014 6.768 0.014C3.65 0.014 1.121 1.586 0.26 4.074C0.109 4.512 0.041 4.895 0.041 5.264C0.041 6.057 0.547 6.59 1.354 6.59C2.105 6.59 2.475 6.262 2.721 5.496C2.83 5.1 2.98 4.73 3.186 4.402C3.883 3.281 5.127 2.57 6.74 2.57C8.846 2.57 10.486 4.02 10.486 5.838C10.486 7.328 9.844 8.367 7.342 10.828L0.889 17.09C0.246 17.705 0 18.156 0 18.744C0 19.605 0.561 20.125 1.436 20.125Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.11328125 20.193359375"
          className={className}
        >
          <path
            d="              M18.6347 20.1936C19.3187 20.1936 19.8517 19.6466 19.8517 18.9766V10.9236H30.6797V18.9766C30.6797 19.6466 31.2267 20.1936 31.8967 20.1936C32.5667 20.1936 33.1137 19.6466 33.1137 18.9766V1.2166C33.1137 0.5336 32.5667 -0.0004 31.8967 -0.0004C31.2267 -0.0004 30.6797 0.5336 30.6797 1.2166V8.8046H19.8517V1.2166C19.8517 0.5336 19.3187 -0.0004 18.6347 -0.0004C17.9647 -0.0004 17.4177 0.5336 17.4177 1.2166V18.9766C17.4177 19.6466 17.9647 20.1936 18.6347 20.1936ZM1.2027 19.9066H12.5647C13.2477 19.9066 13.6857 19.4686 13.6857 18.7986C13.6857 18.1426 13.2477 17.7046 12.5647 17.7046H3.4587V17.6366L8.7907 12.4416C12.0447 9.2836 13.0157 7.6426 13.0157 5.5366C13.0157 2.4066 10.2267 0.0136 6.5217 0.0136C3.6227 0.0136 1.1207 1.5856 0.3007 3.9926C0.1367 4.4566 0.0687 4.8396 0.0687 5.1816C0.0687 5.8656 0.4647 6.3166 1.1347 6.3166C1.7777 6.3166 2.0507 6.0156 2.2557 5.3316C2.3657 4.9086 2.5157 4.5256 2.7347 4.1696C3.4727 2.9536 4.8127 2.1736 6.5217 2.1736C8.7367 2.1736 10.4997 3.7326 10.4997 5.6736C10.4997 7.2456 9.8707 8.3126 7.1637 10.9786L0.7657 17.3356C0.1917 17.9106 -0.0003 18.2516 -0.0003 18.7576C-0.0003 19.4686 0.4787 19.9066 1.2027 19.9066Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.548828125 20.6171875"
          className={className}
        >
          <path
            d="              M19.92 20.6177C20.891 20.6177 21.656 19.8377 21.656 18.8807V11.5937H31.076V18.8807C31.076 19.8377 31.855 20.6177 32.813 20.6177C33.77 20.6177 34.549 19.8377 34.549 18.8807V1.7367C34.549 0.7797 33.77 -0.0003 32.813 -0.0003C31.855 -0.0003 31.076 0.7797 31.076 1.7367V8.6957H21.656V1.7367C21.656 0.7797 20.891 -0.0003 19.92 -0.0003C18.963 -0.0003 18.197 0.7797 18.197 1.7367V18.8807C18.197 19.8377 18.963 20.6177 19.92 20.6177ZM1.641 20.3167H13.139C14.041 20.3167 14.643 19.7287 14.643 18.8667C14.643 17.9787 14.041 17.4047 13.139 17.4047H4.703V17.3227L9.953 12.3727C12.947 9.5427 14 7.9157 14 5.7837C14 2.4607 11.102 0.0137 6.959 0.0137C3.678 0.0137 1.121 1.5997 0.246 4.1427C0.096 4.5797 0.041 4.9497 0.041 5.3317C0.041 6.2207 0.615 6.8227 1.531 6.8227C2.365 6.8227 2.803 6.4527 3.09 5.6327C3.199 5.2637 3.336 4.9087 3.555 4.5937C4.211 3.5407 5.387 2.8847 6.904 2.8847C8.941 2.8847 10.473 4.2517 10.473 5.9887C10.473 7.3967 9.844 8.4357 7.479 10.7047L0.998 16.8987C0.287 17.5687 0 18.0877 0 18.7577C0 19.7147 0.643 20.3167 1.641 20.3167Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.841796875 20.248046875"
          className={className}
        >
          <path
            d="              M17.65 20.2476C17.965 20.2476 18.197 20.0016 18.197 19.7016V10.3636H30.748V19.7016C30.748 20.0016 30.994 20.2476 31.295 20.2476C31.609 20.2476 31.842 20.0016 31.842 19.7016V0.5466C31.842 0.2326 31.609 -0.0004 31.295 -0.0004C30.994 -0.0004 30.748 0.2326 30.748 0.5466V9.3656H18.197V0.5466C18.197 0.2326 17.965 -0.0004 17.65 -0.0004C17.35 -0.0004 17.104 0.2326 17.104 0.5466V19.7016C17.104 20.0016 17.35 20.2476 17.65 20.2476ZM0.588 20.0296H12.646C12.961 20.0296 13.166 19.8376 13.166 19.5366C13.166 19.2366 12.961 19.0586 12.646 19.0586H1.572V19.0036L7.861 12.5236C11.17 9.1326 12.195 7.5746 12.195 5.5236C12.195 2.4336 9.611 0.0406 6.139 0.0406C3.5 0.0406 1.203 1.4356 0.355 3.6506C0.123 4.2106 0 4.7986 0 5.2086C0 5.5786 0.178 5.7836 0.506 5.7836C0.793 5.7836 0.943 5.6196 1.012 5.3046C1.066 4.8536 1.162 4.3746 1.354 3.9516C2.078 2.2966 3.773 1.0256 6.139 1.0256C8.928 1.0256 11.102 3.0626 11.102 5.5506C11.102 7.3146 10.24 8.6676 7.137 11.8536L0.342 18.8536C0.082 19.1136 0 19.2776 0 19.4956C0 19.8376 0.246 20.0296 0.588 20.0296Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.486328125 20.26171875"
          className={className}
        >
          <path
            d="              M17.3767 20.2616C17.5817 20.2616 17.7327 20.1116 17.7327 19.9066V10.1996H30.7887V19.9066C30.7887 20.1116 30.9397 20.2616 31.1447 20.2616C31.3357 20.2616 31.4867 20.1116 31.4867 19.9066V0.3416C31.4867 0.1506 31.3357 -0.0004 31.1447 -0.0004C30.9397 -0.0004 30.7887 0.1506 30.7887 0.3416V9.5156H17.7327V0.3416C17.7327 0.1506 17.5817 -0.0004 17.3767 -0.0004C17.1857 -0.0004 17.0347 0.1506 17.0347 0.3416V19.9066C17.0347 20.1116 17.1857 20.2616 17.3767 20.2616ZM0.4237 20.0706H12.7017C12.8927 20.0706 13.0297 19.9476 13.0297 19.7556C13.0297 19.5506 12.8927 19.4546 12.7017 19.4546H1.0387V19.4006L7.6157 12.5506C10.9237 9.0916 11.9767 7.5466 11.9767 5.5096C11.9767 2.4476 9.4477 0.0546 6.0297 0.0546C3.4727 0.0546 1.2437 1.3946 0.3967 3.5546C0.1507 4.1426 -0.0003 4.7986 -0.0003 5.2226C-0.0003 5.4826 0.1097 5.6196 0.3417 5.6196C0.5197 5.6196 0.6427 5.4956 0.6567 5.3046C0.7107 4.8266 0.7797 4.3336 0.9707 3.8826C1.6817 2.1056 3.4867 0.6836 6.0297 0.6836C8.9957 0.6836 11.2927 2.8576 11.2927 5.5096C11.2927 7.3286 10.3637 8.7636 7.1367 12.1136L0.2457 19.3046C0.0687 19.4686 0.0277 19.5646 0.0277 19.7146C0.0277 19.9476 0.1917 20.0706 0.4237 20.0706Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
