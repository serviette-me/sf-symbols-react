import { IconProps } from "../../types"

export default function FigureFlexibilityIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.721254590231933 30.404461909101048"
          className={className}
        >
          <path
            d="              M9.1739 6.918C11.0749 6.918 12.6329 5.359 12.6329 3.459C12.6329 1.559 11.0749 0 9.1739 0C7.2739 0 5.7289 1.559 5.7289 3.459C5.7289 5.359 7.2739 6.918 9.1739 6.918ZM30.7889 27.002L21.2329 21.875L15.7229 18.033C15.4089 17.814 15.1489 17.582 14.8889 17.309C15.3539 16.857 15.5179 16.201 15.3679 15.559L14.2869 11.17C13.8639 9.461 12.3319 8.313 10.5819 8.313H7.1369C6.0159 8.313 5.1959 8.586 4.4299 9.338L0.5199 13.275C-0.0541 13.836 -0.1641 14.738 0.2459 15.449L2.9399 20.193V28.602C2.9399 29.572 3.7599 30.393 4.7439 30.393C5.7429 30.393 6.5629 29.572 6.5629 28.602V21.643L14.5749 22.244L19.6329 25.115L29.0669 30.174C30.1189 30.734 31.1449 30.188 31.5279 29.449C31.9649 28.561 31.6369 27.467 30.7889 27.002ZM4.0469 14.848L6.0709 12.811L7.7929 17.199L6.5349 17.91H5.8109Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.525570609747266 29.03173312195814"
          className={className}
        >
          <path
            d="              M8.7765 6.439C10.5395 6.439 11.9895 4.99 11.9895 3.213C11.9895 1.449 10.5395 0 8.7765 0C6.9985 0 5.5495 1.449 5.5495 3.213C5.5495 4.99 6.9985 6.439 8.7765 6.439ZM29.6945 26.018L20.4105 21.014L15.0515 17.295C14.6965 17.049 14.3815 16.762 14.1085 16.434C14.6005 16.051 14.7915 15.422 14.6415 14.793L13.5885 10.527C13.1925 8.941 11.7565 7.861 10.1435 7.861H6.7935C5.7275 7.861 4.9755 8.121 4.2645 8.818L0.4505 12.646C-0.0555 13.152 -0.1375 13.945 0.2175 14.574L2.8695 19.223V27.426C2.8695 28.287 3.5945 29.025 4.4555 29.025C5.3445 29.025 6.0695 28.287 6.0695 27.426V20.508L14.0675 21.096L19.0025 23.898L28.1765 28.82C29.1065 29.326 30.0085 28.848 30.3505 28.191C30.7465 27.398 30.4465 26.428 29.6945 26.018ZM3.5945 14.041L5.8095 11.812L7.6005 16.42L6.2335 17.199H5.3995Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.154607325369184 29.750885720524977"
          className={className}
        >
          <path
            d="              M8.9817 6.6852C10.8267 6.6852 12.3307 5.1812 12.3307 3.3362C12.3307 1.5042 10.8267 0.0002 8.9817 0.0002C7.1497 0.0002 5.6457 1.5042 5.6457 3.3362C5.6457 5.1812 7.1497 6.6852 8.9817 6.6852ZM30.2687 26.5372L20.8487 21.4652L15.4077 17.6782C15.0787 17.4452 14.7787 17.1852 14.5187 16.8852C14.9967 16.4742 15.1747 15.8322 15.0247 15.1892L13.9577 10.8692C13.5477 9.2152 12.0577 8.0942 10.3757 8.0942H6.9717C5.8777 8.0942 5.0847 8.3532 4.3467 9.0922L0.4917 12.9742C-0.0553 13.5082 -0.1513 14.3552 0.2317 15.0252L2.9107 19.7282V28.0412C2.9107 28.9572 3.6767 29.7502 4.6067 29.7502C5.5497 29.7502 6.3287 28.9572 6.3287 28.0412V21.1092L14.3407 21.6972L19.3307 24.5272L28.6557 29.5312C29.6397 30.0642 30.6107 29.5452 30.9657 28.8482C31.3897 28.0142 31.0757 26.9742 30.2687 26.5372ZM3.8267 14.4652L5.9467 12.3322L7.6967 16.8302L6.3977 17.5682H5.6177Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.527734631114285 27.001953125"
          className={className}
        >
          <path
            d="              M8.1349 5.811C9.7349 5.811 11.0469 4.512 11.0469 2.898C11.0469 1.313 9.7349 0 8.1349 0C6.5349 0 5.2229 1.313 5.2229 2.898C5.2229 4.512 6.5349 5.811 8.1349 5.811ZM27.8089 24.445L19.0449 19.715L13.9869 16.188C13.6039 15.928 13.2479 15.6 12.9609 15.231C13.4669 14.916 13.6859 14.328 13.5349 13.754L12.5369 9.707C12.1819 8.285 10.8969 7.301 9.4339 7.301H6.2619C5.2909 7.301 4.6209 7.533 3.9929 8.176L0.3829 11.772C-0.0541 12.209 -0.1091 12.879 0.1779 13.412L2.7069 17.842V25.635C2.7069 26.373 3.3229 27.002 4.0609 27.002C4.8129 27.002 5.4279 26.373 5.4279 25.635V18.949L13.1799 19.51L17.8689 22.162L26.5369 26.811C27.3299 27.248 28.1099 26.852 28.3829 26.277C28.7109 25.621 28.4649 24.801 27.8089 24.445ZM3.0489 12.975L5.3869 10.609L7.2189 15.313L5.7839 16.133H4.8679Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.753864777008825 28.1640625"
          className={className}
        >
          <path
            d="              M8.5163 6.1388C10.2113 6.1388 11.5783 4.7718 11.5783 3.0628C11.5783 1.3668 10.2113 -0.0002 8.5163 -0.0002C6.8213 -0.0002 5.4403 1.3668 5.4403 3.0628C5.4403 4.7718 6.8213 6.1388 8.5163 6.1388ZM28.9833 25.3888L19.8773 20.4808L14.6143 16.8168C14.2443 16.5568 13.8893 16.2288 13.6023 15.8728C14.1213 15.5308 14.3263 14.9158 14.1763 14.3148L13.1373 10.1308C12.7683 8.6128 11.4013 7.5738 9.8563 7.5738H6.5613C5.5493 7.5738 4.8253 7.8198 4.1553 8.4898L0.4083 12.2358C-0.0557 12.7008 -0.1247 13.4398 0.2033 14.0138L2.8153 18.6078V26.6878C2.8153 27.4808 3.4713 28.1638 4.2783 28.1638C5.0843 28.1638 5.7543 27.4808 5.7543 26.6878V19.7968L13.7393 20.3708L18.5923 23.1328L27.6023 27.9588C28.4633 28.4238 29.2973 27.9998 29.5983 27.3848C29.9533 26.6598 29.6803 25.7718 28.9833 25.3888ZM3.3073 13.5348L5.6453 11.1698L7.4913 15.9278L6.0413 16.7478H5.1533Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.328468915809005 27.663915215542453"
          className={className}
        >
          <path
            d="              M8.37 5.9751C10.024 5.9751 11.35 4.6351 11.35 2.9671C11.35 1.3261 10.024 0.0001 8.37 0.0001C6.729 0.0001 5.375 1.3261 5.375 2.9671C5.375 4.6351 6.729 5.9751 8.37 5.9751ZM28.59 25.0331L19.58 20.1661L14.371 16.5431C13.989 16.2831 13.62 15.9411 13.319 15.5591C13.852 15.2301 14.071 14.6291 13.92 14.0411L12.895 9.8851C12.526 8.4221 11.2 7.4101 9.696 7.4101H6.442C5.444 7.4101 4.746 7.6561 4.104 8.2991L0.399 12.0041C-0.052 12.4551 -0.121 13.1521 0.194 13.6991L2.791 18.2521V26.2641C2.791 27.0161 3.42 27.6581 4.186 27.6581C4.952 27.6581 5.58 27.0161 5.58 26.2641V19.3871L13.551 19.9611L18.377 22.6951L27.278 27.4801C28.098 27.9181 28.891 27.5081 29.178 26.9341C29.52 26.2501 29.26 25.3891 28.59 25.0331ZM3.147 13.2341L5.553 10.8141L7.426 15.6411L5.95 16.4881H5.006Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.093822942078223 28.533203125"
          className={className}
        >
          <path
            d="              M8.6292 6.2613C10.3522 6.2613 11.7602 4.8672 11.7602 3.1172C11.7602 1.3942 10.3522 0.0003 8.6292 0.0003C6.9072 0.0003 5.4852 1.3942 5.4852 3.1172C5.4852 4.8672 6.9072 6.2613 8.6292 6.2613ZM29.2872 25.6623L20.1142 20.7133L14.8092 17.0213C14.4402 16.7613 14.1122 16.4613 13.8252 16.1193C14.3302 15.7503 14.5362 15.1353 14.3712 14.5193L13.3322 10.2953C12.9632 8.7503 11.5552 7.6973 9.9832 7.6973H6.6612C5.6352 7.6973 4.8972 7.9432 4.2002 8.6403L0.4402 12.4142C-0.0518 12.8923 -0.1338 13.6583 0.2072 14.2603L2.8322 18.8672V27.0023C2.8322 27.8223 3.5302 28.5333 4.3642 28.5333C5.1982 28.5333 5.8952 27.8223 5.8952 27.0023V20.0973L13.8792 20.6853L18.7742 23.4613L27.8522 28.3283C28.7412 28.8063 29.6022 28.3553 29.9302 27.7263C30.2992 26.9743 30.0262 26.0583 29.2872 25.6623ZM3.4342 13.7543L5.7172 11.4433L7.5362 16.1333L6.1272 16.9393H5.2662Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.47668859581214 26.11328125"
          className={className}
        >
          <path
            d="              M7.8348 5.6058C9.3668 5.6058 10.6238 4.3338 10.6238 2.7888C10.6238 1.2578 9.3668 -0.0002 7.8348 -0.0002C6.2898 -0.0002 5.0328 1.2578 5.0328 2.7888C5.0328 4.3338 6.2898 5.6058 7.8348 5.6058ZM26.7848 23.6528L18.3488 19.0858L13.4678 15.6958C13.0988 15.4488 12.7568 15.1208 12.4698 14.7658C12.9758 14.4648 13.1668 13.9048 13.0308 13.3438L12.0738 9.4608C11.7318 8.0798 10.4878 7.1508 9.0788 7.1508H6.0308C5.1008 7.1508 4.4578 7.3558 3.8428 7.9848L0.3698 11.4438C-0.0532 11.8668 -0.1082 12.5098 0.1788 13.0298L2.6128 17.2948V24.7868C2.6128 25.4978 3.2008 26.1138 3.9108 26.1138C4.6358 26.1138 5.2238 25.4978 5.2238 24.7868V18.3618L12.6888 18.8948L17.2008 21.4508L25.5538 25.9358C26.3198 26.3458 27.0718 25.9628 27.3308 25.4158C27.6598 24.7738 27.4128 23.9938 26.7848 23.6528ZM2.9408 12.6058L5.1968 10.3218L6.9468 14.8618L5.5658 15.6408H4.6908Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.934903404699583 25.6484375"
          className={className}
        >
          <path
            d="              M7.6848 5.4824C9.1748 5.4824 10.4188 4.2524 10.4188 2.7344C10.4188 1.2304 9.1748 0.0004 7.6848 0.0004C6.1668 0.0004 4.9368 1.2304 4.9368 2.7344C4.9368 4.2524 6.1668 5.4824 7.6848 5.4824ZM26.2508 23.2424L17.9798 18.7714L13.2078 15.4354C12.8388 15.1894 12.5108 14.8754 12.2378 14.5334C12.7158 14.2324 12.9078 13.6854 12.7708 13.1384L11.8278 9.3244C11.4988 7.9844 10.2828 7.0544 8.9018 7.0544H5.9078C5.0048 7.0544 4.3758 7.2734 3.7608 7.8754L0.3698 11.2794C-0.0532 11.6894 -0.1082 12.3184 0.1788 12.8244L2.5578 17.0074V24.3634C2.5578 25.0604 3.1318 25.6484 3.8288 25.6484C4.5538 25.6484 5.1278 25.0604 5.1278 24.3634V18.0474L12.4428 18.5804L16.8588 21.0824L25.0478 25.4704C25.7998 25.8814 26.5378 25.5114 26.7978 24.9644C27.1128 24.3364 26.8668 23.5704 26.2508 23.2424ZM2.8718 12.4144L5.0868 10.1724L6.8098 14.6154L5.4558 15.3804H4.5948Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
