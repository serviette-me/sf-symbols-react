import { IconProps } from "../../types"

export default function SuitDiamondIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.611328125 30.0234375"
          className={className}
        >
          <path
            d="              M11.7989 30.0238C13.1929 30.0238 13.9589 29.0668 14.9019 27.7808L22.7229 17.3768C23.3929 16.4878 23.6109 15.7368 23.6109 15.0118C23.6109 14.2868 23.3929 13.5348 22.7229 12.6468L14.9019 2.2418C13.9589 0.9568 13.1929 -0.0002 11.7989 -0.0002C10.4039 -0.0002 9.6519 0.9568 8.6949 2.2418L0.8889 12.6468C0.2189 13.5348 -0.0001 14.2868 -0.0001 15.0118C-0.0001 15.7368 0.2189 16.4878 0.8889 17.3768L8.6949 27.7808C9.6519 29.0668 10.4039 30.0238 11.7989 30.0238ZM11.7989 23.9938C11.7579 23.9938 11.7169 23.9808 11.6899 23.9258L5.2769 15.3258C5.1819 15.2028 5.1679 15.1208 5.1679 15.0118C5.1679 14.9028 5.1819 14.8198 5.2769 14.6968L11.6899 6.0978C11.7169 6.0428 11.7579 6.0288 11.7989 6.0288C11.8539 6.0288 11.8809 6.0428 11.9219 6.0978L18.3339 14.6968C18.4159 14.8198 18.4429 14.9028 18.4429 15.0118C18.4429 15.1208 18.4159 15.2028 18.3339 15.3258L11.9219 23.9258C11.8809 23.9808 11.8539 23.9938 11.7989 23.9938Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.44921875 29.01171875"
          className={className}
        >
          <path
            d="              M11.2249 29.012C12.2909 29.012 12.8649 28.273 13.7269 27.125L21.7109 16.475C22.2309 15.764 22.4489 15.148 22.4489 14.506C22.4489 13.863 22.2309 13.234 21.7109 12.537L13.7269 1.887C12.8649 0.738 12.2909 0 11.2249 0C10.1449 0 9.5839 0.738 8.7229 1.887L0.7379 12.537C0.2049 13.234 -0.0001 13.863 -0.0001 14.506C-0.0001 15.148 0.2049 15.764 0.7379 16.475L8.7229 27.125C9.5839 28.273 10.1449 29.012 11.2249 29.012ZM11.2249 24.555C11.1699 24.555 11.1289 24.527 11.1019 24.473L3.9379 14.848C3.8279 14.711 3.8149 14.615 3.8149 14.506C3.8149 14.397 3.8279 14.301 3.9379 14.164L11.1019 4.539C11.1289 4.484 11.1699 4.457 11.2249 4.457C11.2789 4.457 11.3069 4.484 11.3479 4.539L18.5119 14.164C18.6069 14.301 18.6349 14.397 18.6349 14.506C18.6349 14.615 18.6069 14.711 18.5119 14.848L11.3479 24.473C11.3069 24.527 11.2789 24.555 11.2249 24.555Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.05078125 29.544921875"
          className={className}
        >
          <path
            d="              M11.5249 29.5454C12.7699 29.5454 13.4399 28.6974 14.3419 27.4804L22.2439 16.9534C22.8459 16.1604 23.0509 15.4624 23.0509 14.7794C23.0509 14.0954 22.8459 13.3984 22.2439 12.5914L14.3419 2.0784C13.4399 0.8614 12.7699 0.0004 11.5249 0.0004C10.2809 0.0004 9.6249 0.8614 8.7089 2.0784L0.8199 12.5914C0.2049 13.3984 -0.0001 14.0954 -0.0001 14.7794C-0.0001 15.4624 0.2049 16.1604 0.8199 16.9534L8.7089 27.4804C9.6249 28.6974 10.2809 29.5454 11.5249 29.5454ZM11.5249 24.2674C11.4709 24.2674 11.4429 24.2404 11.4019 24.1854L4.6489 15.1074C4.5529 14.9704 4.5249 14.8884 4.5249 14.7794C4.5249 14.6704 4.5529 14.5744 4.6489 14.4514L11.4019 5.3734C11.4429 5.3184 11.4709 5.2914 11.5249 5.2914C11.5799 5.2914 11.6209 5.3184 11.6489 5.3734L18.4159 14.4514C18.5119 14.5744 18.5249 14.6704 18.5249 14.7794C18.5249 14.8884 18.5119 14.9704 18.4159 15.1074L11.6489 24.1854C11.6209 24.2404 11.5799 24.2674 11.5249 24.2674Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.58984375 27.26171875"
          className={className}
        >
          <path
            d="              M10.2949 27.262C10.9379 27.262 11.2519 26.824 11.8809 25.99L20.0839 14.943C20.4119 14.506 20.5899 14.082 20.5899 13.631C20.5899 13.166 20.4119 12.756 20.0839 12.318L11.8809 1.272C11.2519 0.438 10.9379 0 10.2949 0C9.6519 0 9.3239 0.438 8.7089 1.272L0.4919 12.318C0.1639 12.756 -0.0001 13.166 -0.0001 13.631C-0.0001 14.082 0.1639 14.506 0.4919 14.943L8.7089 25.99C9.3239 26.824 9.6519 27.262 10.2949 27.262ZM10.2949 25.088C10.1859 25.088 10.1449 25.006 10.0759 24.924L2.0099 14.014C1.8999 13.863 1.8729 13.754 1.8729 13.631C1.8729 13.508 1.8999 13.398 2.0099 13.248L10.0759 2.338C10.1449 2.256 10.1859 2.174 10.2949 2.174C10.3909 2.174 10.4449 2.256 10.4999 2.338L18.5799 13.248C18.6899 13.398 18.7169 13.508 18.7169 13.631C18.7169 13.754 18.6899 13.863 18.5799 14.014L10.4999 24.924C10.4449 25.006 10.3909 25.088 10.2949 25.088Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.697265625 28.35546875"
          className={className}
        >
          <path
            d="              M10.8559 28.3558C11.7169 28.3558 12.1539 27.7678 12.9609 26.7008L21.0549 15.8868C21.4919 15.3128 21.6969 14.7658 21.6969 14.1778C21.6969 13.5898 21.4919 13.0428 21.0549 12.4688L12.9609 1.6538C12.1539 0.5878 11.7169 -0.0002 10.8559 -0.0002C9.9809 -0.0002 9.5429 0.5878 8.7359 1.6538L0.6429 12.4688C0.2049 13.0428 -0.0001 13.5898 -0.0001 14.1778C-0.0001 14.7658 0.2049 15.3128 0.6429 15.8868L8.7359 26.7008C9.5429 27.7678 9.9809 28.3558 10.8559 28.3558ZM10.8559 24.9098C10.7869 24.9098 10.7599 24.8688 10.7189 24.8148L3.0759 14.5328C2.9669 14.3968 2.9399 14.2868 2.9399 14.1778C2.9399 14.0688 2.9669 13.9588 3.0759 13.8088L10.7189 3.5408C10.7599 3.4858 10.7869 3.4448 10.8559 3.4448C10.9099 3.4448 10.9509 3.4858 10.9789 3.5408L18.6209 13.8088C18.7309 13.9588 18.7579 14.0688 18.7579 14.1778C18.7579 14.2868 18.7309 14.3968 18.6209 14.5328L10.9789 24.8148C10.9509 24.8688 10.9099 24.9098 10.8559 24.9098Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.287109375 28"
          className={className}
        >
          <path
            d="              M10.6369 28.0001C11.3889 28.0001 11.7579 27.4941 12.5369 26.4551L20.6989 15.5581C21.0679 15.0531 21.2869 14.5471 21.2869 14.0001C21.2869 13.4391 21.0679 12.9471 20.6989 12.4411L12.5369 1.5311C11.7579 0.5061 11.3889 0.0001 10.6369 0.0001C9.8849 0.0001 9.5159 0.5061 8.7499 1.5311L0.5879 12.4411C0.2049 12.9471 -0.0001 13.4391 -0.0001 14.0001C-0.0001 14.5471 0.2049 15.0531 0.5879 15.5581L8.7499 26.4551C9.5159 27.4941 9.8849 28.0001 10.6369 28.0001ZM10.6369 25.1151C10.5679 25.1151 10.5409 25.0741 10.4999 25.0061L2.5979 14.3691C2.4749 14.2191 2.4609 14.1091 2.4609 14.0001C2.4609 13.8911 2.4749 13.7811 2.5979 13.6311L10.4999 2.9801C10.5409 2.9261 10.5679 2.8851 10.6369 2.8851C10.7049 2.8851 10.7319 2.9261 10.7739 2.9801L18.6899 13.6311C18.7989 13.7811 18.8259 13.8911 18.8259 14.0001C18.8259 14.1091 18.7989 14.2191 18.6899 14.3691L10.7739 25.0061C10.7319 25.0741 10.7049 25.1151 10.6369 25.1151Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.025390625 28.62890625"
          className={className}
        >
          <path
            d="              M11.0059 28.6285C11.9629 28.6285 12.4549 27.9865 13.2889 26.8785L21.3419 16.1325C21.8069 15.5035 22.0249 14.9155 22.0249 14.3145C22.0249 13.6995 21.8069 13.1245 21.3419 12.4965L13.2889 1.7495C12.4549 0.6425 11.9629 -0.0005 11.0059 -0.0005C10.0489 -0.0005 9.5569 0.6425 8.7359 1.7495L0.6839 12.4965C0.2049 13.1245 -0.0001 13.6995 -0.0001 14.3145C-0.0001 14.9155 0.2049 15.5035 0.6839 16.1325L8.7359 26.8785C9.5569 27.9865 10.0489 28.6285 11.0059 28.6285ZM11.0059 24.7465C10.9509 24.7465 10.9099 24.7185 10.8829 24.6645L3.4449 14.6695C3.3359 14.5195 3.3219 14.4235 3.3219 14.3145C3.3219 14.2055 3.3359 14.0955 3.4449 13.9585L10.8829 3.9645C10.9099 3.9105 10.9509 3.8825 11.0059 3.8825C11.0739 3.8825 11.1019 3.9105 11.1429 3.9645L18.5659 13.9585C18.6759 14.0955 18.7029 14.2055 18.7029 14.3145C18.7029 14.4235 18.6759 14.5195 18.5659 14.6695L11.1429 24.6645C11.1019 24.7185 11.0739 24.7465 11.0059 24.7465Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.66015625 26.3046875"
          className={className}
        >
          <path
            d="              M9.8299 26.3044C10.3359 26.3044 10.5819 25.9494 11.0059 25.3754L19.2909 14.1364C19.5509 13.7814 19.6599 13.4944 19.6599 13.1524C19.6599 12.8104 19.5509 12.5094 19.2909 12.1544L11.0059 0.9294C10.5819 0.3554 10.3359 0.0004 9.8299 0.0004C9.3239 0.0004 9.0919 0.3554 8.6679 0.9294L0.3689 12.1544C0.1089 12.5094 -0.0001 12.8104 -0.0001 13.1524C-0.0001 13.4944 0.1089 13.7814 0.3689 14.1364L8.6679 25.3754C9.0919 25.9494 9.3239 26.3044 9.8299 26.3044ZM9.8299 25.0464C9.6799 25.0464 9.6109 24.9374 9.5159 24.8144L1.2309 13.5484C1.1349 13.3984 1.0939 13.2894 1.0939 13.1524C1.0939 13.0154 1.1349 12.8924 1.2309 12.7554L9.5159 1.4904C9.6109 1.3674 9.6799 1.2444 9.8299 1.2444C9.9809 1.2444 10.0629 1.3674 10.1449 1.4904L18.4299 12.7554C18.5389 12.8924 18.5659 13.0154 18.5659 13.1524C18.5659 13.2894 18.5389 13.3984 18.4299 13.5484L10.1449 24.8144C10.0629 24.9374 9.9809 25.0464 9.8299 25.0464Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.1953125 25.8125"
          className={className}
        >
          <path
            d="              M9.5979 25.8123C10.0219 25.8123 10.2269 25.5113 10.5549 25.0603L18.8809 13.7263C19.1129 13.4123 19.1949 13.1793 19.1949 12.9063C19.1949 12.6323 19.1129 12.3863 18.8809 12.0863L10.5549 0.7523C10.2269 0.3003 10.0219 0.0003 9.5979 0.0003C9.1599 0.0003 8.9549 0.3003 8.6409 0.7523L0.3149 12.0863C0.0819 12.3863 -0.0001 12.6323 -0.0001 12.9063C-0.0001 13.1793 0.0819 13.4123 0.3149 13.7263L8.6409 25.0603C8.9549 25.5113 9.1599 25.8123 9.5979 25.8123ZM9.5979 25.0333C9.4199 25.0333 9.3379 24.8963 9.2289 24.7463L0.8339 13.3023C0.7379 13.1663 0.6969 13.0433 0.6969 12.9063C0.6969 12.7693 0.7379 12.6463 0.8339 12.4963L9.2289 1.0523C9.3379 0.9163 9.4199 0.7793 9.5979 0.7793C9.7749 0.7793 9.8569 0.9163 9.9669 1.0523L18.3479 12.4963C18.4569 12.6463 18.4979 12.7693 18.4979 12.9063C18.4979 13.0433 18.4569 13.1663 18.3479 13.3023L9.9669 24.7463C9.8569 24.8963 9.7749 25.0333 9.5979 25.0333Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
