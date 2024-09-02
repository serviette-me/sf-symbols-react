import { IconProps } from "../../types"

export default function SmokeIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.533203125 26.919921875"
          className={className}
        >
          <path
            d="              M0 12.8376C0 16.1326 2.078 18.5386 5.045 19.3596C4.977 19.7286 4.949 20.1116 4.949 20.4946C4.949 24.1716 7.725 26.9196 11.525 26.9196H28.246C32.457 26.9196 35.533 23.9666 35.533 19.9886C35.52 17.0626 33.701 14.4646 30.953 13.4536C30.393 10.6226 28.328 8.3676 25.676 7.5056C24.965 4.5806 22.6 2.5156 19.701 2.5156C19.154 2.5156 18.539 2.5836 18.02 2.7346C16.393 0.7656 14.465 -0.0004 12.209 -0.0004C8.477 -0.0004 5.291 2.6936 4.566 6.3166C1.846 7.3006 0 9.9126 0 12.8376ZM4.307 12.8376C4.307 11.3746 5.51 10.1446 7.232 9.8026C8.053 9.6386 8.367 9.3786 8.449 8.5996C8.668 5.9476 10.104 4.3066 12.209 4.3066C13.754 4.3066 14.67 5.0856 15.805 6.5076C16.215 7.0546 16.775 7.2736 17.541 7.0816C18.088 6.9316 18.648 6.8356 18.99 6.8356C19.742 6.8356 20.357 7.1096 20.795 7.5746C19.551 8.0256 18.443 8.8046 17.609 9.9126C17.186 9.8576 16.748 9.8166 16.311 9.8166C13.494 9.8306 10.924 11.6756 10.076 14.2596C9.119 14.4786 8.244 14.8746 7.506 15.4216C5.605 15.4216 4.307 14.3826 4.307 12.8376ZM11.525 22.6136C10.145 22.6136 9.256 21.7796 9.256 20.4806C9.256 19.1266 10.227 18.3616 11.99 18.0056C12.865 17.8286 13.125 17.6506 13.357 16.8166C13.877 14.9566 14.93 13.9866 16.707 13.9866C17.322 13.9866 17.773 14.0956 18.348 14.2466C19.168 14.4786 19.496 14.3966 19.947 13.7536C20.891 12.3866 21.889 11.4566 23.488 11.4566C25.266 11.4566 26.633 12.6466 27.111 15.2036C27.275 16.0236 27.535 16.4336 28.314 16.6656C30.598 17.3766 31.213 18.5256 31.213 19.9886C31.213 21.6016 30.051 22.6136 28.246 22.6136Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.09765625 25.45703125"
          className={className}
        >
          <path
            d="              M0 12.2093C0 15.2173 1.996 17.5683 4.977 18.2523C4.867 18.6893 4.813 19.1543 4.813 19.6333C4.813 22.9823 7.342 25.4573 10.801 25.4573H27.398C31.35 25.4573 34.098 22.7223 34.098 19.1273C34.098 16.3103 32.279 13.8903 29.613 13.0433C29.176 10.1853 27.098 7.8883 24.404 7.1503C23.83 4.4573 21.602 2.5153 18.895 2.5153C18.279 2.5153 17.678 2.5843 17.158 2.7343C15.559 0.8203 13.74 0.0003 11.58 0.0003C8.012 0.0003 5.004 2.6523 4.471 6.1383C1.805 6.9723 0 9.4203 0 12.2093ZM3.186 12.2093C3.186 10.5273 4.498 9.1193 6.248 8.8453C7.068 8.7223 7.396 8.3943 7.438 7.5743C7.52 5.0313 9.283 3.1853 11.58 3.1853C13.193 3.1853 14.328 3.9923 15.354 5.4413C15.723 5.9883 16.242 6.1663 16.98 5.9473C17.445 5.8243 17.992 5.7013 18.471 5.7013C19.537 5.7013 20.426 6.2483 20.904 7.0953C19.373 7.4513 17.992 8.3403 17.008 9.6383C16.557 9.5563 16.064 9.4883 15.572 9.4883C12.852 9.5023 10.459 11.3613 9.775 13.9183C8.641 14.1093 7.615 14.6013 6.809 15.2993C4.621 15.2173 3.186 13.9593 3.186 12.2093ZM10.801 22.2713C9.119 22.2713 7.998 21.2183 7.998 19.6193C7.998 18.0603 9.201 16.9803 11.006 16.7893C11.922 16.6933 12.236 16.4473 12.387 15.6273C12.729 13.7673 13.973 12.6053 15.777 12.6053C16.352 12.6053 16.734 12.7013 17.309 12.8793C18.088 13.1523 18.471 13.0433 18.84 12.4143C19.674 11.0193 20.945 10.1033 22.627 10.0903C24.746 10.0903 26.428 11.7173 26.674 14.2323C26.742 15.1213 27.016 15.4763 27.863 15.6403C29.914 16.0923 30.912 17.4593 30.912 19.1273C30.912 21.0273 29.504 22.2713 27.398 22.2713Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.849609375 26.236328125"
          className={className}
        >
          <path
            d="              M0 12.5508C0 15.7088 2.037 18.0878 5.004 18.8398C4.922 19.2498 4.881 19.6598 4.881 20.0978C4.881 23.6248 7.547 26.2368 11.184 26.2368H27.836C31.938 26.2368 34.85 23.3928 34.85 19.5918C34.85 16.7208 33.031 14.1918 30.324 13.2618C29.818 10.4318 27.74 8.1488 25.074 7.3418C24.432 4.5258 22.135 2.5298 19.318 2.5298C18.744 2.5298 18.129 2.5838 17.609 2.7478C15.996 0.7928 14.123 -0.0002 11.908 -0.0002C8.258 0.0138 5.154 2.6798 4.525 6.2478C1.832 7.1508 0 9.6798 0 12.5508ZM3.787 12.5508C3.787 10.9788 5.031 9.6658 6.768 9.3518C7.588 9.2148 7.902 8.9278 7.971 8.1208C8.121 5.5238 9.721 3.7868 11.908 3.7868C13.48 3.7868 14.506 4.5668 15.586 6.0158C15.982 6.5628 16.529 6.7678 17.268 6.5488C17.773 6.4118 18.334 6.3028 18.744 6.3028C19.646 6.3028 20.385 6.6988 20.863 7.3418C19.469 7.7518 18.238 8.5858 17.336 9.7888C16.898 9.7208 16.42 9.6798 15.969 9.6798C13.193 9.6798 10.705 11.5258 9.939 14.1098C8.887 14.3148 7.957 14.7518 7.164 15.3668C5.141 15.3258 3.787 14.1778 3.787 12.5508ZM11.184 22.4628C9.652 22.4628 8.668 21.5198 8.668 20.0838C8.668 18.6348 9.748 17.7188 11.525 17.4458C12.414 17.2948 12.701 17.0898 12.893 16.2698C13.33 14.4098 14.479 13.3438 16.27 13.3438C16.871 13.3438 17.281 13.4398 17.855 13.6038C18.662 13.8498 19.018 13.7678 19.428 13.1248C20.316 11.7578 21.438 10.8148 23.078 10.8148C25.02 10.8148 26.537 12.2088 26.906 14.7518C27.029 15.5998 27.289 15.9828 28.096 16.1878C30.27 16.7758 31.076 18.0328 31.076 19.5918C31.076 21.3418 29.791 22.4628 27.836 22.4628Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.470703125 23.8984375"
          className={className}
        >
          <path
            d="              M0 11.525C0 14.178 1.859 16.475 4.908 16.926C4.662 17.514 4.525 18.156 4.525 18.826C4.525 21.752 6.727 23.898 9.762 23.898H26.496C30.051 23.898 32.471 21.492 32.471 18.307C32.457 15.641 30.611 13.398 28 12.824C27.795 9.898 25.703 7.492 22.941 6.918C22.586 4.43 20.535 2.598 18.047 2.598C17.309 2.598 16.762 2.68 16.188 2.83C14.711 0.943 12.988 0 10.883 0C7.492 0.014 4.689 2.666 4.443 6.029C1.791 6.645 0 8.887 0 11.525ZM1.6 11.525C1.6 9.447 3.145 7.793 5.031 7.533C5.756 7.438 6.029 7.137 6.029 6.357C6.002 3.787 8.203 1.6 10.883 1.6C12.66 1.613 14.109 2.529 15.053 4.02C15.367 4.512 15.805 4.594 16.434 4.402C16.803 4.307 17.295 4.197 17.938 4.197C19.551 4.197 20.904 5.25 21.273 6.809C19.209 6.918 17.459 7.957 16.311 9.584C15.736 9.42 15.203 9.324 14.615 9.324C11.977 9.324 9.83 11.211 9.365 13.781C7.998 13.891 6.768 14.479 5.906 15.395C3.227 15.271 1.6 13.604 1.6 11.525ZM9.762 22.299C7.602 22.299 6.125 20.877 6.125 18.826C6.125 16.898 7.684 15.381 9.666 15.34C10.486 15.313 10.828 15.094 10.883 14.383C11.074 12.359 12.619 10.924 14.615 10.924C15.148 10.924 15.504 11.006 16.064 11.211C16.721 11.471 17.076 11.361 17.363 10.828C18.17 9.338 19.77 8.408 21.67 8.395C24.35 8.395 26.414 10.568 26.414 13.234C26.414 14.068 26.605 14.273 27.412 14.369C29.367 14.602 30.871 16.297 30.871 18.307C30.871 20.672 29.094 22.299 26.496 22.299Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.1953125 24.52734375"
          className={className}
        >
          <path
            d="              M0 11.8124C0 14.6284 1.928 16.9664 4.949 17.5544C4.799 18.0334 4.73 18.5524 4.73 19.0854C4.73 22.2304 7.096 24.5274 10.336 24.5274H26.852C30.639 24.5274 33.195 21.9294 33.195 18.5804C33.182 15.8454 31.363 13.5214 28.752 12.7834C28.41 9.9124 26.305 7.6014 23.584 6.9454C23.133 4.4024 20.986 2.5154 18.389 2.5154C17.732 2.5154 17.117 2.5974 16.611 2.7484C15.025 0.8474 13.289 0.0004 11.184 0.0004C7.725 0.0134 4.826 2.6254 4.402 6.0434C1.791 6.7674 0 9.1054 0 11.8124ZM2.475 11.8124C2.475 9.9804 3.855 8.4624 5.619 8.2444C6.439 8.1344 6.768 7.7794 6.781 6.9184C6.795 4.4574 8.75 2.4604 11.184 2.4604C12.824 2.4744 14.109 3.3084 15.053 4.7714C15.408 5.3044 15.914 5.4554 16.625 5.2364C17.021 5.1134 17.582 4.9904 18.143 4.9904C19.4 4.9904 20.48 5.7424 20.932 6.8494C19.223 7.1364 17.691 8.0664 16.639 9.4744C16.16 9.3654 15.627 9.2834 15.121 9.2834C12.441 9.2964 10.158 11.1564 9.598 13.7124C8.326 13.8774 7.219 14.4234 6.371 15.2304C4.006 15.1074 2.475 13.6994 2.475 11.8124ZM10.336 22.0664C8.463 22.0664 7.191 20.8634 7.191 19.0854C7.191 17.3904 8.545 16.1054 10.377 16.0234C11.307 15.9684 11.676 15.6954 11.771 14.8754C11.99 13.0154 13.357 11.7304 15.189 11.7304C15.736 11.7304 16.064 11.8264 16.625 12.0174C17.391 12.3044 17.801 12.1814 18.129 11.5804C18.881 10.1584 20.344 9.2424 22.066 9.2284C24.418 9.2284 26.305 11.1154 26.387 13.6174C26.414 14.5464 26.688 14.8614 27.59 14.9984C29.477 15.2854 30.721 16.7894 30.721 18.5804C30.721 20.6714 29.162 22.0664 26.852 22.0664Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.67578125 24.0078125"
          className={className}
        >
          <path
            d="              M0 11.5937C0 14.3007 1.9 16.6387 4.936 17.1587C4.771 17.6637 4.676 18.2107 4.676 18.7847C4.676 21.7927 6.945 24.0077 10.076 24.0077H26.551C30.229 24.0077 32.676 21.4787 32.676 18.2657C32.662 15.5857 30.857 13.3297 28.26 12.6467C27.973 9.7617 25.854 7.4237 23.119 6.8357C22.736 4.3747 20.631 2.5297 18.102 2.5297C17.418 2.5297 16.816 2.6117 16.297 2.7477C14.725 0.8747 13.029 -0.0003 10.951 -0.0003C7.561 0.0137 4.73 2.6247 4.361 5.9887C1.777 6.6587 0 8.9417 0 11.5937ZM2.064 11.5937C2.064 9.6797 3.5 8.1077 5.264 7.9027C6.098 7.8067 6.412 7.4237 6.412 6.5487C6.371 4.1287 8.449 2.0647 10.951 2.0647C12.619 2.0777 13.986 2.9117 14.902 4.3887C15.23 4.9357 15.723 5.0587 16.42 4.8397C16.789 4.7167 17.35 4.5937 17.951 4.5937C19.332 4.5937 20.535 5.4827 20.945 6.7407C19.127 6.9587 17.514 7.9157 16.42 9.3787C15.928 9.2697 15.381 9.1737 14.848 9.1737C12.209 9.1877 9.994 11.0467 9.488 13.5897C8.162 13.7407 7 14.3147 6.139 15.1897C3.664 15.0527 2.064 13.5627 2.064 11.5937ZM10.076 21.9437C8.094 21.9437 6.74 20.6587 6.74 18.7847C6.74 17.0077 8.176 15.6137 10.021 15.5857C10.965 15.5587 11.361 15.2717 11.43 14.4647C11.58 12.5917 13.002 11.2387 14.848 11.2387C15.381 11.2387 15.695 11.3207 16.256 11.5387C16.994 11.8257 17.432 11.7027 17.732 11.1017C18.443 9.6797 20.002 8.7637 21.752 8.7497C24.227 8.7497 26.223 10.7867 26.223 13.2757C26.223 14.2187 26.496 14.5197 27.426 14.6287C29.23 14.8337 30.611 16.4197 30.611 18.2657C30.611 20.4667 28.971 21.9437 26.551 21.9437Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.578125 24.9375"
          className={className}
        >
          <path
            d="              M0 11.9905C0 14.8885 1.955 17.2405 4.963 17.8555C4.826 18.3205 4.758 18.8125 4.758 19.3325C4.758 22.5585 7.205 24.9375 10.541 24.9375H27.084C30.939 24.9375 33.578 22.2715 33.578 18.8125C33.578 16.0505 31.76 13.6855 29.121 12.8925C28.738 10.0355 26.646 7.7245 23.939 7.0405C23.434 4.4295 21.246 2.5295 18.607 2.5295C17.965 2.5295 17.363 2.5975 16.844 2.7485C15.258 0.8475 13.48 -0.0005 11.348 -0.0005C7.848 0.0135 4.908 2.6385 4.43 6.0975C1.805 6.8635 0 9.2555 0 11.9905ZM2.775 11.9905C2.775 10.2265 4.143 8.7495 5.893 8.5035C6.713 8.3805 7.041 8.0525 7.068 7.2055C7.109 4.7035 8.982 2.7755 11.348 2.7755C12.988 2.7895 14.205 3.6095 15.189 5.0725C15.545 5.6055 16.051 5.7695 16.775 5.5505C17.199 5.4275 17.76 5.3045 18.279 5.3045C19.469 5.3045 20.453 5.9605 20.932 6.9585C19.291 7.2735 17.828 8.1755 16.803 9.5425C16.338 9.4605 15.818 9.3785 15.313 9.3785C12.619 9.3925 10.295 11.2515 9.68 13.8085C8.463 13.9865 7.396 14.5055 6.563 15.2575C4.266 15.1625 2.775 13.8225 2.775 11.9905ZM10.541 22.1625C8.736 22.1625 7.547 21.0135 7.547 19.3185C7.547 17.6915 8.832 16.4885 10.637 16.3515C11.566 16.2835 11.922 16.0235 12.045 15.2165C12.305 13.3435 13.617 12.1135 15.436 12.1135C15.996 12.1135 16.352 12.2085 16.926 12.4005C17.691 12.6735 18.088 12.5505 18.43 11.9495C19.223 10.5405 20.604 9.6245 22.299 9.6115C24.555 9.6115 26.359 11.3745 26.51 13.8765C26.564 14.7925 26.824 15.1345 27.713 15.2855C29.654 15.6405 30.803 17.0895 30.803 18.8125C30.803 20.8225 29.313 22.1625 27.084 22.1625Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.197265625 23.734375"
          className={className}
        >
          <path
            d="              M0 11.43C0 14.027 1.832 16.283 4.895 16.625C4.539 17.295 4.334 18.061 4.334 18.881C4.334 21.697 6.426 23.734 9.352 23.734H26.441C29.818 23.734 32.197 21.479 32.197 18.348C32.197 15.695 30.27 13.494 27.645 13.043C27.549 10.063 25.512 7.561 22.695 7.027C22.395 4.498 20.385 2.693 17.979 2.693C17.172 2.693 16.68 2.762 16.051 2.926C14.684 1.025 12.92 0 10.787 0C7.424 0 4.635 2.707 4.525 6.07C1.818 6.617 0 8.791 0 11.43ZM0.984 11.43C0.984 9.119 2.666 7.369 4.717 7.027C5.305 6.945 5.51 6.74 5.51 6.098C5.51 3.322 7.875 0.984 10.787 0.984C12.701 0.984 14.273 2.01 15.271 3.527C15.559 3.951 15.914 3.965 16.461 3.828C16.816 3.746 17.24 3.678 17.924 3.678C19.838 3.678 21.383 4.949 21.684 6.932C21.643 6.932 21.602 6.932 21.561 6.932C19.209 6.932 17.336 8.039 16.16 9.83C15.477 9.611 14.957 9.502 14.314 9.502C11.676 9.502 9.598 11.402 9.215 14.014C7.766 14.068 6.467 14.697 5.578 15.668C2.652 15.559 0.984 13.645 0.984 11.43ZM9.352 22.75C6.973 22.75 5.318 21.15 5.318 18.881C5.318 16.748 7.027 15.053 9.215 14.984C9.857 14.971 10.117 14.848 10.172 14.287C10.418 12.059 12.127 10.486 14.314 10.486C14.848 10.486 15.258 10.568 15.818 10.773C16.365 10.979 16.625 10.91 16.885 10.445C17.801 8.873 19.469 7.916 21.561 7.916C24.5 7.916 26.674 10.268 26.674 13.18C26.674 13.863 26.756 13.918 27.398 14C29.559 14.273 31.213 16.133 31.213 18.348C31.213 20.945 29.271 22.75 26.441 22.75Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.060546875 23.666015625"
          className={className}
        >
          <path
            d="              M0 11.4026C0 13.9726 1.832 16.2146 4.922 16.4746C4.484 17.1856 4.238 18.0196 4.238 18.9216C4.238 21.6836 6.275 23.6656 9.146 23.6656H26.4C29.695 23.6656 32.061 21.4926 32.061 18.3886C32.061 15.7496 30.105 13.5486 27.467 13.1796C27.426 10.1586 25.416 7.6156 22.572 7.0956C22.285 4.5526 20.316 2.7476 17.938 2.7476C17.09 2.7476 16.639 2.8166 15.982 2.9946C14.67 1.0796 12.893 -0.0004 10.746 -0.0004C7.383 -0.0004 4.607 2.7476 4.58 6.1116C1.832 6.6176 0 8.7636 0 11.4026ZM0.67 11.4026C0.67 8.9686 2.42 7.1636 4.553 6.7946C5.072 6.6996 5.25 6.5486 5.25 5.9746C5.25 3.0896 7.697 0.6836 10.746 0.6836C12.729 0.6836 14.355 1.7636 15.381 3.2816C15.668 3.6776 15.969 3.6636 16.475 3.5406C16.816 3.4726 17.199 3.4176 17.924 3.4176C19.988 3.4176 21.629 4.8126 21.889 7.0276C21.766 7.0136 21.643 7.0136 21.506 7.0136C19.1 7.0136 17.227 8.1486 16.078 9.9806C15.34 9.7206 14.834 9.6116 14.164 9.6116C11.525 9.6116 9.488 11.5116 9.133 14.1506C7.656 14.1776 6.316 14.8066 5.414 15.8186C2.352 15.7226 0.67 13.6856 0.67 11.4026ZM9.146 22.9956C6.645 22.9956 4.908 21.3006 4.908 18.9216C4.908 16.6796 6.686 14.8886 8.982 14.8206C9.543 14.8066 9.762 14.7386 9.816 14.2456C10.076 11.9086 11.867 10.2816 14.164 10.2816C14.697 10.2816 15.135 10.3496 15.695 10.5686C16.174 10.7326 16.379 10.6776 16.652 10.2676C17.609 8.6546 19.305 7.6836 21.506 7.6836C24.582 7.6836 26.797 10.1306 26.797 13.1656C26.797 13.7676 26.824 13.7536 27.398 13.8356C29.654 14.1226 31.391 16.0786 31.391 18.3886C31.391 21.0956 29.354 22.9956 26.4 22.9956Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
