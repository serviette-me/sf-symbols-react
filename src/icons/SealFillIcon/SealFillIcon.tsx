import { IconProps } from "../../types"

export default function SealFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.1904296875 32.19556095625026"
          className={className}
        >
          <path
            d="              M7.9062 28.5449H10.6812C10.8722 28.5449 10.9822 28.5859 11.1192 28.7229L13.0872 30.6779C15.0972 32.7019 17.0932 32.7019 19.1032 30.6779L21.0722 28.7229C21.2082 28.5859 21.3182 28.5449 21.5092 28.5449H24.2852C27.1282 28.5449 28.5362 27.1099 28.5362 24.2799V21.5039C28.5362 21.3269 28.5912 21.2039 28.7282 21.0669L30.6832 19.1119C32.6932 17.1019 32.6932 15.1059 30.6832 13.0819L28.7282 11.1269C28.5772 10.9909 28.5362 10.8809 28.5362 10.6899V7.9139C28.5362 5.0709 27.1012 3.6619 24.2852 3.6619H21.5092C21.3182 3.6619 21.1952 3.6079 21.0722 3.4709L19.1032 1.5159C17.0792 -0.5071 15.0972 -0.5071 13.0872 1.5299L11.1192 3.4709C10.9952 3.6079 10.8722 3.6619 10.6812 3.6619H7.9062C5.0622 3.6619 3.6542 5.0569 3.6542 7.9139V10.6899C3.6542 10.8809 3.5992 11.0039 3.4622 11.1269L1.5072 13.0819C-0.5028 15.1059 -0.5028 17.1019 1.5072 19.1119L3.4622 21.0669C3.5992 21.2039 3.6542 21.3269 3.6542 21.5039V24.2799C3.6542 27.1229 5.0762 28.5449 7.9062 28.5449Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.62134255146066 31.62819709886007"
          className={className}
        >
          <path
            d="              M7.5754 27.9725H10.4474C10.6794 27.9725 10.8434 28.0275 11.0074 28.2055L13.0444 30.2285C14.9174 32.1015 16.7084 32.0875 18.5814 30.2285L20.6054 28.2055C20.7834 28.0275 20.9474 27.9725 21.1794 27.9725H24.0504C26.6894 27.9725 27.9604 26.6875 27.9604 24.0485V21.1775C27.9604 20.9455 28.0294 20.7815 28.1934 20.6175L30.2164 18.5805C32.0894 16.7205 32.0894 14.9165 30.2164 13.0435L28.1934 11.0195C28.0154 10.8415 27.9604 10.6775 27.9604 10.4595V7.5875C27.9604 4.9495 26.6894 3.6645 24.0504 3.6645H21.1794C20.9474 3.6645 20.7834 3.5955 20.6054 3.4315L18.5814 1.4085C16.7084 -0.4785 14.9174 -0.4645 13.0444 1.4215L11.0074 3.4315C10.8434 3.5955 10.6794 3.6645 10.4474 3.6645H7.5754C4.9374 3.6645 3.6654 4.9215 3.6654 7.5875V10.4595C3.6654 10.6775 3.5974 10.8555 3.4334 11.0195L1.4094 13.0435C-0.4766 14.9165 -0.4636 16.7205 1.4094 18.5805L3.4334 20.6175C3.5974 20.7815 3.6654 20.9455 3.6654 21.1775V24.0485C3.6654 26.6875 4.9374 27.9725 7.5754 27.9725Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.915287700424617 31.928959544121078"
          className={className}
        >
          <path
            d="              M7.75 28.2756H10.567C10.772 28.2756 10.908 28.3166 11.072 28.4806L13.055 30.4626C14.996 32.4176 16.91 32.4176 18.852 30.4626L20.848 28.4806C21.012 28.3166 21.135 28.2756 21.34 28.2756H24.17C26.905 28.2756 28.258 26.9076 28.258 24.1736V21.3576C28.258 21.1526 28.326 21.0016 28.463 20.8646L30.459 18.8686C32.401 16.9276 32.401 15.0136 30.459 13.0716L28.463 11.0756C28.313 10.9256 28.258 10.7886 28.258 10.5836V7.7676C28.258 5.0196 26.905 3.6656 24.17 3.6656H21.34C21.135 3.6656 20.998 3.5976 20.848 3.4606L18.852 1.4646C16.897 -0.4904 14.996 -0.4904 13.055 1.4786L11.072 3.4606C10.922 3.5976 10.772 3.6656 10.567 3.6656H7.75C5.002 3.6656 3.649 4.9916 3.649 7.7676V10.5836C3.649 10.7886 3.594 10.9256 3.444 11.0756L1.461 13.0716C-0.494 15.0136 -0.48 16.9276 1.461 18.8686L3.444 20.8646C3.594 21.0016 3.649 21.1526 3.649 21.3576V24.1736C3.649 26.9216 5.016 28.2756 7.75 28.2756Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30.556640625 30.561773175182037"
          className={className}
        >
          <path
            d="              M6.8836 26.8495H10.0416C10.3566 26.8495 10.5756 26.9315 10.7936 27.1505L13.0496 29.3925C14.5946 30.9515 15.9616 30.9515 17.5206 29.3925L19.7626 27.1505C19.9956 26.9315 20.2136 26.8495 20.5146 26.8495H23.6726C25.8736 26.8495 26.8446 25.8795 26.8446 23.6775V20.5195C26.8446 20.2055 26.9406 19.9865 27.1596 19.7675L29.3876 17.5115C30.9466 15.9665 30.9466 14.5995 29.3876 13.0415L27.1596 10.7995C26.9406 10.5665 26.8446 10.3475 26.8446 10.0475V6.8885C26.8446 4.6875 25.8876 3.7165 23.6726 3.7165H20.5146C20.2136 3.7165 19.9956 3.6345 19.7626 3.4025L17.5206 1.1745C15.9616 -0.3985 14.5946 -0.3845 13.0366 1.1745L10.7936 3.4025C10.5756 3.6215 10.3566 3.7165 10.0416 3.7165H6.8836C4.6826 3.7165 3.7116 4.6745 3.7116 6.8885V10.0475C3.7116 10.3475 3.6166 10.5665 3.4116 10.7995L1.1686 13.0415C-0.3894 14.5995 -0.3894 15.9665 1.1686 17.5115L3.4116 19.7675C3.6166 19.9865 3.7116 20.2055 3.7116 20.5195V23.6775C3.7116 25.8795 4.6826 26.8495 6.8836 26.8495Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.2641699779272 31.262475651046927"
          className={className}
        >
          <path
            d="              M7.367 27.6003H10.293C10.553 27.6003 10.744 27.6683 10.936 27.8603L13.014 29.9243C14.791 31.7153 16.459 31.7013 18.237 29.9243L20.315 27.8603C20.52 27.6683 20.697 27.6003 20.971 27.6003H23.897C26.399 27.6003 27.588 26.4103 27.588 23.8953V20.9693C27.588 20.7093 27.67 20.5183 27.862 20.3263L29.926 18.2483C31.717 16.4713 31.703 14.8033 29.926 13.0263L27.862 10.9473C27.656 10.7423 27.588 10.5653 27.588 10.3053V7.3793C27.588 4.8633 26.412 3.6743 23.897 3.6743H20.971C20.697 3.6743 20.506 3.6063 20.315 3.4143L18.237 1.3363C16.459 -0.4547 14.791 -0.4407 13.014 1.3503L10.936 3.4143C10.744 3.5923 10.553 3.6743 10.293 3.6743H7.367C4.838 3.6743 3.662 4.8363 3.662 7.3793V10.3053C3.662 10.5653 3.594 10.7563 3.403 10.9473L1.338 13.0263C-0.453 14.8033 -0.439 16.4713 1.338 18.2483L3.403 20.3263C3.594 20.5183 3.662 20.7093 3.662 20.9693V23.8953C3.662 26.4103 4.852 27.6003 7.367 27.6003Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.059092163489282 31.05909216348928"
          className={className}
        >
          <path
            d="              M7.244 27.3826H10.211C10.485 27.3826 10.69 27.4646 10.895 27.6706L13 29.7616C14.723 31.4986 16.322 31.4846 18.045 29.7616L20.151 27.6706C20.369 27.4646 20.561 27.3826 20.848 27.3826H23.801C26.248 27.3826 27.383 26.2616 27.383 23.8006V20.8476C27.383 20.5606 27.465 20.3696 27.67 20.1506L29.762 18.0456C31.498 16.3226 31.485 14.7226 29.762 13.0006L27.67 10.8946C27.465 10.6896 27.383 10.4846 27.383 10.2116V7.2446C27.383 4.8106 26.262 3.6626 23.801 3.6626H20.848C20.561 3.6626 20.369 3.5936 20.151 3.3886L18.045 1.2966C16.322 -0.4394 14.723 -0.4254 13 1.2966L10.895 3.3886C10.69 3.5936 10.485 3.6626 10.211 3.6626H7.244C4.797 3.6626 3.662 4.7836 3.662 7.2446V10.2116C3.662 10.4846 3.594 10.6896 3.389 10.8946L1.297 13.0006C-0.439 14.7226 -0.426 16.3226 1.297 18.0456L3.389 20.1506C3.594 20.3696 3.662 20.5606 3.662 20.8476V23.8006C3.662 26.2486 4.797 27.3826 7.244 27.3826Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.42139631971848 31.42138671875"
          className={className}
        >
          <path
            d="              M7.4664 27.7609H10.3654C10.6114 27.7609 10.7884 27.8159 10.9664 28.0069L13.0314 30.0579C14.8494 31.8759 16.5724 31.8759 18.3904 30.0579L20.4414 28.0069C20.6324 27.8159 20.8104 27.7609 21.0564 27.7609H23.9544C26.5254 27.7609 27.7554 26.5299 27.7554 23.9599V21.0619C27.7554 20.8159 27.8244 20.6379 28.0014 20.4459L30.0524 18.3959C31.8844 16.5769 31.8704 14.8549 30.0524 13.0359L28.0014 10.9719C27.8244 10.7939 27.7554 10.6159 27.7554 10.3699V7.4719C27.7554 4.9009 26.5254 3.6709 23.9544 3.6709H21.0564C20.8104 3.6709 20.6324 3.6029 20.4414 3.4249L18.3904 1.3739C16.5724 -0.4581 14.8494 -0.4581 13.0314 1.3739L10.9664 3.4249C10.7884 3.6029 10.6114 3.6709 10.3654 3.6709H7.4664C4.8824 3.6709 3.6654 4.8739 3.6654 7.4719V10.3699C3.6654 10.6159 3.5974 10.7939 3.4194 10.9719L1.3684 13.0359C-0.4636 14.8549 -0.4496 16.5769 1.3684 18.3959L3.4194 20.4459C3.5974 20.6379 3.6654 20.8159 3.6654 21.0619V23.9599C3.6654 26.5299 4.8824 27.7609 7.4664 27.7609Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.8935546875 29.900390625"
          className={className}
        >
          <path
            d="              M6.395 26.1445H9.827C10.168 26.1445 10.401 26.2395 10.647 26.4855L13.094 28.9055C14.407 30.2315 15.487 30.2315 16.799 28.9055L19.247 26.4855C19.493 26.2395 19.725 26.1445 20.067 26.1445H23.499C25.372 26.1445 26.137 25.3925 26.137 23.5055V20.0735C26.137 19.7455 26.233 19.4995 26.465 19.2535L28.899 16.8065C30.225 15.4935 30.225 14.4135 28.899 13.1015L26.465 10.6675C26.233 10.4075 26.137 10.1755 26.137 9.8475V6.4155C26.137 4.5285 25.372 3.7635 23.499 3.7635H20.067C19.725 3.7635 19.493 3.6815 19.247 3.4355L16.799 1.0155C15.473 -0.3385 14.407 -0.3385 13.081 1.0155L10.647 3.4355C10.415 3.6675 10.168 3.7635 9.827 3.7635H6.395C4.522 3.7635 3.756 4.5285 3.756 6.4155V9.8475C3.756 10.1755 3.661 10.4075 3.415 10.6675L0.995 13.1015C-0.332 14.4135 -0.332 15.4935 0.995 16.8065L3.415 19.2535C3.661 19.4995 3.756 19.7455 3.756 20.0735V23.5055C3.756 25.3785 4.522 26.1445 6.395 26.1445Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.5517578125 29.56201171875"
          className={className}
        >
          <path
            d="              M6.149 25.7782H9.717C10.073 25.7782 10.319 25.8742 10.579 26.1342L13.108 28.6492C14.311 29.8662 15.241 29.8662 16.43 28.6492L18.973 26.1342C19.233 25.8742 19.479 25.7782 19.834 25.7782H23.403C25.112 25.7782 25.768 25.1222 25.768 23.4132V19.8442C25.768 19.4892 25.877 19.2432 26.124 18.9832L28.639 16.4402C29.856 15.2512 29.856 14.3212 28.639 13.1182L26.124 10.5892C25.877 10.3292 25.768 10.0832 25.768 9.7272V6.1592C25.768 4.4362 25.112 3.7942 23.403 3.7942H19.834C19.479 3.7942 19.233 3.6982 18.973 3.4382L16.43 0.9232C15.227 -0.3078 14.311 -0.3078 13.094 0.9232L10.579 3.4382C10.333 3.6842 10.073 3.7942 9.717 3.7942H6.149C4.426 3.7942 3.784 4.4362 3.784 6.1592V9.7272C3.784 10.0832 3.674 10.3292 3.428 10.5892L0.913 13.1182C-0.304 14.3212 -0.304 15.2512 0.913 16.4402L3.428 18.9832C3.674 19.2432 3.784 19.4892 3.784 19.8442V23.4132C3.784 25.1222 4.426 25.7782 6.149 25.7782Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}