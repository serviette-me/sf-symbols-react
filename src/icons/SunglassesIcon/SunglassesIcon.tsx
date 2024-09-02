import { IconProps } from "../../types"

export default function SunglassesIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48.48046875 17.390625"
          className={className}
        >
          <path
            d="              M24.2407 7.2464C24.4997 7.2464 24.7047 7.3964 24.8277 7.6704L26.1817 10.7594C28.2597 15.5724 31.9647 17.3904 35.8477 17.3904C41.5347 17.3904 45.1307 13.7404 46.6757 6.9864L47.0317 5.4144C47.4007 3.8284 48.4807 3.2124 48.4807 1.9144C48.4807 0.8474 47.7147 0.0004 46.1697 0.0004C41.4117 0.0004 36.8047 0.2464 34.2067 0.6284C29.1487 1.3944 26.6737 2.7894 24.2407 2.7894C21.8067 2.7894 19.3317 1.3944 14.2737 0.6284C11.6757 0.2464 7.0817 0.0004 2.3107 0.0004C0.7657 0.0004 -0.0003 0.8474 -0.0003 1.9144C-0.0003 3.2124 1.0937 3.8284 1.4487 5.4144L1.8047 6.9864C3.3497 13.7404 6.9457 17.3904 12.6467 17.3904C16.5157 17.3904 20.2207 15.5724 22.3127 10.7594L23.6527 7.6704C23.7757 7.3964 23.9807 7.2464 24.2407 7.2464ZM12.6597 13.4394C8.5727 13.4394 5.7697 10.3774 5.7697 6.0154C5.7697 4.7984 6.6307 4.2654 9.5567 4.2654C16.1187 4.2654 18.7847 5.2914 18.7847 7.3414C18.7847 10.9104 16.2827 13.4394 12.6597 13.4394ZM35.8207 13.4394C32.2107 13.4394 29.6957 10.9104 29.6957 7.3414C29.6957 5.2914 32.3747 4.2654 38.9237 4.2654C41.8497 4.2654 42.7247 4.7984 42.7247 6.0154C42.7247 10.3774 39.9077 13.4394 35.8207 13.4394Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 45.376953125 15.818359375"
          className={className}
        >
          <path
            d="              M22.6817 6.1801C23.0507 6.1801 23.3657 6.3981 23.5427 6.7811L24.9507 9.9671C26.8107 14.1501 30.1597 15.8181 33.7417 15.8181C39.0057 15.8181 42.4917 12.5101 43.6547 6.5351L43.9547 4.8941C44.2827 3.1721 45.3767 2.5841 45.3767 1.5311C45.3767 0.6421 44.7347 0.0001 43.4907 0.0001C38.9507 0.0001 34.6987 0.2321 32.2387 0.6011C27.2757 1.3401 25.0737 2.6661 22.6817 2.6661C20.3027 2.6661 18.1017 1.3401 13.1387 0.6011C10.6777 0.2321 6.4117 0.0001 1.8867 0.0001C0.6427 0.0001 -0.0003 0.6421 -0.0003 1.5311C-0.0003 2.5841 1.0937 3.1721 1.4077 4.8941L1.7227 6.5351C2.8847 12.5101 6.3707 15.8181 11.6347 15.8181C15.2167 15.8181 18.5667 14.1501 20.4257 9.9671L21.8337 6.7811C22.0117 6.3981 22.3257 6.1801 22.6817 6.1801ZM11.6487 12.8241C7.3557 12.8241 4.7027 9.7341 4.7027 5.3591C4.7027 3.9781 5.7827 3.3361 8.6957 3.3361C15.0257 3.3361 17.8687 4.4431 17.8687 6.6311C17.8687 10.1581 15.4487 12.8241 11.6487 12.8241ZM33.7287 12.8241C29.9277 12.8241 27.5077 10.1581 27.5077 6.6311C27.5077 4.4431 30.3517 3.3361 36.6817 3.3361C39.5937 3.3361 40.6737 3.9781 40.6737 5.3591C40.6737 9.7341 38.0217 12.8241 33.7287 12.8241Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 47.017578125 16.65234375"
          className={className}
        >
          <path
            d="              M23.5017 6.7403C23.8167 6.7403 24.0757 6.9183 24.2267 7.2463L25.5937 10.3773C27.5757 14.9023 31.1167 16.6523 34.8497 16.6523C40.3317 16.6523 43.8867 13.1663 45.2537 6.7673L45.5817 5.1683C45.9237 3.5133 47.0177 2.9123 47.0177 1.7363C47.0177 0.7523 46.3067 0.0003 44.8987 0.0003C40.2497 0.0003 35.8067 0.2463 33.2777 0.6153C28.2597 1.3673 25.9217 2.7343 23.5017 2.7343C21.0957 2.7343 18.7437 1.3673 13.7407 0.6153C11.2107 0.2463 6.7677 0.0003 2.1187 0.0003C0.7107 0.0003 -0.0003 0.7523 -0.0003 1.7363C-0.0003 2.9123 1.0937 3.5133 1.4357 5.1683L1.7637 6.7673C3.1307 13.1663 6.6857 16.6523 12.1677 16.6523C15.9007 16.6523 19.4417 14.9023 21.4237 10.3773L22.7907 7.2463C22.9417 6.9183 23.2007 6.7403 23.5017 6.7403ZM12.1817 13.1383C7.9977 13.1383 5.2637 10.0763 5.2637 5.7013C5.2637 4.4163 6.2347 3.8283 9.1467 3.8283C15.5997 3.8283 18.3477 4.8943 18.3477 7.0003C18.3477 10.5543 15.8867 13.1383 12.1817 13.1383ZM34.8357 13.1383C31.1307 13.1383 28.6697 10.5543 28.6697 7.0003C28.6697 4.8943 31.4177 3.8283 37.8707 3.8283C40.7827 3.8283 41.7537 4.4163 41.7537 5.7013C41.7537 10.0763 39.0197 13.1383 34.8357 13.1383Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.0703125 13.630859375"
          className={className}
        >
          <path
            d="              M20.5347 4.6214C21.1097 4.6214 21.5607 4.9354 21.8207 5.5094L23.2827 8.7364C24.8687 12.1814 27.7127 13.6304 30.9117 13.6304C35.5737 13.6304 38.8557 10.8144 39.5387 5.7424L39.7987 3.9104C40.0317 2.2694 41.0707 1.6274 41.0707 0.9024C41.0707 0.3554 40.6737 0.0004 39.8947 0.0004C35.6567 0.0004 31.8687 0.2184 29.5857 0.5604C24.8147 1.2714 22.9137 2.5154 20.5347 2.5154C18.1567 2.5154 16.2557 1.2714 11.4847 0.5604C9.2007 0.2184 5.4137 0.0004 1.1757 0.0004C0.3967 0.0004 -0.0003 0.3554 -0.0003 0.9024C-0.0003 1.6274 1.0387 2.2694 1.2717 3.9104L1.5317 5.7424C2.2147 10.8144 5.4957 13.6304 10.1577 13.6304C13.3577 13.6304 16.2007 12.1814 17.7737 8.7364L19.2497 5.5094C19.5097 4.9354 19.9607 4.6214 20.5347 4.6214ZM10.1717 12.0314C5.6057 12.0314 3.0757 8.8734 3.0757 4.4164C3.0757 2.7484 4.4567 1.9964 7.4097 1.9964C13.4937 1.9964 16.6247 3.2544 16.6247 5.6194C16.6247 9.1604 14.2327 12.0314 10.1717 12.0314ZM30.8987 12.0314C26.8377 12.0314 24.4457 9.1604 24.4457 5.6194C24.4457 3.2544 27.5757 1.9964 33.6597 1.9964C36.6137 1.9964 37.9937 2.7484 37.9937 4.4164C37.9937 8.8734 35.4647 12.0314 30.8987 12.0314Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.380859375 14.8203125"
          className={className}
        >
          <path
            d="              M21.6977 5.4963C22.1207 5.4963 22.5037 5.7563 22.7087 6.2203L24.1717 9.4473C25.8807 13.2343 28.9977 14.8203 32.4027 14.8203C37.3787 14.8203 40.8107 11.7303 41.7127 6.2342L41.9997 4.5523C42.2867 2.7483 43.3807 2.1743 43.3807 1.2712C43.3807 0.5063 42.8207 0.0003 41.7677 0.0003C37.3927 0.0003 33.3597 0.2183 30.9807 0.5742C26.0727 1.3123 24.0487 2.5843 21.6977 2.5843C19.3317 2.5843 17.3227 1.3123 12.4007 0.5742C10.0347 0.2183 6.0017 0.0003 1.6137 0.0003C0.5607 0.0003 -0.0003 0.5063 -0.0003 1.2712C-0.0003 2.1743 1.0937 2.7483 1.3947 4.5523L1.6677 6.2342C2.5837 11.7303 6.0017 14.8203 10.9787 14.8203C14.3827 14.8203 17.4997 13.2343 19.2227 9.4473L20.6717 6.2203C20.8767 5.7563 21.2597 5.4963 21.6977 5.4963ZM11.0057 12.4142C6.5757 12.4142 4.0197 9.3242 4.0197 4.9353C4.0197 3.4453 5.2367 2.7342 8.1347 2.7342C14.3277 2.7342 17.2817 3.8963 17.2817 6.1663C17.2817 9.6663 14.9157 12.4142 11.0057 12.4142ZM32.3887 12.4142C28.4787 12.4142 26.1137 9.6663 26.1137 6.1663C26.1137 3.8963 29.0667 2.7342 35.2457 2.7342C38.1447 2.7342 39.3617 3.4453 39.3617 4.9353C39.3617 9.3242 36.8187 12.4142 32.3887 12.4142Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.259765625 14.24609375"
          className={className}
        >
          <path
            d="              M21.1367 5.1131C21.6017 5.1131 22.0117 5.3871 22.2437 5.8921L23.7207 9.1601C25.3617 12.7281 28.3557 14.2461 31.6507 14.2461C36.4627 14.2461 39.8537 11.2791 40.6327 6.0561L40.8927 4.3611C41.1657 2.5151 42.2597 1.9281 42.2597 1.1351C42.2597 0.4371 41.7537 0.0001 40.8107 0.0001C36.5037 0.0001 32.5937 0.2191 30.2697 0.5601C25.3887 1.2851 23.4747 2.5291 21.1367 2.5291C18.7847 2.5291 16.8707 1.2851 11.9907 0.5601C9.6657 0.2191 5.7557 0.0001 1.4627 0.0001C0.5197 0.0001 -0.0003 0.4371 -0.0003 1.1351C-0.0003 1.9281 1.1077 2.5151 1.3807 4.3611L1.6407 6.0561C2.4067 11.2791 5.7967 14.2461 10.6227 14.2461C13.9177 14.2461 16.9117 12.7281 18.5387 9.1601L20.0297 5.8921C20.2477 5.3871 20.6577 5.1131 21.1367 5.1131ZM10.6367 12.1811C6.1247 12.1811 3.6367 9.0921 3.6367 4.6891C3.6367 3.1441 4.9357 2.4061 7.8207 2.4061C13.9317 2.4061 16.9397 3.5821 16.9397 5.8921C16.9397 9.3791 14.6157 12.1811 10.6367 12.1811ZM31.6227 12.1811C27.6577 12.1811 25.3207 9.3791 25.3207 5.8921C25.3207 3.5821 28.3277 2.4061 34.4397 2.4061C37.3377 2.4061 38.6227 3.1441 38.6227 4.6891C38.6227 9.0921 36.1347 12.1811 31.6227 12.1811Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 44.2421875 15.244140625"
          className={className}
        >
          <path
            d="              M22.1207 5.797C22.5177 5.797 22.8727 6.029 23.0647 6.467L24.4997 9.666C26.2777 13.631 29.5037 15.244 32.9767 15.244C38.0757 15.244 41.5347 12.072 42.5467 6.357L42.8477 4.703C43.1487 2.939 44.2417 2.352 44.2417 1.381C44.2417 0.574 43.6407 0 42.5057 0C38.0627 0 33.9337 0.232 31.5277 0.588C26.5917 1.326 24.4997 2.625 22.1207 2.625C19.7417 2.625 17.6507 1.326 12.7147 0.588C10.3087 0.232 6.1797 0 1.7367 0C0.6017 0 -0.0003 0.574 -0.0003 1.381C-0.0003 2.352 1.0937 2.939 1.4077 4.703L1.6957 6.357C2.7067 12.072 6.1657 15.244 11.2657 15.244C14.7387 15.244 17.9647 13.631 19.7417 9.666L21.1777 6.467C21.3687 6.029 21.7247 5.797 22.1207 5.797ZM11.2797 12.592C6.9047 12.592 4.3207 9.502 4.3207 5.113C4.3207 3.678 5.4687 2.994 8.3807 2.994C14.6287 2.994 17.5277 4.143 17.5277 6.357C17.5277 9.871 15.1347 12.592 11.2797 12.592ZM32.9627 12.592C29.1077 12.592 26.7147 9.871 26.7147 6.357C26.7147 4.143 29.6137 2.994 35.8617 2.994C38.7737 2.994 39.9357 3.678 39.9357 5.113C39.9357 9.502 37.3377 12.592 32.9627 12.592Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.484375 12.796875"
          className={className}
        >
          <path
            d="              M19.7417 3.9512C20.4667 3.9512 20.9587 4.3202 21.2737 5.0042L22.7087 8.1762C24.2127 11.4572 26.8517 12.7972 29.9277 12.7972C34.4117 12.7972 37.5157 10.1992 38.1037 5.3182L38.3497 3.2952C38.5277 1.9412 39.4847 1.2172 39.4847 0.6012C39.4847 0.2462 39.2387 0.0002 38.6777 0.0002C34.5217 0.0002 30.8987 0.2192 28.6837 0.5472C24.0627 1.2442 22.1617 2.4612 19.7417 2.4612C17.3227 2.4612 15.4357 1.2442 10.8007 0.5472C8.5857 0.2192 4.9627 0.0002 0.8067 0.0002C0.2457 0.0002 -0.0003 0.2462 -0.0003 0.6012C-0.0003 1.2172 0.9567 1.9412 1.1347 3.2952L1.3807 5.3182C1.9687 10.1992 5.0857 12.7972 9.5567 12.7972C12.6327 12.7972 15.2717 11.4572 16.7757 8.1762L18.2107 5.0042C18.5257 4.3202 19.0177 3.9512 19.7417 3.9512ZM9.5707 11.8122C4.8947 11.8122 2.3237 8.5722 2.3237 4.0472C2.3237 2.2152 3.8277 1.4632 6.8497 1.4632C12.9067 1.4632 16.2007 2.8032 16.2007 5.2222C16.2007 8.8592 13.7267 11.8122 9.5707 11.8122ZM29.9137 11.8122C25.7577 11.8122 23.2827 8.8592 23.2827 5.2222C23.2827 2.8032 26.5777 1.4632 32.6347 1.4632C35.6697 1.4632 37.1597 2.2152 37.1597 4.0472C37.1597 8.5722 34.5897 11.8122 29.9137 11.8122Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.677734375 12.373046875"
          className={className}
        >
          <path
            d="              M19.3317 3.5955C20.1247 3.5955 20.6577 4.0055 20.9867 4.7445L22.4217 7.8755C23.8847 11.0875 26.4137 12.3735 29.4357 12.3735C33.8107 12.3735 36.8317 9.8715 37.3787 5.0855L37.6117 2.9665C37.7477 1.7635 38.6777 0.9845 38.6777 0.4375C38.6777 0.1775 38.4997 0.0005 38.0627 0.0005C33.9477 0.0005 30.4067 0.2055 28.2187 0.5335C23.6657 1.2165 21.7797 2.4335 19.3317 2.4335C16.8987 2.4335 15.0117 1.2165 10.4587 0.5335C8.2577 0.2055 4.7307 0.0005 0.6157 0.0005C0.1637 0.0005 -0.0003 0.1775 -0.0003 0.4375C-0.0003 0.9845 0.9157 1.7635 1.0527 2.9665L1.2987 5.0855C1.8457 9.8715 4.8667 12.3735 9.2417 12.3735C12.2497 12.3735 14.7927 11.0875 16.2557 7.8755L17.6917 4.7445C18.0197 4.0055 18.5527 3.5955 19.3317 3.5955ZM9.2557 11.7035C4.5387 11.7035 1.9417 8.4085 1.9417 3.8555C1.9417 1.9275 3.4997 1.1755 6.5757 1.1755C12.6057 1.1755 15.9827 2.5565 15.9827 5.0175C15.9827 8.6955 13.4667 11.7035 9.2557 11.7035ZM29.4217 11.7035C25.2107 11.7035 22.6957 8.6955 22.6957 5.0175C22.6957 2.5565 26.0587 1.1755 32.1017 1.1755C35.1777 1.1755 36.7367 1.9275 36.7367 3.8555C36.7367 8.4085 34.1247 11.7035 29.4217 11.7035Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
