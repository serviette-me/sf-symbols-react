import { IconProps } from "../../types"

export default function ArrowtriangleDownIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.228515625 23.59765625"
          className={className}
        >
          <path
            d="              M23.2289 2.8845C23.2289 1.3945 22.0799 -0.0005 20.0839 -0.0005H3.1449C1.1489 -0.0005 -0.0001 1.3945 -0.0001 2.8845C-0.0001 3.5955 0.2459 4.2105 0.7249 5.1815L8.5589 21.3285C9.2559 22.7495 10.2679 23.5975 11.6069 23.5975C12.9609 23.5975 13.9729 22.7495 14.6559 21.3285L22.5039 5.1815C22.9819 4.2105 23.2289 3.5955 23.2289 2.8845ZM16.8849 5.0585C16.8849 5.0855 16.8709 5.1265 16.8439 5.1955L11.7309 16.5295C11.7029 16.5975 11.6619 16.6245 11.6069 16.6245C11.5659 16.6245 11.5249 16.5975 11.4979 16.5295L6.3709 5.1955C6.3299 5.1265 6.3159 5.0855 6.3159 5.0585C6.3159 4.9905 6.3709 4.9495 6.4529 4.9495H16.7619C16.8439 4.9495 16.8849 4.9905 16.8849 5.0585Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.490234375 22.955078125"
          className={className}
        >
          <path
            d="              M22.4899 2.2698C22.4899 1.0118 21.5329 -0.0002 19.9339 -0.0002H2.5569C0.9569 -0.0002 -0.0001 1.0118 -0.0001 2.2558C-0.0001 2.8848 0.2459 3.4178 0.6289 4.1838L8.8049 21.0408C9.4339 22.3398 10.2129 22.9548 11.2379 22.9548C12.2769 22.9548 13.0429 22.3398 13.6859 21.0408L21.8609 4.1838C22.2439 3.4178 22.4899 2.8988 22.4899 2.2698ZM18.0199 3.6918C18.0199 3.7458 17.9919 3.7868 17.9649 3.8558L11.3749 17.8828C11.3479 17.9508 11.3069 17.9918 11.2379 17.9918C11.1839 17.9918 11.1429 17.9508 11.1019 17.8828L4.5119 3.8418C4.4839 3.7738 4.4569 3.7328 4.4569 3.6918C4.4569 3.6098 4.5119 3.5688 4.6069 3.5688L17.8689 3.5818C17.9649 3.5818 18.0199 3.6228 18.0199 3.6918Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.873046875 23.296875"
          className={className}
        >
          <path
            d="              M22.8729 2.5975C22.8729 1.2165 21.8199 0.0005 20.0159 0.0005H2.8569C1.0529 0.0005 -0.0001 1.2165 -0.0001 2.5835C-0.0001 3.2535 0.2459 3.8415 0.6699 4.7165L8.6819 21.1915C9.3379 22.5585 10.2399 23.2965 11.4429 23.2965C12.6329 23.2965 13.5349 22.5585 14.2049 21.1915L22.2029 4.7165C22.6269 3.8415 22.8729 3.2675 22.8729 2.5975ZM17.4179 4.4165C17.4179 4.4575 17.4039 4.4985 17.3629 4.5525L11.5659 17.1585C11.5249 17.2265 11.4979 17.2675 11.4429 17.2675C11.3889 17.2675 11.3479 17.2265 11.3069 17.1585L5.4959 4.5525C5.4689 4.4845 5.4409 4.4435 5.4409 4.4025C5.4409 4.3335 5.4959 4.2925 5.5779 4.2925L17.2809 4.3065C17.3629 4.3065 17.4179 4.3475 17.4179 4.4165Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.57421875 22.216796875"
          className={className}
        >
          <path
            d="              M21.5739 1.395C21.5739 0.547 20.9319 0 19.9059 0H1.6679C0.6429 0 -0.0001 0.533 -0.0001 1.381C-0.0001 1.846 0.1909 2.201 0.4379 2.707L9.2559 20.945C9.7209 21.875 10.1579 22.217 10.7869 22.217C11.4159 22.217 11.8669 21.875 12.3319 20.945L21.1369 2.707C21.3829 2.215 21.5739 1.859 21.5739 1.395ZM19.6059 1.887C19.6059 1.969 19.5649 2.037 19.5239 2.133L11.0469 19.797C10.9919 19.893 10.9099 20.002 10.7869 20.002C10.6639 20.002 10.5819 19.893 10.5409 19.797L2.0509 2.119C2.0099 2.037 1.9689 1.955 1.9689 1.873C1.9689 1.764 2.0509 1.682 2.2149 1.682L19.3589 1.695C19.5239 1.695 19.6059 1.764 19.6059 1.887Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.01171875 22.53125"
          className={className}
        >
          <path
            d="              M22.0119 1.8727C22.0119 0.7797 21.1779 0.0137 19.8379 0.0137L2.1739 -0.0003C0.8339 -0.0003 -0.0001 0.7657 -0.0001 1.8597C-0.0001 2.4337 0.2459 2.9117 0.5609 3.5547L8.9549 20.8637C9.5569 22.0797 10.1719 22.5317 11.0059 22.5317C11.8399 22.5317 12.4549 22.0797 13.0569 20.8637L21.4509 3.5547C21.7659 2.9117 22.0119 2.4477 22.0119 1.8727ZM18.7309 2.8297C18.7309 2.8847 18.7029 2.9397 18.6759 2.9937L11.1559 18.7577C11.1149 18.8127 11.0739 18.8667 11.0059 18.8667C10.9379 18.8667 10.8969 18.8127 10.8559 18.7577L3.3359 2.9807C3.2949 2.9257 3.2679 2.8707 3.2679 2.8167C3.2679 2.7477 3.3219 2.6937 3.4319 2.6937L18.5799 2.7067C18.6759 2.7067 18.7309 2.7477 18.7309 2.8297Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.751953125 22.3125"
          className={className}
        >
          <path
            d="              M21.7519 1.6547C21.7519 0.6427 20.9729 0.0137 19.7829 0.0137L1.9549 -0.0003C0.7659 -0.0003 -0.0001 0.6287 -0.0001 1.6407C-0.0001 2.1877 0.2459 2.6387 0.5199 3.2127L9.0509 20.7817C9.6249 21.9437 10.1449 22.3127 10.8689 22.3127C11.5939 22.3127 12.1269 21.9437 12.7009 20.7817L21.2189 3.2127C21.5059 2.6527 21.7519 2.2007 21.7519 1.6547ZM19.1409 2.3517C19.1409 2.4067 19.1129 2.4607 19.0859 2.5297L11.0329 19.2497C10.9919 19.3187 10.9509 19.3727 10.8689 19.3727C10.8009 19.3727 10.7599 19.3187 10.7189 19.2497L2.6659 2.5157C2.6389 2.4477 2.6109 2.3927 2.6109 2.3377C2.6109 2.2557 2.6519 2.2007 2.7619 2.2007L18.9769 2.2147C19.0859 2.2147 19.1409 2.2697 19.1409 2.3517Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.216796875 22.708984375"
          className={className}
        >
          <path
            d="              M22.2169 2.0371C22.2169 0.8751 21.3279 0.0001 19.8789 0.0001H2.3379C0.8889 0.0001 -0.0001 0.8611 -0.0001 2.0231C-0.0001 2.6251 0.2459 3.1171 0.5879 3.8281L8.8999 20.9451C9.5019 22.1891 10.1859 22.7091 11.1149 22.7091C12.0309 22.7091 12.7149 22.1891 13.3159 20.9451L21.6289 3.8281C21.9709 3.1311 22.2169 2.6391 22.2169 2.0371ZM18.4299 3.1991C18.4299 3.2541 18.4019 3.2951 18.3749 3.3631L11.2519 18.3751C11.2109 18.4431 11.1699 18.4841 11.1149 18.4841C11.0469 18.4841 11.0059 18.4431 10.9649 18.3751L3.8419 3.3501C3.8149 3.2951 3.7869 3.2401 3.7869 3.1851C3.7869 3.1171 3.8419 3.0621 3.9379 3.0621L18.2789 3.0761C18.3749 3.0761 18.4299 3.1311 18.4299 3.1991Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.35546875 22.107421875"
          className={className}
        >
          <path
            d="              M21.3559 1.0663C21.3559 0.4243 20.8769 0.0003 20.0839 0.0003H1.2849C0.4789 0.0003 -0.0001 0.4103 -0.0001 1.0663C-0.0001 1.4083 0.1369 1.6543 0.3279 2.0643L9.5289 21.1773C9.8299 21.8063 10.1859 22.1073 10.6779 22.1073C11.1699 22.1073 11.5249 21.8063 11.8399 21.1773L21.0269 2.0643C21.2189 1.6543 21.3559 1.4083 21.3559 1.0663ZM20.2339 1.2713C20.2339 1.3943 20.1659 1.5043 20.1109 1.6273L11.0739 20.5213C10.9919 20.6723 10.8559 20.8493 10.6779 20.8493C10.4999 20.8493 10.3629 20.6723 10.2949 20.5213L1.2439 1.6273C1.1899 1.5043 1.1349 1.3943 1.1349 1.2713C1.1349 1.1213 1.2309 1.0113 1.4899 1.0113H19.8649C20.1109 1.0113 20.2339 1.1213 20.2339 1.2713Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.24609375 22.052734375"
          className={className}
        >
          <path
            d="              M21.2459 0.902C21.2459 0.356 20.8499 0 20.1659 0H1.0799C0.3969 0 -0.0001 0.356 -0.0001 0.902C-0.0001 1.176 0.0959 1.367 0.2739 1.736L9.6659 21.301C9.8989 21.766 10.1859 22.053 10.6229 22.053C11.0609 22.053 11.3479 21.766 11.5799 21.301L20.9729 1.736C21.1499 1.367 21.2459 1.176 21.2459 0.902ZM20.5489 0.971C20.5489 1.107 20.4809 1.231 20.4119 1.367L11.0879 20.891C10.9919 21.068 10.8279 21.287 10.6229 21.287C10.4039 21.287 10.2539 21.068 10.1579 20.891L0.8339 1.367C0.7659 1.231 0.6969 1.107 0.6969 0.971C0.6969 0.793 0.8199 0.67 1.1209 0.67H20.1249C20.4119 0.67 20.5489 0.793 20.5489 0.971Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}