import { IconProps } from "../../types"

export default function DocAppendIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.484375 30.87109375"
          className={className}
        >
          <path
            d="              M-0.0003 25.498C-0.0003 28.889 1.9827 30.871 5.3597 30.871H20.1247C23.5157 30.871 25.4847 28.889 25.4847 25.498V5.373C25.4847 1.982 23.5157 0 20.1247 0H5.3597C1.9827 0 -0.0003 1.982 -0.0003 5.373ZM4.8537 24.76V6.111C4.8537 5.264 5.1957 4.854 6.1117 4.854H19.3867C20.2887 4.854 20.6307 5.264 20.6307 6.111V24.76C20.6307 25.607 20.2887 26.018 19.3867 26.018H6.1117C5.1957 26.018 4.8537 25.607 4.8537 24.76ZM15.7497 13.959C17.1177 13.959 18.1287 13.029 18.1287 11.635C18.1287 10.322 17.2537 9.434 16.1187 9.434C15.5177 9.434 15.0667 9.625 14.7517 9.994H14.4787C14.5747 9.666 14.8067 9.311 15.1757 9.01C15.5037 8.736 15.9417 8.504 16.4887 8.422C16.8167 8.354 16.9527 8.203 16.9527 7.902C16.9527 7.629 16.7477 7.451 16.4337 7.451C15.6267 7.451 14.7517 7.916 14.1097 8.559C13.4527 9.215 13.1657 10.145 13.1657 11.074C13.1657 12.893 14.2867 13.959 15.7497 13.959ZM9.9117 13.959C11.2657 13.959 12.2777 13.029 12.2777 11.635C12.2777 10.322 11.4027 9.434 10.2677 9.434C9.6657 9.434 9.2147 9.625 8.9007 9.994H8.6267C8.7087 9.693 8.9277 9.338 9.2287 9.051C9.5837 8.736 10.0487 8.477 10.6367 8.422C10.8827 8.395 11.1017 8.23 11.1017 7.902C11.1017 7.643 10.8967 7.451 10.5817 7.451C9.8027 7.451 8.9417 7.861 8.2577 8.559C7.6017 9.215 7.3147 10.145 7.3147 11.074C7.3147 12.893 8.4357 13.959 9.9117 13.959ZM8.5037 19.182H16.9667C17.5277 19.182 17.9517 18.744 17.9517 18.184C17.9517 17.637 17.5277 17.227 16.9667 17.227H8.5037C7.9297 17.227 7.5057 17.637 7.5057 18.184C7.5057 18.744 7.9297 19.182 8.5037 19.182ZM8.5037 22.559H13.0707C13.6307 22.559 14.0407 22.135 14.0407 21.602C14.0407 21.041 13.6307 20.604 13.0707 20.604H8.5037C7.9297 20.604 7.5057 21.041 7.5057 21.602C7.5057 22.135 7.9297 22.559 8.5037 22.559Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.240234375 30.091796875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2652C-0.0003 28.3962 1.6957 30.0922 4.7987 30.0922H19.4417C22.5447 30.0922 24.2407 28.3962 24.2407 25.2652V4.8262C24.2407 1.7092 22.5447 0.0002 19.4417 0.0002H4.7987C1.6957 0.0002 -0.0003 1.7092 -0.0003 4.8262ZM3.5277 24.8832V5.2222C3.5277 4.1152 4.0607 3.5272 5.2227 3.5272H19.0177C20.1797 3.5272 20.7127 4.1152 20.7127 5.2222V24.8832C20.7127 25.9762 20.1797 26.5642 19.0177 26.5642H5.2227C4.0607 26.5642 3.5277 25.9762 3.5277 24.8832ZM15.4217 13.9042C16.9257 13.9042 18.0057 12.8652 18.0057 11.3472C18.0057 9.8852 17.0897 8.9142 15.7907 8.9142C15.1207 8.9142 14.6017 9.1192 14.2327 9.5702H13.9587C14.0547 9.1602 14.3277 8.7502 14.7247 8.4082C15.1207 8.0802 15.6137 7.8472 16.1877 7.7242C16.5977 7.6422 16.7477 7.4782 16.7477 7.1782C16.7477 6.9042 16.5427 6.7132 16.1877 6.7132C15.3397 6.7132 14.3417 7.2192 13.6447 7.9432C12.9337 8.6812 12.6057 9.6802 12.6057 10.7322C12.6057 12.7282 13.8357 13.9042 15.4217 13.9042ZM9.0237 13.9042C10.5407 13.9042 11.6207 12.8792 11.6207 11.3472C11.6207 9.8982 10.6917 8.9142 9.4067 8.9142C8.7367 8.9142 8.2167 9.1332 7.8477 9.5842H7.5747C7.6567 9.1872 7.9297 8.7642 8.3127 8.4222C8.7087 8.0802 9.2017 7.8342 9.7887 7.7382C10.1717 7.6702 10.3637 7.5062 10.3637 7.1912C10.3637 6.9182 10.1587 6.7132 9.8027 6.7132C8.9687 6.7132 7.9847 7.1912 7.2597 7.9432C6.5487 8.6952 6.2067 9.6932 6.2067 10.7322C6.2067 12.7422 7.4517 13.9042 9.0237 13.9042ZM7.3967 19.0992H16.8577C17.3767 19.0992 17.7597 18.7032 17.7597 18.1832C17.7597 17.6782 17.3767 17.2812 16.8577 17.2812H7.3967C6.8637 17.2812 6.4667 17.6782 6.4667 18.1832C6.4667 18.7032 6.8637 19.0992 7.3967 19.0992ZM7.3967 22.8462H12.1547C12.6737 22.8462 13.0567 22.4632 13.0567 21.9572C13.0567 21.4372 12.6737 21.0272 12.1547 21.0272H7.3967C6.8637 21.0272 6.4667 21.4372 6.4667 21.9572C6.4667 22.4632 6.8637 22.8462 7.3967 22.8462Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.896484375 30.48828125"
          className={className}
        >
          <path
            d="              M-0.0003 25.3746C-0.0003 28.6426 1.8457 30.4886 5.0997 30.4886H19.8107C23.0507 30.4886 24.8967 28.6426 24.8967 25.3746V5.0996C24.8967 1.8456 23.0507 -0.0004 19.8107 -0.0004H5.0997C1.8457 -0.0004 -0.0003 1.8456 -0.0003 5.0996ZM4.2247 24.8146V5.6736C4.2247 4.7166 4.6617 4.2246 5.6877 4.2246H19.2087C20.2347 4.2246 20.6717 4.7166 20.6717 5.6736V24.8146C20.6717 25.7716 20.2347 26.2636 19.2087 26.2636H5.6877C4.6617 26.2636 4.2247 25.7716 4.2247 24.8146ZM15.5997 13.9176C17.0217 13.9176 18.0747 12.9476 18.0747 11.4846C18.0747 10.1036 17.1717 9.1736 15.9547 9.1736C15.3267 9.1736 14.8477 9.3786 14.5057 9.7886H14.2327C14.3277 9.4196 14.5747 9.0376 14.9567 8.7086C15.3267 8.4086 15.7907 8.1896 16.3517 8.0806C16.7067 8.0116 16.8577 7.8476 16.8577 7.5466C16.8577 7.2876 16.6527 7.0956 16.3247 7.0956C15.4907 7.0956 14.5467 7.5746 13.8907 8.2576C13.2067 8.9556 12.9067 9.9126 12.9067 10.9106C12.9067 12.8106 14.0817 13.9176 15.5997 13.9176ZM9.4887 13.9316C10.9237 13.9316 11.9767 12.9476 11.9767 11.4846C11.9767 10.1036 11.0747 9.1736 9.8577 9.1736C9.2287 9.1736 8.7367 9.3786 8.3947 9.7886H8.1347C8.2167 9.4336 8.4497 9.0506 8.8047 8.7496C9.1737 8.4216 9.6527 8.1626 10.2407 8.0806C10.5407 8.0386 10.7457 7.8746 10.7457 7.5606C10.7457 7.2876 10.5407 7.0956 10.2127 7.0956C9.4067 7.0956 8.4907 7.5336 7.7927 8.2576C7.1097 8.9556 6.7947 9.9126 6.7947 10.9106C6.7947 12.8106 7.9707 13.9316 9.4887 13.9316ZM7.9847 19.1266H16.9117C17.4587 19.1266 17.8687 18.7036 17.8687 18.1696C17.8687 17.6506 17.4587 17.2406 16.9117 17.2406H7.9847C7.4237 17.2406 7.0137 17.6506 7.0137 18.1696C7.0137 18.7036 7.4237 19.1266 7.9847 19.1266ZM7.9847 22.6816H12.6327C13.1797 22.6816 13.5767 22.2716 13.5767 21.7516C13.5767 21.2186 13.1797 20.7946 12.6327 20.7946H7.9847C7.4237 20.7946 7.0137 21.2186 7.0137 21.7516C7.0137 22.2716 7.4237 22.6816 7.9847 22.6816Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.599609375 29.134765625"
          className={className}
        >
          <path
            d="              M-0.0003 25.102C-0.0003 27.768 1.3537 29.135 3.9927 29.135H18.6077C21.2597 29.135 22.5997 27.768 22.5997 25.102V4.02C22.5997 1.354 21.2597 0 18.6077 0H3.9927C1.3537 0 -0.0003 1.354 -0.0003 4.02ZM1.6957 25.061V4.061C1.6957 2.516 2.5017 1.682 4.0877 1.682H18.5257C20.0977 1.682 20.9177 2.516 20.9177 4.061V25.061C20.9177 26.606 20.0977 27.439 18.5257 27.439H4.0877C2.5017 27.439 1.6957 26.606 1.6957 25.061ZM14.9707 13.781C16.5977 13.781 17.7867 12.605 17.7867 10.965C17.7867 9.324 16.7347 8.244 15.2167 8.244C14.4787 8.244 13.8087 8.504 13.3167 9.105H13.0837C13.2067 8.545 13.5487 7.984 14.0547 7.533C14.5747 7.068 15.1487 6.822 15.8317 6.686C16.2287 6.59 16.3927 6.467 16.3927 6.193C16.3927 5.947 16.2147 5.77 15.8867 5.77C14.9977 5.77 13.8357 6.344 13.0837 7.178C12.3047 8.025 11.8807 9.105 11.8807 10.309C11.8807 12.51 13.2477 13.781 14.9707 13.781ZM7.9297 13.781C9.5567 13.781 10.7597 12.605 10.7597 10.979C10.7597 9.338 9.7067 8.258 8.1897 8.258C7.4377 8.258 6.7677 8.518 6.2887 9.119H6.0427C6.1797 8.545 6.5217 7.984 7.0407 7.533C7.5607 7.082 8.1347 6.822 8.7907 6.686C9.2017 6.604 9.3657 6.467 9.3657 6.207C9.3657 5.961 9.1877 5.783 8.8597 5.783C7.9707 5.783 6.8227 6.344 6.0427 7.178C5.2637 8.025 4.8397 9.105 4.8397 10.309C4.8397 12.523 6.2067 13.781 7.9297 13.781ZM5.8657 18.676H16.7887C17.1717 18.676 17.4727 18.375 17.4727 17.992C17.4727 17.623 17.1717 17.336 16.7887 17.336H5.8657C5.4687 17.336 5.1677 17.623 5.1677 17.992C5.1677 18.375 5.4687 18.676 5.8657 18.676ZM5.8657 22.859H11.1157C11.4977 22.859 11.7987 22.572 11.7987 22.203C11.7987 21.82 11.4977 21.52 11.1157 21.52H5.8657C5.4687 21.52 5.1677 21.82 5.1677 22.203C5.1677 22.572 5.4687 22.859 5.8657 22.859Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.447265625 29.599609375"
          className={className}
        >
          <path
            d="              M-0.0003 25.1151C-0.0003 28.0681 1.5177 29.6001 4.4437 29.6001H19.0037C21.9297 29.6001 23.4477 28.0681 23.4477 25.1151V4.4841C23.4477 1.5451 21.9297 0.0001 19.0037 0.0001H4.4437C1.5177 0.0001 -0.0003 1.5451 -0.0003 4.4841ZM2.6797 24.9511V4.6481C2.6797 3.3771 3.3357 2.6801 4.6617 2.6801H18.7717C20.0977 2.6801 20.7677 3.3771 20.7677 4.6481V24.9511C20.7677 26.2231 20.0977 26.9201 18.7717 26.9201H4.6617C3.3357 26.9201 2.6797 26.2231 2.6797 24.9511ZM15.2027 13.8631C16.8027 13.8631 17.9377 12.7561 17.9377 11.1561C17.9377 9.6111 16.9667 8.5861 15.5727 8.5861C14.8747 8.5861 14.3007 8.8051 13.9047 9.3101H13.6177C13.7267 8.8461 14.0137 8.3941 14.4517 8.0251C14.8617 7.6561 15.3947 7.4101 15.9827 7.2871C16.4607 7.1781 16.6117 7.0271 16.6117 6.7261C16.6117 6.4391 16.4067 6.2341 16.0367 6.2341C15.1617 6.2341 14.0687 6.7811 13.3577 7.5471C12.6057 8.3531 12.2367 9.3931 12.2367 10.5141C12.2367 12.6331 13.5487 13.8631 15.2027 13.8631ZM8.4627 13.8771C10.0767 13.8771 11.1977 12.7691 11.1977 11.1701C11.1977 9.6251 10.2407 8.5861 8.8457 8.5861C8.1347 8.5861 7.5607 8.8181 7.1637 9.3101H6.8907C6.9867 8.8591 7.2867 8.3941 7.7387 8.0251C8.1487 7.6701 8.6547 7.4101 9.2557 7.3011C9.7067 7.1911 9.8847 7.0411 9.8847 6.7261C9.8847 6.4531 9.6797 6.2481 9.3107 6.2481C8.4357 6.2481 7.3687 6.7541 6.6177 7.5601C5.8657 8.3531 5.5097 9.4061 5.5097 10.5141C5.5097 12.6461 6.8227 13.8771 8.4627 13.8771ZM6.6857 19.0591H16.7757C17.2817 19.0591 17.6507 18.6621 17.6507 18.1701C17.6507 17.6911 17.2817 17.3221 16.7757 17.3221H6.6857C6.1797 17.3221 5.7967 17.6911 5.7967 18.1701C5.7967 18.6621 6.1797 19.0591 6.6857 19.0591ZM6.6857 23.0371H11.5667C12.0587 23.0371 12.4277 22.6541 12.4277 22.1761C12.4277 21.6841 12.0587 21.3011 11.5667 21.3011H6.6857C6.1797 21.3011 5.7967 21.6841 5.7967 22.1761C5.7967 22.6541 6.1797 23.0371 6.6857 23.0371Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.99609375 29.3125"
          className={className}
        >
          <path
            d="              M-0.0003 25.0333C-0.0003 27.8903 1.4087 29.3123 4.2387 29.3123H18.7577C21.5877 29.3123 22.9957 27.8903 22.9957 25.0333V4.2933C22.9957 1.4493 21.5877 0.0003 18.7577 0.0003H4.2387C1.4087 0.0003 -0.0003 1.4493 -0.0003 4.2933ZM2.2017 24.9923V4.3343C2.2017 2.9663 2.9257 2.2013 4.3477 2.2013H18.6487C20.0707 2.2013 20.7947 2.9663 20.7947 4.3343V24.9923C20.7947 26.3593 20.0707 27.1113 18.6487 27.1113H4.3477C2.9257 27.1113 2.2017 26.3593 2.2017 24.9923ZM15.0797 13.8493C16.7347 13.8493 17.8967 12.7013 17.8967 11.0603C17.8967 9.4613 16.9117 8.3943 15.4627 8.3943C14.7247 8.3943 14.1367 8.6273 13.7127 9.1603H13.4257C13.5347 8.6683 13.8497 8.2033 14.2867 7.8063C14.7247 7.4103 15.2717 7.1773 15.8727 7.0413C16.3787 6.9183 16.5427 6.7673 16.5427 6.4663C16.5427 6.1793 16.3377 5.9613 15.9547 5.9613C15.0667 5.9613 13.9177 6.5353 13.1937 7.3283C12.4137 8.1623 12.0317 9.2283 12.0317 10.3903C12.0317 12.5783 13.3847 13.8493 15.0797 13.8493ZM8.1487 13.8633C9.8167 13.8633 10.9647 12.7143 10.9647 11.0743C10.9647 9.4743 9.9807 8.4083 8.5317 8.4083C7.8067 8.4083 7.2047 8.6403 6.7817 9.1733H6.5077C6.6177 8.6683 6.9317 8.1893 7.4097 7.7933C7.8337 7.4233 8.3537 7.1773 8.9547 7.0543C9.4607 6.9313 9.6117 6.7813 9.6117 6.4803C9.6117 6.1933 9.4067 5.9743 9.0237 5.9743C8.1347 5.9743 7.0277 6.5213 6.2617 7.3413C5.4957 8.1753 5.1137 9.2423 5.1137 10.4043C5.1137 12.5913 6.4667 13.8633 8.1487 13.8633ZM6.2887 19.0313H16.7347C17.2267 19.0313 17.5817 18.6483 17.5817 18.1703C17.5817 17.7053 17.2267 17.3493 16.7347 17.3493H6.2887C5.7967 17.3493 5.4277 17.7053 5.4277 18.1703C5.4277 18.6483 5.7967 19.0313 6.2887 19.0313ZM6.2887 23.1323H11.2247C11.7167 23.1323 12.0727 22.7773 12.0727 22.3123C12.0727 21.8343 11.7167 21.4513 11.2247 21.4513H6.2887C5.7967 21.4513 5.4277 21.8343 5.4277 22.3123C5.4277 22.7773 5.7967 23.1323 6.2887 23.1323Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.7890625 29.8046875"
          className={className}
        >
          <path
            d="              M-0.0003 25.1698C-0.0003 28.1918 1.5857 29.8048 4.5937 29.8048H19.1957C22.1897 29.8048 23.7887 28.1918 23.7887 25.1698V4.6208C23.7887 1.5998 22.1897 -0.0002 19.1957 -0.0002H4.5937C1.5857 -0.0002 -0.0003 1.5998 -0.0003 4.6208ZM3.0487 24.9098V4.8808C3.0487 3.6918 3.6507 3.0348 4.9087 3.0348H18.8807C20.1387 3.0348 20.7407 3.6918 20.7407 4.8808V24.9098C20.7407 26.1138 20.1387 26.7558 18.8807 26.7558H4.9087C3.6507 26.7558 3.0487 26.1138 3.0487 24.9098ZM15.2987 13.8768C16.8577 13.8768 17.9647 12.7968 17.9647 11.2248C17.9647 9.7208 17.0217 8.7088 15.6677 8.7088C14.9847 8.7088 14.4237 8.9278 14.0407 9.4058H13.7677C13.8637 8.9688 14.1507 8.5448 14.5747 8.1758C14.9707 7.8208 15.4767 7.5878 16.0777 7.4648C16.5157 7.3688 16.6797 7.2048 16.6797 6.9048C16.6797 6.6308 16.4747 6.4258 16.1057 6.4258C15.2437 6.4258 14.1917 6.9588 13.4807 7.7108C12.7427 8.4898 12.4007 9.5018 12.4007 10.5958C12.4007 12.6598 13.6717 13.8768 15.2987 13.8768ZM8.7087 13.8768C10.2677 13.8768 11.3887 12.8108 11.3887 11.2388C11.3887 9.7348 10.4317 8.7228 9.0777 8.7228C8.3947 8.7228 7.8477 8.9418 7.4517 9.4198H7.1777C7.2737 8.9828 7.5607 8.5448 7.9847 8.1758C8.3947 7.8338 8.8867 7.5738 9.4887 7.4788C9.9117 7.3828 10.0897 7.2328 10.0897 6.9178C10.0897 6.6448 9.8847 6.4398 9.5157 6.4398C8.6677 6.4398 7.6287 6.9318 6.8907 7.7108C6.1657 8.4898 5.8107 9.5158 5.8107 10.6098C5.8107 12.6738 7.0957 13.8768 8.7087 13.8768ZM6.9867 19.0718H16.8167C17.3227 19.0718 17.7047 18.6758 17.7047 18.1698C17.7047 17.6778 17.3227 17.2948 16.8167 17.2948H6.9867C6.4667 17.2948 6.0837 17.6778 6.0837 18.1698C6.0837 18.6758 6.4667 19.0718 6.9867 19.0718ZM6.9867 22.9418H11.8127C12.3187 22.9418 12.7017 22.5588 12.7017 22.0668C12.7017 21.5738 12.3187 21.1778 11.8127 21.1778H6.9867C6.4667 21.1778 6.0837 21.5738 6.0837 22.0668C6.0837 22.5588 6.4667 22.9418 6.9867 22.9418Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.09375 28.90234375"
          className={className}
        >
          <path
            d="              M-0.0003 25.2109C-0.0003 27.6449 1.2577 28.9019 3.6777 28.9019H18.4157C20.8227 28.9019 22.0937 27.6449 22.0937 25.2109V3.6909C22.0937 1.2719 20.8227 -0.0001 18.4157 -0.0001H3.6777C1.2577 -0.0001 -0.0003 1.2719 -0.0003 3.6909ZM1.0117 25.1839V3.7189C1.0117 1.9409 1.9417 1.0119 3.7327 1.0119H18.3617C20.1527 1.0119 21.0817 1.9409 21.0817 3.7189V25.1839C21.0817 26.9609 20.1527 27.8909 18.3617 27.8909H3.7327C1.9417 27.8909 1.0117 26.9609 1.0117 25.1839ZM14.8337 13.6989C16.4067 13.6989 17.6507 12.4819 17.6507 10.8689C17.6507 9.1879 16.5157 8.0799 14.9157 8.0799C14.1367 8.0799 13.3707 8.3669 12.8107 9.0649H12.6187C12.7837 8.3949 13.1657 7.7379 13.7407 7.2049C14.3687 6.6449 15.0117 6.3709 15.7637 6.2339C16.0237 6.1799 16.2017 6.0839 16.2017 5.8649C16.2017 5.6599 16.0647 5.5369 15.8187 5.5369C14.9297 5.5369 13.7127 6.1249 12.9337 6.9999C12.1547 7.8609 11.6617 8.9549 11.6617 10.2129C11.6617 12.4409 13.0567 13.6989 14.8337 13.6989ZM7.6567 13.6989C9.2287 13.6989 10.4727 12.4819 10.4727 10.8689C10.4727 9.1879 9.3377 8.0799 7.7387 8.0799C6.9587 8.0799 6.2067 8.3809 5.6327 9.0649H5.4547C5.6057 8.3949 5.9887 7.7249 6.5767 7.2049C7.2047 6.6449 7.8337 6.3709 8.5997 6.2339C8.8457 6.1799 9.0237 6.0839 9.0237 5.8649C9.0237 5.6739 8.8867 5.5369 8.6407 5.5369C7.7517 5.5369 6.5487 6.1249 5.7557 6.9999C4.9767 7.8609 4.4977 8.9549 4.4977 10.2129C4.4977 12.4409 5.8787 13.6989 7.6567 13.6989ZM5.3047 18.2379H16.8437C17.1177 18.2379 17.3087 18.0329 17.3087 17.7869C17.3087 17.5269 17.1177 17.3359 16.8437 17.3359H5.3047C5.0317 17.3359 4.8397 17.5269 4.8397 17.7869C4.8397 18.0329 5.0317 18.2379 5.3047 18.2379ZM5.3047 22.5179H10.9647C11.2247 22.5179 11.4297 22.3129 11.4297 22.0659C11.4297 21.8199 11.2247 21.6149 10.9647 21.6149H5.3047C5.0317 21.6149 4.8397 21.8199 4.8397 22.0659C4.8397 22.3129 5.0317 22.5179 5.3047 22.5179Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.8203125 28.779296875"
          className={className}
        >
          <path
            d="              M-0.0003 25.2656C-0.0003 27.5626 1.2167 28.7796 3.5137 28.7796H18.3207C20.6037 28.7796 21.8207 27.5626 21.8207 25.2656V3.5136C21.8207 1.2166 20.6037 -0.0004 18.3207 -0.0004H3.5137C1.2167 -0.0004 -0.0003 1.2166 -0.0003 3.5136ZM0.6697 25.2386V3.5406C0.6697 1.6546 1.6547 0.6696 3.5407 0.6696H18.2797C20.1797 0.6696 21.1507 1.6546 21.1507 3.5406V25.2386C21.1507 27.1246 20.1797 28.1096 18.2797 28.1096H3.5407C1.6547 28.1096 0.6697 27.1246 0.6697 25.2386ZM7.5057 13.6586C9.0647 13.6586 10.3357 12.4136 10.3357 10.8146C10.3357 9.1056 9.1467 7.9846 7.5057 7.9846C6.7127 7.9846 5.9067 8.2986 5.2907 9.0376H5.1407C5.3187 8.3126 5.7147 7.6016 6.3297 7.0276C7.0137 6.4126 7.6837 6.1386 8.4907 6.0016C8.6817 5.9606 8.8457 5.8786 8.8457 5.6876C8.8457 5.5096 8.7367 5.4136 8.5177 5.4136C7.6287 5.4136 6.4117 6.0016 5.6057 6.9046C4.8267 7.7796 4.3067 8.8726 4.3067 10.1716C4.3067 12.4006 5.7147 13.6586 7.5057 13.6586ZM14.7517 13.6586C16.3107 13.6586 17.5817 12.4136 17.5817 10.8146C17.5817 9.1056 16.3927 7.9846 14.7517 7.9846C13.9587 7.9846 13.1527 8.2986 12.5367 9.0376H12.3867C12.5647 8.3126 12.9607 7.5876 13.5767 7.0276C14.2597 6.4126 14.9297 6.1386 15.7367 6.0016C15.9277 5.9606 16.1057 5.8786 16.1057 5.6876C16.1057 5.5236 15.9827 5.4136 15.7777 5.4136C14.8887 5.4136 13.6587 6.0016 12.8517 6.9046C12.0727 7.7796 11.5667 8.8726 11.5667 10.1716C11.5667 12.4006 12.9607 13.6586 14.7517 13.6586ZM5.0177 18.0056H16.8707C17.0767 18.0056 17.2407 17.8556 17.2407 17.6636C17.2407 17.4726 17.0767 17.3226 16.8707 17.3226H5.0177C4.8127 17.3226 4.6617 17.4726 4.6617 17.6636C4.6617 17.8556 4.8127 18.0056 5.0177 18.0056ZM5.0177 22.3396H10.8827C11.0877 22.3396 11.2387 22.1896 11.2387 21.9976C11.2387 21.8066 11.0877 21.6566 10.8827 21.6566H5.0177C4.8127 21.6566 4.6617 21.8066 4.6617 21.9976C4.6617 22.1896 4.8127 22.3396 5.0177 22.3396Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
