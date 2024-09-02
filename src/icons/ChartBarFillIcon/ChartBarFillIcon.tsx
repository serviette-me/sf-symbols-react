import { IconProps } from "../../types"

export default function ChartBarFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.16796875 26.509765625"
          className={className}
        >
          <path
            d="              M32.7027 26.5095H35.7657C38.4997 26.5095 40.1677 24.7735 40.1677 22.1485V4.3615C40.1677 1.7365 38.4997 0.0005 35.7657 0.0005H32.7027C29.9687 0.0005 28.3007 1.7365 28.3007 4.3755V22.1485C28.3007 24.7735 29.9687 26.5095 32.7027 26.5095ZM18.5527 26.5095H21.6157C24.3637 26.5095 26.0317 24.7735 26.0317 22.1485V8.3265C26.0317 5.7015 24.3637 3.9645 21.6157 3.9645H18.5527C15.8187 3.9645 14.1507 5.7015 14.1507 8.3535V22.1485C14.1507 24.7735 15.8187 26.5095 18.5527 26.5095ZM4.4027 26.5095H7.4647C10.2127 26.5095 11.8807 24.7735 11.8807 22.1485V12.3865C11.8807 9.7615 10.2127 8.0255 7.4647 8.0255H4.4027C1.6677 8.0255 -0.0003 9.7615 -0.0003 12.4145V22.1485C-0.0003 24.7735 1.6677 26.5095 4.4027 26.5095Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.26953125 26.03125"
          className={className}
        >
          <path
            d="              M30.0647 26.0314H33.6327C35.9437 26.0314 37.2697 24.7184 37.2697 22.5044V3.5274C37.2697 1.3124 35.9437 0.0004 33.6327 0.0004H30.0647C27.7677 0.0004 26.4417 1.3124 26.4417 3.5414V22.5044C26.4417 24.7184 27.7677 26.0314 30.0647 26.0314ZM16.8437 26.0314H20.4117C22.7227 26.0314 24.0347 24.7184 24.0347 22.5044V7.5054C24.0347 5.2914 22.7227 3.9784 20.4117 3.9784H16.8437C14.5467 3.9784 13.2207 5.2914 13.2207 7.5194V22.5044C13.2207 24.7184 14.5467 26.0314 16.8437 26.0314ZM3.6227 26.0314H7.1917C9.5017 26.0314 10.8147 24.7184 10.8147 22.5044V11.5254C10.8147 9.3104 9.5017 7.9984 7.1917 7.9984H3.6227C1.3127 7.9984 -0.0003 9.3104 -0.0003 11.5394V22.5044C-0.0003 24.7184 1.3127 26.0314 3.6227 26.0314Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.80078125 26.27734375"
          className={className}
        >
          <path
            d="              M31.4587 26.2774H34.7537C37.2967 26.2774 38.8007 24.7464 38.8007 22.3124V3.9644C38.8007 1.5314 37.2967 0.0004 34.7537 0.0004H31.4587C28.9297 0.0004 27.4257 1.5314 27.4257 3.9784V22.3124C27.4257 24.7464 28.9297 26.2774 31.4587 26.2774ZM17.7457 26.2774H21.0407C23.5837 26.2774 25.0877 24.7464 25.0877 22.3124V7.9434C25.0877 5.5094 23.5837 3.9644 21.0407 3.9644H17.7457C15.2167 3.9644 13.7127 5.5094 13.7127 7.9574V22.3124C13.7127 24.7464 15.2167 26.2774 17.7457 26.2774ZM4.0337 26.2774H7.3277C9.8707 26.2774 11.3747 24.7464 11.3747 22.3124V11.9764C11.3747 9.5434 9.8707 8.0114 7.3277 8.0114H4.0337C1.5037 8.0114 -0.0003 9.5434 -0.0003 11.9904V22.3124C-0.0003 24.7464 1.5037 26.2774 4.0337 26.2774Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.6875 25.470703125"
          className={className}
        >
          <path
            d="              M26.9477 25.4706H31.0627C32.7987 25.4706 33.6877 24.6226 33.6877 22.9276V2.5566C33.6877 0.8476 32.7987 -0.0004 31.0627 -0.0004H26.9477C25.2107 -0.0004 24.3227 0.8476 24.3227 2.5566V22.9276C24.3227 24.6226 25.2107 25.4706 26.9477 25.4706ZM14.7797 25.4706H18.9087C20.6447 25.4706 21.5197 24.6226 21.5197 22.9276V6.5216C21.5197 4.8266 20.6447 3.9786 18.9087 3.9786H14.7797C13.0427 3.9786 12.1677 4.8266 12.1677 6.5216V22.9276C12.1677 24.6226 13.0427 25.4706 14.7797 25.4706ZM2.6117 25.4706H6.7407C8.4767 25.4706 9.3657 24.6226 9.3657 22.9276V10.4586C9.3657 8.7496 8.4767 7.9026 6.7407 7.9026H2.6117C0.8887 7.9026 -0.0003 8.7496 -0.0003 10.4586V22.9276C-0.0003 24.6226 0.8887 25.4706 2.6117 25.4706Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.41015625 25.744140625"
          className={className}
        >
          <path
            d="              M28.3827 25.7437H32.2657C34.3167 25.7437 35.4097 24.6777 35.4097 22.7367V3.0077C35.4097 1.0527 34.3167 -0.0003 32.2657 -0.0003H28.3827C26.3597 -0.0003 25.2657 1.0527 25.2657 3.0077V22.7367C25.2657 24.6777 26.3597 25.7437 28.3827 25.7437ZM15.7497 25.7437H19.6467C21.6837 25.7437 22.7777 24.6777 22.7777 22.7367V6.9867C22.7777 5.0447 21.6837 3.9917 19.6467 3.9917H15.7497C13.7267 3.9917 12.6327 5.0447 12.6327 6.9997V22.7367C12.6327 24.6777 13.7267 25.7437 15.7497 25.7437ZM3.1177 25.7437H7.0137C9.0507 25.7437 10.1447 24.6777 10.1447 22.7367V10.9787C10.1447 9.0367 9.0507 7.9847 7.0137 7.9847H3.1177C1.0937 7.9847 -0.0003 9.0367 -0.0003 10.9917V22.7367C-0.0003 24.6777 1.0937 25.7437 3.1177 25.7437Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.357421875 25.56640625"
          className={className}
        >
          <path
            d="              M27.4257 25.566H31.4997C33.3867 25.566 34.3577 24.664 34.3577 22.873V2.707C34.3577 0.916 33.3867 0 31.4997 0H27.4257C25.5667 0 24.5957 0.916 24.5957 2.707V22.873C24.5957 24.664 25.5667 25.566 27.4257 25.566ZM15.1347 25.566H19.2087C21.0957 25.566 22.0527 24.664 22.0527 22.873V6.699C22.0527 4.908 21.0957 3.992 19.2087 3.992H15.1347C13.2617 3.992 12.2907 4.908 12.2907 6.699V22.873C12.2907 24.664 13.2617 25.566 15.1347 25.566ZM2.8437 25.566H6.9047C8.7907 25.566 9.7617 24.664 9.7617 22.873V10.678C9.7617 8.887 8.7907 7.971 6.9047 7.971H2.8437C0.9707 7.971 -0.0003 8.887 -0.0003 10.678V22.873C-0.0003 24.664 0.9707 25.566 2.8437 25.566Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 36.203125 25.8671875"
          className={className}
        >
          <path
            d="              M29.1077 25.8667H32.8537C35.0137 25.8667 36.2027 24.6917 36.2027 22.6407V3.2267C36.2027 1.1757 35.0137 -0.0003 32.8537 -0.0003H29.1077C26.9607 -0.0003 25.7717 1.1757 25.7717 3.2407V22.6407C25.7717 24.6917 26.9607 25.8667 29.1077 25.8667ZM16.2287 25.8667H19.9747C22.1347 25.8667 23.3247 24.6917 23.3247 22.6407V7.2187C23.3247 5.1547 22.1347 3.9787 19.9747 3.9787H16.2287C14.0817 3.9787 12.8927 5.1547 12.8927 7.2187V22.6407C12.8927 24.6917 14.0817 25.8667 16.2287 25.8667ZM3.3357 25.8667H7.0817C9.2427 25.8667 10.4317 24.6917 10.4317 22.6407V11.2107C10.4317 9.1597 9.2427 7.9847 7.0817 7.9847H3.3357C1.1897 7.9847 -0.0003 9.1597 -0.0003 11.2247V22.6407C-0.0003 24.6917 1.1897 25.8667 3.3357 25.8667Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.798828125 25.333984375"
          className={className}
        >
          <path
            d="              M26.2907 25.3339H30.4887C32.0197 25.3339 32.7987 24.5679 32.7987 22.9819V2.3519C32.7987 0.7659 32.0197 -0.0001 30.4887 -0.0001H26.2907C24.7457 -0.0001 23.9667 0.7659 23.9667 2.3519V22.9819C23.9667 24.5679 24.7457 25.3339 26.2907 25.3339ZM14.3007 25.3339H18.4977C20.0427 25.3339 20.8227 24.5679 20.8227 22.9819V6.2889C20.8227 4.7169 20.0427 3.9379 18.4977 3.9379H14.3007C12.7697 3.9379 11.9907 4.7169 11.9907 6.2889V22.9819C11.9907 24.5679 12.7697 25.3339 14.3007 25.3339ZM2.3247 25.3339H6.5077C8.0527 25.3339 8.8317 24.5679 8.8317 22.9819V10.1579C8.8317 8.5859 8.0527 7.8069 6.5077 7.8069H2.3247C0.7797 7.8069 -0.0003 8.5859 -0.0003 10.1579V22.9819C-0.0003 24.5679 0.7797 25.3339 2.3247 25.3339Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.34765625 25.265625"
          className={className}
        >
          <path
            d="              M25.9627 25.2659H30.1877C31.6227 25.2659 32.3477 24.5409 32.3477 23.0239V2.2559C32.3477 0.7379 31.6227 -0.0001 30.1877 -0.0001H25.9627C24.5137 -0.0001 23.7887 0.7379 23.7887 2.2559V23.0239C23.7887 24.5409 24.5137 25.2659 25.9627 25.2659ZM14.0687 25.2659H18.2927C19.7287 25.2659 20.4527 24.5409 20.4527 23.0239V6.1799C20.4527 4.6619 19.7287 3.9379 18.2927 3.9379H14.0687C12.6187 3.9379 11.8947 4.6619 11.8947 6.1799V23.0239C11.8947 24.5409 12.6187 25.2659 14.0687 25.2659ZM2.1737 25.2659H6.3987C7.8337 25.2659 8.5587 24.5409 8.5587 23.0239V10.0079C8.5587 8.5039 7.8337 7.7659 6.3987 7.7659H2.1737C0.7247 7.7659 -0.0003 8.5039 -0.0003 10.0079V23.0239C-0.0003 24.5409 0.7247 25.2659 2.1737 25.2659Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}