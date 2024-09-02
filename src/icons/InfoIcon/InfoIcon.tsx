import { IconProps } from "../../types"

export default function InfoIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14.602465125074291 23.666015625"
          className={className}
        >
          <path
            d="              M3.9651 3.1991C3.9651 4.9901 5.3731 6.4121 7.1511 6.4121C8.9551 6.4121 10.3361 4.9901 10.3361 3.1991C10.3361 1.4081 8.9551 0.0001 7.1511 0.0001C5.3731 0.0001 3.9651 1.4081 3.9651 3.1991ZM0.0001 20.7811C0.0281 22.5861 1.2441 23.6661 3.2001 23.6661H11.3891C13.3581 23.6661 14.5611 22.5861 14.6021 20.7811C14.6291 18.8941 13.4121 17.7601 11.3891 17.7601H10.6371V10.9511C10.6371 9.1331 9.4751 8.0941 7.6701 8.0941H3.5551C1.5321 8.0941 0.3151 9.2281 0.3421 11.1151C0.3831 12.9201 1.5861 14.0141 3.5551 14.0141H4.6901V17.7601H3.2001C1.1901 17.7601 -0.0269 18.8941 0.0001 20.7811Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.825014092224293 22.435546875"
          className={className}
        >
          <path
            d="              M3.6778 2.5978C3.6778 4.0328 4.8128 5.1818 6.2478 5.1818C7.7108 5.1818 8.8318 4.0328 8.8318 2.5978C8.8318 1.1488 7.7108 -0.0002 6.2478 -0.0002C4.8128 -0.0002 3.6778 1.1488 3.6778 2.5978ZM-0.0002 20.4258C0.0138 21.6698 0.8618 22.4358 2.2018 22.4358H10.6228C11.9628 22.4358 12.8108 21.6698 12.8248 20.4258C12.8518 19.1538 11.9908 18.3618 10.6228 18.3618H8.8728V9.7348C8.8728 8.4628 8.0528 7.6968 6.7948 7.6968H2.5708C1.2028 7.6968 0.3558 8.4768 0.3688 9.7618C0.3828 10.9918 1.2308 11.7718 2.5708 11.7718H4.6348V18.3618H2.2018C0.8338 18.3618 -0.0132 19.1538 -0.0002 20.4258Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 13.768238048440148 23.091796875"
          className={className}
        >
          <path
            d="              M3.8282 2.9253C3.8282 4.5393 5.1002 5.8383 6.7272 5.8383C8.3682 5.8383 9.6252 4.5393 9.6252 2.9253C9.6252 1.2853 8.3682 0.0003 6.7272 0.0003C5.1002 0.0003 3.8282 1.2853 3.8282 2.9253ZM0.0002 20.6173C0.0282 22.1483 1.0672 23.0913 2.7352 23.0913H11.0342C12.7022 23.0913 13.7412 22.1483 13.7682 20.6173C13.7822 19.0173 12.7432 18.0473 11.0342 18.0473H9.8032V10.3773C9.8032 8.8183 8.8052 7.9163 7.2602 7.9163H3.0902C1.3682 7.9163 0.3282 8.8733 0.3562 10.4723C0.3832 12.0173 1.4222 12.9473 3.0902 12.9473H4.6622V18.0473H2.7352C1.0122 18.0473 -0.0268 19.0173 0.0002 20.6173Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10.541015625 20.7265625"
          className={className}
        >
          <path
            d="              M3.4317 1.6816C3.4317 2.5976 4.1697 3.3226 5.0997 3.3226C6.0297 3.3226 6.7537 2.5976 6.7407 1.6816C6.7407 0.7386 6.0297 -0.0004 5.0997 -0.0004C4.1697 -0.0004 3.4317 0.7386 3.4317 1.6816ZM-0.0003 19.8656C-0.0003 20.3846 0.3687 20.7266 0.9157 20.7266H9.6247C10.1717 20.7266 10.5407 20.3846 10.5407 19.8656C10.5407 19.3596 10.1717 19.0176 9.6247 19.0176H6.5627V7.8886C6.5627 7.3286 6.1937 6.9586 5.6597 6.9586H1.4217C0.8617 6.9586 0.4927 7.2866 0.4927 7.8066C0.4927 8.3126 0.8617 8.6676 1.4217 8.6676H4.6487V19.0176H0.9157C0.3687 19.0176 -0.0003 19.3596 -0.0003 19.8656Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.689676406093616 21.62890625"
          className={className}
        >
          <path
            d="              M3.4867 2.2009C3.4867 3.4179 4.4567 4.3889 5.6737 4.3889C6.9047 4.3889 7.8617 3.4179 7.8617 2.2009C7.8617 0.9709 6.9047 -0.0001 5.6737 -0.0001C4.4567 -0.0001 3.4867 0.9709 3.4867 2.2009ZM-0.0003 20.1799C-0.0003 21.0679 0.6157 21.6289 1.5587 21.6289H10.1307C11.0747 21.6289 11.6897 21.0679 11.6897 20.1799C11.7027 19.3049 11.0877 18.7439 10.1307 18.7439H7.7387V8.9549C7.7387 8.0249 7.1367 7.4379 6.2347 7.4379H1.9417C0.9847 7.4379 0.3687 7.9979 0.3827 8.8729C0.3827 9.7619 0.9977 10.3219 1.9417 10.3219H4.6077V18.7439H1.5587C0.6017 18.7439 -0.0003 19.3049 -0.0003 20.1799Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 11.060546875 21.177734375"
          className={className}
        >
          <path
            d="              M3.3907 1.9828C3.3907 3.0758 4.2657 3.9508 5.3597 3.9508C6.4667 3.9508 7.3147 3.0758 7.3147 1.9828C7.3147 0.8748 6.4667 -0.0002 5.3597 -0.0002C4.2657 -0.0002 3.3907 0.8748 3.3907 1.9828ZM-0.0003 20.0568C-0.0003 20.7268 0.4787 21.1778 1.2027 21.1778H9.8577C10.5817 21.1778 11.0607 20.7268 11.0607 20.0568C11.0607 19.4008 10.5817 18.9488 9.8577 18.9488H7.1097V8.5178C7.1097 7.7798 6.6307 7.2868 5.9197 7.2868H1.5857C0.8747 7.2868 0.3827 7.7248 0.3827 8.3808C0.3827 9.0648 0.8747 9.5158 1.5857 9.5158H4.5797V18.9488H1.2027C0.4787 18.9488 -0.0003 19.4008 -0.0003 20.0568Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12.182024507573853 21.970703125"
          className={className}
        >
          <path
            d="              M3.5689 2.365C3.5689 3.678 4.6079 4.73 5.9199 4.73C7.2599 4.73 8.2849 3.678 8.2849 2.365C8.2719 1.039 7.2599 0 5.9199 0C4.6079 0 3.5689 1.039 3.5689 2.365ZM-0.0001 20.275C0.0139 21.314 0.7249 21.971 1.8319 21.971H10.3499C11.4569 21.971 12.1679 21.314 12.1819 20.275C12.1959 19.236 11.4849 18.566 10.3499 18.566H8.2309V9.283C8.2309 8.203 7.5339 7.533 6.4809 7.533H2.2149C1.0799 7.533 0.3689 8.203 0.3689 9.256C0.3829 10.281 1.0939 10.937 2.2149 10.937H4.6209V18.566H1.8319C0.7109 18.566 -0.0131 19.236 -0.0001 20.275Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.857421875 20.125"
          className={className}
        >
          <path
            d="              M3.4997 1.258C3.4997 1.955 4.0607 2.475 4.7577 2.475C5.4417 2.475 6.0017 1.955 5.9887 1.258C5.9747 0.56 5.4417 0 4.7577 0C4.0607 0 3.4997 0.56 3.4997 1.258ZM-0.0003 19.619C-0.0003 19.92 0.2047 20.125 0.5467 20.125H9.3107C9.6387 20.125 9.8577 19.92 9.8577 19.619C9.8577 19.318 9.6387 19.113 9.3107 19.113H5.8377V7.068C5.8377 6.727 5.6187 6.508 5.3047 6.508H1.1897C0.8617 6.508 0.6427 6.713 0.6427 7.027C0.6427 7.328 0.8617 7.533 1.1897 7.533H4.7577V19.113H0.5467C0.2047 19.113 -0.0003 19.318 -0.0003 19.619Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 9.501953125 19.810546875"
          className={className}
        >
          <path
            d="              M3.5277 1.0526C3.5277 1.6136 4.0057 2.0376 4.5797 2.0376C5.1407 2.0376 5.6187 1.6136 5.6057 1.0526C5.5917 0.4646 5.1407 -0.0004 4.5797 -0.0004C4.0057 -0.0004 3.5277 0.4646 3.5277 1.0526ZM-0.0003 19.4826C-0.0003 19.6876 0.1367 19.8106 0.3557 19.8106H9.1467C9.3657 19.8106 9.5017 19.6876 9.5017 19.4826C9.5017 19.2776 9.3657 19.1406 9.1467 19.1406H5.4687V6.6306C5.4687 6.4126 5.3317 6.2756 5.1267 6.2756H1.0667C0.8617 6.2756 0.7247 6.4126 0.7247 6.6176C0.7247 6.8226 0.8617 6.9456 1.0667 6.9456H4.7987V19.1406H0.3557C0.1367 19.1406 -0.0003 19.2776 -0.0003 19.4826Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}