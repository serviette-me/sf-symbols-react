import { IconProps } from "../../types"

export default function PhoneFillBadgeCheckmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.185546875 29.23046875"
          className={className}
        >
          <path
            d="              M25.047 27.9046C26.893 27.9046 28.519 27.3026 29.859 25.9086C30.639 25.0746 31.186 24.0216 31.186 22.9416C31.186 22.0256 30.816 21.1366 29.941 20.4946C28.533 19.4966 27.098 18.4846 25.689 17.4726C24.937 16.9256 24.336 16.7066 23.803 16.7066C23.092 16.7066 22.49 17.1036 21.807 17.7736L20.754 18.8396C20.603 18.9906 20.385 19.0586 20.207 19.0586C19.975 19.0586 19.728 18.9766 19.578 18.8676C18.689 18.2926 17.076 16.9666 15.641 15.5316C14.205 14.0956 12.824 12.5376 12.305 11.5936C12.223 11.4436 12.113 11.1976 12.113 10.9786C12.113 10.7876 12.182 10.5686 12.332 10.4176L13.398 9.3656C14.068 8.6816 14.465 8.0806 14.465 7.3696C14.465 6.8356 14.246 6.2346 13.699 5.4826C12.701 4.0746 11.676 2.6386 10.678 1.2306C10.062 0.3556 9.146 -0.0004 8.23 -0.0004C7.219 -0.0004 6.166 0.4786 5.428 1.1756C3.937 2.5426 3.268 4.2246 3.268 6.1246C3.268 8.0666 3.951 10.1996 5.113 12.3866C5.865 12.1956 6.644 12.0856 7.437 12.0856C12.742 12.0856 17.131 16.4886 17.131 21.7656C17.131 22.8046 16.967 23.8166 16.639 24.7596C19.551 26.6876 22.477 27.9046 25.047 27.9046ZM7.437 29.2306C11.525 29.2306 14.889 25.8266 14.889 21.7656C14.889 17.7056 11.525 14.3286 7.437 14.3286C3.363 14.3286 0 17.7056 0 21.7656C0 25.8266 3.363 29.2306 7.437 29.2306ZM6.809 25.8946C6.385 25.8946 5.92 25.7856 5.619 25.4566L3.418 23.1056C3.144 22.8046 2.912 22.4496 2.912 22.0256C2.912 21.0136 3.705 20.5216 4.457 20.5216C4.881 20.5216 5.25 20.6306 5.523 20.9586L6.658 22.3126L9.406 18.5526C9.707 18.1426 10.158 17.8966 10.65 17.8966C11.498 17.8966 12.154 18.5666 12.154 19.4006C12.154 19.6466 12.086 19.9746 11.908 20.2066L8.012 25.3476C7.766 25.6896 7.287 25.8946 6.809 25.8946Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.654296875 28.533203125"
          className={className}
        >
          <path
            d="              M23.721 26.647C25.525 26.647 27.125 26.045 28.397 24.65C29.162 23.83 29.654 22.832 29.654 21.834C29.654 21.027 29.34 20.262 28.574 19.715C27.18 18.717 25.758 17.705 24.35 16.707C23.666 16.215 23.092 15.996 22.586 15.996C21.916 15.996 21.328 16.365 20.686 17.021L19.674 18.02C19.51 18.184 19.318 18.238 19.127 18.238C18.908 18.238 18.69 18.156 18.539 18.074C17.678 17.568 16.147 16.283 14.752 14.889C13.371 13.494 12.059 11.99 11.566 11.102C11.498 10.951 11.402 10.732 11.402 10.514C11.402 10.336 11.457 10.145 11.621 9.98L12.633 8.969C13.275 8.313 13.645 7.725 13.645 7.055C13.645 6.549 13.426 5.975 12.934 5.291C11.936 3.896 10.938 2.475 9.94 1.094C9.393 0.328 8.613 0 7.779 0C6.809 0 5.824 0.451 5.059 1.176C3.65 2.502 3.022 4.129 3.022 5.947C3.022 7.93 3.773 10.131 5.018 12.346C5.715 12.168 6.453 12.086 7.205 12.086C12.277 12.086 16.461 16.27 16.461 21.328C16.461 22.217 16.324 23.078 16.078 23.898C18.717 25.594 21.383 26.647 23.721 26.647ZM7.205 28.533C11.129 28.533 14.397 25.266 14.397 21.328C14.397 17.391 11.143 14.137 7.205 14.137C3.254 14.137 0 17.391 0 21.328C0 25.279 3.254 28.533 7.205 28.533ZM6.467 25.266C6.152 25.266 5.77 25.17 5.523 24.897L3.281 22.463C3.063 22.217 2.912 21.916 2.912 21.615C2.912 20.863 3.5 20.426 4.102 20.426C4.457 20.426 4.758 20.549 4.963 20.795L6.385 22.381L9.42 18.184C9.652 17.869 10.008 17.664 10.404 17.664C11.047 17.664 11.58 18.184 11.58 18.84C11.58 19.045 11.512 19.305 11.361 19.51L7.438 24.842C7.232 25.102 6.863 25.266 6.467 25.266Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.474609375 28.90234375"
          className={className}
        >
          <path
            d="              M24.4317 27.3168C26.2497 27.3168 27.8767 26.7148 29.1757 25.3208C29.9547 24.4868 30.4747 23.4608 30.4747 22.4218C30.4747 21.5608 30.1187 20.7268 29.3127 20.1248C27.9047 19.1268 26.4687 18.1148 25.0607 17.1168C24.3497 16.5978 23.7617 16.3648 23.2287 16.3648C22.5447 16.3648 21.9437 16.7618 21.2867 17.4178L20.2477 18.4568C20.0977 18.6078 19.8927 18.6758 19.7017 18.6758C19.4827 18.6758 19.2497 18.5938 19.0997 18.4978C18.2107 17.9508 16.6527 16.6388 15.2307 15.2308C13.8227 13.8088 12.4687 12.2778 11.9627 11.3618C11.8807 11.2108 11.7847 10.9788 11.7847 10.7598C11.7847 10.5688 11.8537 10.3768 12.0037 10.2128L13.0427 9.1738C13.6997 8.5178 14.0817 7.9158 14.0817 7.2328C14.0817 6.6988 13.8637 6.1118 13.3437 5.3868C12.3457 3.9918 11.3337 2.5708 10.3357 1.1618C9.7477 0.3418 8.9007 -0.0002 8.0257 -0.0002C7.0407 -0.0002 6.0157 0.4788 5.2637 1.1758C3.8147 2.5298 3.1587 4.1838 3.1587 6.0428C3.1587 8.0118 3.8687 10.1718 5.0727 12.3728C5.7967 12.1818 6.5627 12.0858 7.3417 12.0858C12.5237 12.0858 16.8167 16.3788 16.8167 21.5608C16.8167 22.5308 16.6657 23.4748 16.3787 24.3498C19.1677 26.1678 21.9707 27.3168 24.4317 27.3168ZM7.3417 28.9028C11.3477 28.9028 14.6697 25.5668 14.6697 21.5608C14.6697 17.5548 11.3617 14.2458 7.3417 14.2458C3.3227 14.2458 -0.0003 17.5548 -0.0003 21.5608C-0.0003 25.5668 3.3227 28.9028 7.3417 28.9028ZM6.6587 25.6078C6.2887 25.6078 5.8517 25.4978 5.5777 25.1968L3.3637 22.8048C3.1177 22.5308 2.9257 22.2028 2.9257 21.8338C2.9257 20.9458 3.6097 20.4808 4.2927 20.4808C4.6897 20.4808 5.0177 20.6038 5.2637 20.8768L6.5347 22.3538L9.4197 18.3888C9.6797 18.0058 10.0897 17.7868 10.5407 17.7868C11.2927 17.7868 11.8947 18.3888 11.8947 19.1408C11.8947 19.3728 11.8267 19.6598 11.6487 19.8788L7.7517 25.1148C7.5197 25.4158 7.0957 25.6078 6.6587 25.6078Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.685546875 27.5078125"
          className={className}
        >
          <path
            d="              M21.8888 25.0061C23.6658 25.0061 25.2248 24.4041 26.4548 23.0371C27.1658 22.2581 27.6858 21.3281 27.6858 20.4261C27.6858 19.7691 27.4258 19.1411 26.7698 18.6761C25.3748 17.7051 23.9668 16.7071 22.5858 15.7361C22.0258 15.3401 21.5198 15.1211 21.0278 15.1211C20.4258 15.1211 19.8518 15.4491 19.2088 16.0641L18.2108 17.0351C18.0738 17.1721 17.8828 17.2401 17.7048 17.2401C17.5138 17.2401 17.3218 17.1721 17.1718 17.1031C16.3648 16.7071 14.9028 15.5181 13.5078 14.1231C12.1268 12.7281 10.9378 11.2791 10.5278 10.4451C10.4588 10.2951 10.3908 10.1171 10.3908 9.9531C10.3908 9.7751 10.4458 9.6111 10.5958 9.4611L11.5668 8.4351C12.1678 7.7791 12.4958 7.2051 12.4958 6.6031C12.4958 6.1111 12.2908 5.6051 11.8808 5.0311C10.9378 3.6911 9.9668 2.3241 9.0238 0.9711C8.5308 0.3011 7.8618 0.0001 7.1368 0.0001C6.2208 0.0001 5.3048 0.4651 4.5388 1.2031C3.2268 2.4751 2.6528 4.0471 2.6528 5.7831C2.6528 7.8891 3.5138 10.2401 4.9078 12.5371C5.5098 12.3871 6.1388 12.3181 6.7948 12.3181C11.4028 12.3181 15.1898 16.1051 15.1898 20.7131C15.1898 21.3831 15.1078 22.0251 14.9438 22.6411C17.3218 24.1031 19.7288 25.0061 21.8888 25.0061ZM6.7948 27.5081C10.4868 27.5081 13.5898 24.4321 13.5898 20.7131C13.5898 16.9801 10.5278 13.9181 6.7948 13.9181C3.0758 13.9181 -0.0002 16.9801 -0.0002 20.7131C-0.0002 24.4451 3.0758 27.5081 6.7948 27.5081ZM5.9468 24.2951C5.7418 24.2951 5.5098 24.2131 5.3458 24.0351L3.0898 21.5471C2.9528 21.3961 2.8848 21.1781 2.8848 21.0001C2.8848 20.5901 3.2128 20.2621 3.6228 20.2621C3.8968 20.2621 4.0738 20.3981 4.2108 20.5351L5.9198 22.3811L9.2418 17.7731C9.3928 17.5821 9.6118 17.4451 9.8708 17.4451C10.2678 17.4451 10.6098 17.7601 10.6098 18.1701C10.6098 18.3201 10.5548 18.4841 10.4458 18.6351L6.5628 24.0081C6.4398 24.1851 6.2208 24.2951 5.9468 24.2951Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.669921875 28.095703125"
          className={className}
        >
          <path
            d="              M22.8729 25.8398C24.6509 25.8398 26.2229 25.2378 27.4669 23.8578C28.2049 23.0238 28.6699 22.0798 28.6699 21.1228C28.6699 20.3988 28.3969 19.7008 27.6989 19.2088C26.3049 18.2248 24.8969 17.2128 23.5019 16.2288C22.8459 15.7638 22.2849 15.5448 21.7929 15.5448C21.1509 15.5448 20.5899 15.9008 19.9609 16.5288L18.9629 17.5138C18.8129 17.6638 18.6209 17.7188 18.4429 17.7188C18.2249 17.7188 18.0199 17.6368 17.8689 17.5688C17.0219 17.1038 15.5449 15.8318 14.1779 14.4788C12.8239 13.1108 11.5529 11.6488 11.1019 10.7868C11.0199 10.6368 10.9379 10.4318 10.9379 10.2268C10.9379 10.0488 10.9919 9.8708 11.1559 9.7068L12.1269 8.7088C12.7559 8.0668 13.1249 7.5058 13.1249 6.8628C13.1249 6.3708 12.8929 5.8238 12.4279 5.1538C11.4569 3.7738 10.4589 2.3788 9.4749 0.9978C8.9689 0.3008 8.2579 -0.0002 7.4789 -0.0002C6.5489 -0.0002 5.5919 0.4378 4.8129 1.1898C3.4589 2.4748 2.8579 4.0608 2.8579 5.8378C2.8579 7.8478 3.6509 10.0898 4.9359 12.3188C5.6189 12.1538 6.3169 12.0718 7.0409 12.0718C11.9629 12.0718 16.0239 16.1328 16.0239 21.0548C16.0239 21.8478 15.9139 22.6128 15.7089 23.3518C18.1839 24.8828 20.6719 25.8398 22.8729 25.8398ZM7.0409 28.0958C10.8689 28.0958 14.0819 24.8968 14.0819 21.0548C14.0819 17.1988 10.8969 14.0138 7.0409 14.0138C3.1859 14.0138 -0.0001 17.1988 -0.0001 21.0548C-0.0001 24.9238 3.1859 28.0958 7.0409 28.0958ZM6.2479 24.8688C5.9879 24.8688 5.6739 24.7738 5.4689 24.5548L3.1719 22.0528C2.9939 21.8478 2.8989 21.5738 2.8989 21.3418C2.8989 20.7538 3.3499 20.3708 3.8829 20.3708C4.1969 20.3708 4.4429 20.4938 4.6079 20.6858L6.1929 22.4218L9.4199 17.9508C9.5979 17.6918 9.8849 17.5278 10.2399 17.5278C10.7599 17.5278 11.2109 17.9378 11.2109 18.4848C11.2109 18.6618 11.1429 18.8668 11.0059 19.0588L7.0549 24.4998C6.8909 24.7188 6.5759 24.8688 6.2479 24.8688Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.109375 27.8359375"
          className={className}
        >
          <path
            d="              M22.3812 25.3884C24.1442 25.3884 25.7032 24.7874 26.9332 23.4064C27.6582 22.5724 28.1092 21.6424 28.1092 20.7264C28.1092 20.0434 27.8492 19.3864 27.2072 18.9214C25.8122 17.9374 24.4042 16.9394 23.0102 15.9414C22.3672 15.5034 21.8342 15.2854 21.3422 15.2854C20.7262 15.2854 20.1662 15.6404 19.5372 16.2554L18.5662 17.2124C18.4162 17.3634 18.2242 17.4314 18.0472 17.4314C17.8422 17.4314 17.6372 17.3494 17.5002 17.2814C16.6522 16.8304 15.2032 15.5864 13.8492 14.2464C12.5102 12.9064 11.2652 11.4574 10.8282 10.6094C10.7602 10.4594 10.6782 10.2674 10.6782 10.0624C10.6782 9.8844 10.7322 9.7074 10.8832 9.5564L11.8532 8.5584C12.4552 7.9294 12.8242 7.3824 12.8242 6.7534C12.8242 6.2614 12.5922 5.7284 12.1402 5.0864C11.1702 3.7184 10.1852 2.3244 9.2012 0.9434C8.7222 0.2874 8.0532 0.0004 7.3142 0.0004C6.3982 0.0004 5.4552 0.4234 4.6762 1.1894C3.3492 2.4614 2.7622 4.0334 2.7622 5.7694C2.7622 7.8064 3.5682 10.0764 4.8942 12.3044C5.5512 12.1544 6.2482 12.0724 6.9452 12.0724C11.7992 12.0724 15.7772 16.0504 15.7772 20.8904C15.7772 21.6424 15.6812 22.3534 15.4902 23.0374C17.8832 24.5004 20.2622 25.3884 22.3812 25.3884ZM6.9452 27.8364C10.7192 27.8364 13.8902 24.6914 13.8902 20.8904C13.8902 17.0894 10.7602 13.9454 6.9452 13.9454C3.1442 13.9454 0.0002 17.0894 0.0002 20.8904C0.0002 24.7184 3.1442 27.8364 6.9452 27.8364ZM6.1112 24.6364C5.8922 24.6364 5.6052 24.5414 5.4282 24.3494L3.1172 21.8064C2.9672 21.6284 2.8982 21.3824 2.8982 21.1914C2.8982 20.6994 3.2672 20.3304 3.7462 20.3304C4.0332 20.3304 4.2522 20.4664 4.4022 20.6304L6.0842 22.4354L9.4202 17.8144C9.5702 17.5954 9.8302 17.4314 10.1312 17.4314C10.5962 17.4314 10.9922 17.8004 10.9922 18.2794C10.9922 18.4434 10.9372 18.6214 10.8142 18.7984L6.8362 24.3224C6.6852 24.5134 6.4122 24.6364 6.1112 24.6364Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.09375 28.287109375"
          className={className}
        >
          <path
            d="              M23.2422 26.1956C25.0193 26.1956 26.6053 25.5806 27.8633 24.1996C28.6153 23.3786 29.0943 22.4086 29.0943 21.4376C29.0943 20.6716 28.7933 19.9476 28.0823 19.4276C26.6743 18.4296 25.2653 17.4316 23.8713 16.4336C23.1873 15.9556 22.6403 15.7366 22.1353 15.7366C21.4783 15.7366 20.9043 16.1056 20.2613 16.7346L19.2633 17.7326C19.1133 17.8826 18.9222 17.9516 18.7303 17.9516C18.5253 17.9516 18.3063 17.8696 18.1563 17.7876C17.2953 17.2946 15.8043 16.0236 14.4243 14.6566C13.0563 13.2756 11.7713 11.7986 11.2933 10.9236C11.2243 10.7736 11.1423 10.5686 11.1423 10.3496C11.1423 10.1716 11.1973 9.9806 11.3473 9.8306L12.3453 8.8186C12.9743 8.1756 13.3443 7.6016 13.3443 6.9456C13.3443 6.4396 13.1253 5.8926 12.6463 5.2086C11.6623 3.8286 10.6642 2.4196 9.6793 1.0386C9.1603 0.3146 8.4083 -0.0004 7.6013 -0.0004C6.6583 -0.0004 5.6873 0.4516 4.9223 1.1756C3.5413 2.4886 2.9263 4.0876 2.9263 5.8786C2.9263 7.8886 3.6913 10.1176 4.9763 12.3316C5.6602 12.1676 6.3713 12.0726 7.1093 12.0726C12.0993 12.0726 16.2153 16.1876 16.2153 21.1776C16.2153 22.0116 16.0923 22.8186 15.8593 23.5836C18.4163 25.1976 20.9723 26.1956 23.2422 26.1956ZM7.1093 28.2876C10.9782 28.2876 14.2193 25.0606 14.2193 21.1776C14.2193 17.2816 11.0063 14.0686 7.1093 14.0686C3.2133 14.0686 0.0003 17.2816 0.0003 21.1776C0.0003 25.0746 3.2133 28.2876 7.1093 28.2876ZM6.3443 25.0466C6.0563 25.0466 5.7153 24.9376 5.4963 24.7056L3.2133 22.2306C3.0213 22.0116 2.8983 21.7246 2.8983 21.4646C2.8983 20.8086 3.4183 20.3986 3.9783 20.3986C4.3063 20.3986 4.5803 20.5216 4.7583 20.7266L6.2753 22.4086L9.4203 18.0466C9.6253 17.7736 9.9393 17.5816 10.3082 17.5816C10.8833 17.5816 11.3753 18.0466 11.3753 18.6346C11.3753 18.8266 11.3063 19.0586 11.1563 19.2496L7.2193 24.6506C7.0273 24.8826 6.6993 25.0466 6.3443 25.0466Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.125 27.056640625"
          className={className}
        >
          <path
            d="              M21.2328 24.486C23.0508 24.486 24.6228 23.898 25.8538 22.559C26.5368 21.82 27.1248 20.904 27.1248 20.016C27.1248 19.414 26.8788 18.826 26.2088 18.348C24.8278 17.391 23.4198 16.406 22.0388 15.435C21.5738 15.107 21.1098 14.916 20.6168 14.916C20.0428 14.916 19.4418 15.189 18.7988 15.818L17.7738 16.789C17.6508 16.926 17.4588 17.008 17.2678 17.008C17.1038 17.008 16.9258 16.939 16.7758 16.871C16.0098 16.516 14.5198 15.408 13.0568 13.945C11.6208 12.51 10.5278 11.033 10.1578 10.24C10.0758 10.076 10.0348 9.926 10.0348 9.789C10.0348 9.625 10.0898 9.475 10.2268 9.324L11.2108 8.244C11.8128 7.56 12.0998 6.959 12.0998 6.398C12.0998 5.906 11.9078 5.428 11.5528 4.949C10.6368 3.65 9.7068 2.324 8.7908 1.012C8.2848 0.301 7.6288 0 6.9178 0C6.0158 0 5.1138 0.506 4.3748 1.23C3.0898 2.502 2.5298 4.074 2.5298 5.783C2.5298 7.998 3.4588 10.459 4.9358 12.824C5.4688 12.687 6.0298 12.633 6.6038 12.633C10.8968 12.633 14.4378 16.174 14.4378 20.467C14.4378 21.027 14.3688 21.574 14.2458 22.107C16.6118 23.57 19.0448 24.486 21.2328 24.486ZM6.6038 27.057C10.2128 27.057 13.2068 24.09 13.2068 20.467C13.2068 16.83 10.2398 13.863 6.6038 13.863C2.9938 13.863 -0.0002 16.844 -0.0002 20.467C-0.0002 24.09 2.9938 27.057 6.6038 27.057ZM5.7558 23.844C5.5778 23.844 5.4008 23.762 5.2638 23.611L3.0758 21.205C2.9528 21.068 2.8988 20.904 2.8988 20.754C2.8988 20.426 3.1578 20.18 3.4868 20.18C3.7188 20.18 3.8558 20.303 3.9788 20.412L5.7148 22.285L9.0508 17.705C9.1738 17.541 9.3518 17.445 9.5428 17.445C9.8708 17.445 10.1308 17.705 10.1308 18.019C10.1308 18.17 10.0758 18.293 9.9938 18.402L6.2348 23.598C6.1248 23.748 5.9748 23.844 5.7558 23.844Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.82421875 26.837890625"
          className={className}
        >
          <path
            d="              M20.8907 24.2404C22.7227 24.2404 24.2947 23.6384 25.5257 22.3124C26.1957 21.6014 26.8237 20.6994 26.8237 19.8104C26.8237 19.2364 26.5777 18.6624 25.8947 18.1834C24.5277 17.2264 23.1327 16.2554 21.7517 15.2984C21.3277 14.9984 20.8767 14.8064 20.3987 14.8064C19.8377 14.8064 19.2227 15.0664 18.5527 15.6954L17.5277 16.6794C17.4047 16.8024 17.2127 16.8844 17.0217 16.8844C16.8707 16.8844 16.7067 16.8304 16.5567 16.7614C15.8047 16.4334 14.3007 15.3534 12.8107 13.8634C11.3477 12.4004 10.2817 10.9104 9.9397 10.1304C9.8707 9.9804 9.8297 9.8304 9.8297 9.7204C9.8297 9.5564 9.8847 9.4204 10.0347 9.2694L11.0057 8.1624C11.6207 7.4644 11.8807 6.8494 11.8807 6.2894C11.8807 5.8104 11.6897 5.3594 11.3747 4.9214C10.4727 3.6364 9.5567 2.3244 8.6547 1.0394C8.1487 0.3144 7.4917 0.0004 6.7947 0.0004C5.8927 0.0004 4.9907 0.5334 4.2797 1.2444C3.0077 2.5154 2.4477 4.0884 2.4477 5.7964C2.4477 8.0664 3.4047 10.5824 4.9357 12.9744C5.4417 12.8654 5.9607 12.8104 6.4937 12.8104C10.6097 12.8104 14.0277 16.2144 14.0277 20.3434C14.0277 20.8634 13.9727 21.3554 13.8767 21.8474C16.2287 23.3104 18.6757 24.2404 20.8907 24.2404ZM6.4937 26.8384C10.0487 26.8384 13.0017 23.9124 13.0017 20.3434C13.0017 16.7614 10.0627 13.8364 6.4937 13.8364C2.9397 13.8364 -0.0003 16.7894 -0.0003 20.3434C-0.0003 23.9124 2.9397 26.8384 6.4937 26.8384ZM5.6327 23.6114C5.4827 23.6114 5.3187 23.5434 5.2087 23.4064L3.0347 21.0274C2.9397 20.9184 2.8847 20.7814 2.8847 20.6304C2.8847 20.3434 3.1037 20.1384 3.4047 20.1384C3.6097 20.1384 3.7327 20.2614 3.8417 20.3574L5.6057 22.2444L8.9277 17.6774C9.0367 17.5414 9.1877 17.4594 9.3657 17.4594C9.6387 17.4594 9.8577 17.6774 9.8577 17.9514C9.8577 18.0884 9.8167 18.1974 9.7477 18.2934L6.0427 23.3924C5.9477 23.5294 5.8237 23.6114 5.6327 23.6114Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
