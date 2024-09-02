import { IconProps } from "../../types"

export default function IphoneIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.0234375 34.275390625"
          className={className}
        >
          <path
            d="              M4.9083 34.275H18.4433C21.1913 34.275 23.0233 32.361 23.0233 29.518V4.758C23.0233 1.9 21.1913 0 18.4433 0H4.9083C1.9683 0 0.0003 1.9 0.0003 4.744V29.531C0.0003 32.361 1.9683 34.275 4.9083 34.275ZM6.1523 28.998C5.3733 28.998 4.8533 28.533 4.8533 27.727V6.549C4.8533 5.742 5.3733 5.277 6.1523 5.277H16.8843C17.6503 5.277 18.1703 5.77 18.1703 6.563V27.713C18.1703 28.506 17.6503 28.998 16.8843 28.998ZM9.5023 9.365H13.5213C14.3553 9.365 14.9573 8.764 14.9573 7.93C14.9573 7.096 14.3413 6.48 13.5213 6.48H9.5023C8.6813 6.48 8.0663 7.096 8.0663 7.93C8.0663 8.764 8.6683 9.365 9.5023 9.365ZM8.3533 27.631H14.6703C15.2033 27.631 15.5863 27.275 15.5863 26.715C15.5863 26.141 15.2033 25.772 14.6703 25.772H8.3533C7.8203 25.772 7.4243 26.141 7.4243 26.715C7.4243 27.275 7.8203 27.631 8.3533 27.631Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.2890625 31.609375"
          className={className}
        >
          <path
            d="              M4.3062 31.6091H16.1462C18.6352 31.6091 20.2892 29.9551 20.2892 27.4671V4.1561C20.2892 1.6681 18.6352 0.0001 16.1462 0.0001H4.3062C1.7232 0.0001 0.0002 1.6681 0.0002 4.1561V27.4671C0.0002 29.9551 1.7232 31.6091 4.3062 31.6091ZM5.0722 27.8771C4.1012 27.8771 3.5272 27.3441 3.5272 26.3871V5.2361C3.5272 4.2791 4.1012 3.7461 5.0722 3.7461H15.2172C16.1872 3.7461 16.7622 4.2931 16.7622 5.2501V26.3731C16.7622 27.3301 16.1872 27.8771 15.2172 27.8771ZM8.3122 7.2461H11.9762C12.6602 7.2461 13.1802 6.7261 13.1802 6.0431C13.1802 5.3591 12.6602 4.8261 11.9762 4.8261H8.3122C7.6292 4.8261 7.1092 5.3591 7.1092 6.0431C7.1092 6.7261 7.6152 7.2461 8.3122 7.2461ZM7.1092 26.6871H13.1802C13.6312 26.6871 13.9592 26.3871 13.9592 25.9081C13.9592 25.4431 13.6312 25.1291 13.1802 25.1291H7.1092C6.6722 25.1291 6.3302 25.4431 6.3302 25.9081C6.3302 26.3871 6.6722 26.6871 7.1092 26.6871Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.73828125 33.00390625"
          className={className}
        >
          <path
            d="              M4.6349 33.0044H17.3629C19.9879 33.0044 21.7379 31.2134 21.7379 28.5334V4.4704C21.7379 1.7914 19.9879 0.0004 17.3629 0.0004H4.6349C1.8589 0.0004 -0.0001 1.7914 -0.0001 4.4574V28.5464C-0.0001 31.2134 1.8589 33.0044 4.6349 33.0044ZM5.6469 28.4644C4.7719 28.4644 4.2249 27.9594 4.2249 27.0844V5.9204C4.2249 5.0454 4.7719 4.5394 5.6469 4.5394H16.1059C16.9529 4.5394 17.4999 5.0724 17.4999 5.9334V27.0704C17.4999 27.9314 16.9529 28.4644 16.1059 28.4644ZM8.9419 8.3534H12.7969C13.5629 8.3534 14.1229 7.7934 14.1229 7.0274C14.1229 6.2614 13.5489 5.6874 12.7969 5.6874H8.9419C8.1899 5.6874 7.6149 6.2614 7.6149 7.0274C7.6149 7.7934 8.1759 8.3534 8.9419 8.3534ZM7.7659 27.1794H13.9729C14.4649 27.1794 14.8199 26.8384 14.8199 26.3184C14.8199 25.7984 14.4649 25.4574 13.9729 25.4574H7.7659C7.2739 25.4574 6.9179 25.7984 6.9179 26.3184C6.9179 26.8384 7.2739 27.1794 7.7659 27.1794Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16.65234375 28.150390625"
          className={className}
        >
          <path
            d="              M3.5547 28.1501H13.0977C15.2987 28.1501 16.6527 26.8381 16.6527 24.7051V3.4591C16.6527 1.3261 15.2987 0.0001 13.0977 0.0001H3.5547C1.3537 0.0001 -0.0003 1.3261 -0.0003 3.4591V24.7051C-0.0003 26.8381 1.3537 28.1501 3.5547 28.1501ZM3.7457 26.4691C2.3787 26.4691 1.6957 25.7991 1.6957 24.4591V3.6911C1.6957 2.3651 2.3787 1.6951 3.7457 1.6951H12.9067C14.2737 1.6951 14.9707 2.3651 14.9707 3.6911V24.4591C14.9707 25.7991 14.2737 26.4691 12.9067 26.4691ZM6.7407 4.2111H9.9257C10.3907 4.2111 10.7457 3.8551 10.7457 3.3901C10.7457 2.9261 10.3907 2.5701 9.9257 2.5701H6.7407C6.2617 2.5701 5.9197 2.9261 5.9197 3.3901C5.9197 3.8551 6.2617 4.2111 6.7407 4.2111ZM5.4957 25.4981H11.1697C11.4707 25.4981 11.7027 25.2791 11.7027 24.9651C11.7027 24.6371 11.4707 24.4181 11.1697 24.4181H5.4957C5.1817 24.4181 4.9627 24.6371 4.9627 24.9651C4.9627 25.2791 5.1817 25.4981 5.4957 25.4981Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.552734375 29.9140625"
          className={className}
        >
          <path
            d="              M3.9371 29.9138H14.6841C17.0081 29.9138 18.5531 28.3968 18.5531 26.1408V3.7738C18.5531 1.5178 17.0081 -0.0002 14.6841 -0.0002H3.9371C1.5861 -0.0002 0.0001 1.5178 0.0001 3.7738V26.1408C0.0001 28.3968 1.5861 29.9138 3.9371 29.9138ZM4.3891 27.1658C3.3091 27.1658 2.6801 26.5648 2.6801 25.5258V4.3888C2.6801 3.3498 3.3091 2.7618 4.3891 2.7618H14.1781C15.2581 2.7618 15.8871 3.3498 15.8871 4.3888V25.5258C15.8871 26.5648 15.2581 27.1658 14.1781 27.1658ZM7.5741 5.8788H11.0061C11.5941 5.8788 12.0591 5.4138 12.0591 4.8258C12.0591 4.2378 11.5941 3.7738 11.0061 3.7738H7.5741C6.9731 3.7738 6.5081 4.2378 6.5081 4.8258C6.5081 5.4138 6.9731 5.8788 7.5741 5.8788ZM6.3441 26.0858H12.2361C12.6331 26.0858 12.9201 25.8128 12.9201 25.4028C12.9201 24.9788 12.6331 24.7048 12.2361 24.7048H6.3441C5.9471 24.7048 5.6461 24.9788 5.6461 25.4028C5.6461 25.8128 5.9471 26.0858 6.3441 26.0858Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 17.568359375 28.943359375"
          className={className}
        >
          <path
            d="              M3.7187 28.9436H13.8497C16.0777 28.9436 17.5687 27.5216 17.5687 25.3886V3.5546C17.5687 1.4216 16.0777 -0.0004 13.8497 -0.0004H3.7187C1.4907 -0.0004 -0.0003 1.4216 -0.0003 3.5546V25.3886C-0.0003 27.5216 1.4907 28.9436 3.7187 28.9436ZM4.0057 26.7426C2.8437 26.7426 2.2017 26.1266 2.2017 25.0336V3.9106C2.2017 2.8166 2.8437 2.2016 4.0057 2.2016H13.5767C14.7247 2.2016 15.3677 2.8166 15.3677 3.9106V25.0336C15.3677 26.1266 14.7247 26.7426 13.5767 26.7426ZM7.1367 5.0996H10.4457C10.9787 5.0996 11.4027 4.6756 11.4027 4.1286C11.4027 3.5956 10.9787 3.1716 10.4457 3.1716H7.1367C6.5897 3.1716 6.1657 3.5956 6.1657 4.1286C6.1657 4.6756 6.5897 5.0996 7.1367 5.0996ZM5.8927 25.7446H11.7027C12.0727 25.7446 12.3317 25.4846 12.3317 25.1016C12.3317 24.7186 12.0727 24.4726 11.7027 24.4726H5.8927C5.5237 24.4726 5.2497 24.7186 5.2497 25.1016C5.2497 25.4846 5.5237 25.7446 5.8927 25.7446Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.3046875 30.65234375"
          className={className}
        >
          <path
            d="              M4.1014 30.6519H15.3124C17.7054 30.6519 19.3044 29.0659 19.3044 26.7009V3.9379C19.3044 1.5859 17.7054 -0.0001 15.3124 -0.0001H4.1014C1.6544 -0.0001 0.0004 1.5859 0.0004 3.9379V26.7149C0.0004 29.0659 1.6544 30.6519 4.1014 30.6519ZM4.6894 27.4669C3.6504 27.4669 3.0484 26.9059 3.0484 25.8949V4.7579C3.0484 3.7459 3.6504 3.1859 4.6894 3.1859H14.6284C15.6544 3.1859 16.2694 3.7599 16.2694 4.7579V25.8949C16.2694 26.8929 15.6544 27.4669 14.6284 27.4669ZM7.8884 6.4669H11.4294C12.0584 6.4669 12.5374 5.9749 12.5374 5.3459C12.5374 4.7169 12.0584 4.2249 11.4294 4.2249H7.8884C7.2594 4.2249 6.7674 4.7169 6.7674 5.3459C6.7674 5.9749 7.2594 6.4669 7.8884 6.4669ZM6.6714 26.3459H12.6464C13.0704 26.3459 13.3714 26.0589 13.3714 25.6209C13.3714 25.1839 13.0704 24.8829 12.6464 24.8829H6.6714C6.2614 24.8829 5.9474 25.1839 5.9474 25.6209C5.9474 26.0589 6.2614 26.3459 6.6714 26.3459Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 15.435546875 27.083984375"
          className={className}
        >
          <path
            d="              M3.3357 27.0843H12.1137C14.2737 27.0843 15.4357 25.9083 15.4357 23.7613V3.3083C15.4357 1.1623 14.2737 0.0003 12.1137 0.0003H3.3357C1.1617 0.0003 -0.0003 1.1623 -0.0003 3.3083V23.7613C-0.0003 25.9083 1.1617 27.0843 3.3357 27.0843ZM3.4177 26.0583C1.7777 26.0583 1.0117 25.3343 1.0117 23.6933V3.3903C1.0117 1.7503 1.7777 1.0113 3.4177 1.0113H12.0177C13.6717 1.0113 14.4237 1.7503 14.4237 3.3903V23.6933C14.4237 25.3343 13.6717 26.0583 12.0177 26.0583ZM6.2067 3.0083H9.2427C9.5977 3.0083 9.8577 2.7482 9.8577 2.3923C9.8577 2.0233 9.5977 1.7772 9.2427 1.7772H6.2067C5.8377 1.7772 5.5777 2.0233 5.5777 2.3923C5.5777 2.7482 5.8377 3.0083 6.2067 3.0083ZM4.9767 25.1563H10.4727C10.6917 25.1563 10.8827 24.9783 10.8827 24.7463C10.8827 24.5133 10.6917 24.3363 10.4727 24.3363H4.9767C4.7437 24.3363 4.5667 24.5133 4.5667 24.7463C4.5667 24.9783 4.7437 25.1563 4.9767 25.1563Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.8203125 26.537109375"
          className={className}
        >
          <path
            d="              M3.2127 26.5368H11.5937C13.7407 26.5368 14.8207 25.4438 14.8207 23.2968V3.2398C14.8207 1.0938 13.7407 -0.0002 11.5937 -0.0002H3.2127C1.0797 -0.0002 -0.0003 1.0938 -0.0003 3.2398V23.2968C-0.0003 25.4438 1.0797 26.5368 3.2127 26.5368ZM3.2537 25.8668C1.4627 25.8668 0.6697 25.1018 0.6697 23.2968V3.2398C0.6697 1.4488 1.4627 0.6698 3.2537 0.6698H11.5667C13.3577 0.6698 14.1507 1.4488 14.1507 3.2398V23.2968C14.1507 25.1018 13.3577 25.8668 11.5667 25.8668ZM5.9337 2.3928H8.8867C9.2017 2.3928 9.4067 2.1878 9.4067 1.8868C9.4067 1.5718 9.2017 1.3668 8.8867 1.3668H5.9337C5.6187 1.3668 5.4137 1.5718 5.4137 1.8868C5.4137 2.1878 5.6187 2.3928 5.9337 2.3928ZM4.7027 24.9918H10.1037C10.2947 24.9918 10.4587 24.8418 10.4587 24.6508C10.4587 24.4588 10.2947 24.3088 10.1037 24.3088H4.7027C4.5257 24.3088 4.3617 24.4588 4.3617 24.6508C4.3617 24.8418 4.5257 24.9918 4.7027 24.9918Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
