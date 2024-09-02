import { IconProps } from "../../types"

export default function CompassDrawingIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.734375 36.08330810575016"
          className={className}
        >
          <path
            d="              M1.4357 20.4533C0.6017 20.4533 -0.0003 21.0273 -0.0003 21.8753C-0.0003 22.7093 0.6017 23.3103 1.4357 23.3103H4.1017L1.9417 30.6113C1.7367 31.2813 1.9007 31.9653 2.3107 32.4703L1.7637 34.4943C1.5857 35.2053 1.9547 35.8343 2.6657 36.0393C3.3767 36.2163 4.0057 35.8473 4.1977 35.1363L4.7437 33.0453C5.2907 32.8123 5.7017 32.3473 5.9067 31.6913L8.3807 23.3103H10.7737V24.3363C10.7737 24.9513 11.2517 25.4293 11.8677 25.4293C12.4957 25.4293 12.9607 24.9513 12.9607 24.3363V23.3103H15.3537L17.8277 31.6913C18.0337 32.3473 18.4567 32.8123 18.9907 33.0453L19.5367 35.1363C19.7287 35.8473 20.3577 36.2163 21.0687 36.0393C21.7797 35.8343 22.1487 35.2053 21.9707 34.4943L21.4237 32.4703C21.8477 31.9653 21.9977 31.2813 21.8067 30.6113L19.6327 23.3103H22.3127C23.1327 23.3103 23.7347 22.7093 23.7347 21.8753C23.7347 21.0273 23.1327 20.4533 22.3127 20.4533H18.7847L16.4887 12.7013C17.1037 11.8123 17.4587 10.7323 17.4587 9.5703C17.4587 7.0413 15.7777 4.8943 13.4667 4.2113V1.5723C13.4667 0.6833 12.7557 0.0003 11.8677 0.0003C10.9927 0.0003 10.2947 0.6973 10.2947 1.5863V4.2113C7.9707 4.8943 6.2757 7.0413 6.2757 9.5703C6.2757 10.7323 6.6307 11.8123 7.2457 12.7013L4.9497 20.4533ZM11.8677 11.0473C11.0337 11.0473 10.3907 10.4043 10.3907 9.5703C10.3907 8.7363 11.0337 8.0933 11.8677 8.0933C12.7017 8.0933 13.3437 8.7363 13.3437 9.5703C13.3437 10.4043 12.7017 11.0473 11.8677 11.0473ZM12.9607 19.4143C12.9607 18.7853 12.4957 18.3203 11.8677 18.3203C11.2517 18.3203 10.7737 18.7853 10.7737 19.4143V20.4533H9.2287L10.8277 15.0523C11.1697 15.1213 11.5117 15.1483 11.8677 15.1483C12.2227 15.1483 12.5777 15.1213 12.9067 15.0523L14.5057 20.4533H12.9607Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.107421875 33.68028428819444"
          className={className}
        >
          <path
            d="              M1.1617 19.0995C0.5057 19.0995 -0.0003 19.5915 -0.0003 20.2615C-0.0003 20.9175 0.5057 21.4235 1.1617 21.4235H4.3337L2.0917 28.9845C1.9417 29.4765 2.0507 29.9825 2.3517 30.3655L1.7907 32.4435C1.6547 32.9905 1.9417 33.4965 2.5017 33.6465C3.0487 33.7835 3.5547 33.4965 3.7047 32.9495L4.2657 30.8435C4.6757 30.6655 4.9907 30.2965 5.1407 29.8045L7.6287 21.4235H10.0487V22.6545C10.0487 23.2145 10.4867 23.6525 11.0467 23.6525C11.6077 23.6525 12.0447 23.2145 12.0447 22.6545V21.4235H14.4787L16.9667 29.8045C17.1177 30.2965 17.4317 30.6655 17.8417 30.8435L18.4027 32.9495C18.5387 33.4965 19.0587 33.7835 19.6057 33.6465C20.1527 33.4965 20.4527 32.9905 20.3027 32.4435L19.7557 30.3655C20.0427 29.9825 20.1527 29.4905 20.0157 28.9845L17.7597 21.4235H20.9317C21.6017 21.4235 22.1077 20.9175 22.1077 20.2615C22.1077 19.5915 21.6017 19.0995 20.9317 19.0995H17.0767L14.8067 11.4565C15.5177 10.6095 15.9417 9.5155 15.9417 8.3125C15.9417 6.0155 14.3557 4.0875 12.2227 3.5685V1.1625C12.2227 0.5055 11.7027 -0.0005 11.0467 -0.0005C10.4047 -0.0005 9.8847 0.5195 9.8847 1.1755V3.5685C7.7387 4.0875 6.1527 6.0155 6.1527 8.3125C6.1527 9.5155 6.5897 10.6095 7.3007 11.4565L5.0317 19.0995ZM11.0467 10.1175C10.0217 10.1175 9.2557 9.3515 9.2557 8.3125C9.2557 7.2875 10.0217 6.5215 11.0467 6.5215C12.0857 6.5215 12.8517 7.2875 12.8517 8.3125C12.8517 9.3515 12.0857 10.1175 11.0467 10.1175ZM12.0447 17.8415C12.0447 17.2815 11.6077 16.8435 11.0467 16.8435C10.4867 16.8435 10.0487 17.2815 10.0487 17.8415V19.0995H8.3127L10.0897 13.1115C10.4047 13.1655 10.7187 13.2065 11.0467 13.2065C11.3747 13.2065 11.7027 13.1655 12.0037 13.1115L13.7817 19.0995H12.0447Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22.96875 34.954139744662555"
          className={className}
        >
          <path
            d="              M1.2987 19.8101C0.5467 19.8101 -0.0003 20.3441 -0.0003 21.1091C-0.0003 21.8611 0.5467 22.4221 1.2987 22.4221H4.2107L2.0097 29.8461C1.8317 30.4331 1.9687 31.0351 2.3377 31.4731L1.7777 33.5231C1.6137 34.1661 1.9547 34.7401 2.5837 34.9181C3.2267 35.0681 3.8007 34.7401 3.9647 34.1111L4.5257 32.0061C4.9907 31.8011 5.3727 31.3771 5.5367 30.8031L8.0257 22.4221H10.4317V23.5431C10.4317 24.1311 10.8967 24.5961 11.4847 24.5961C12.0727 24.5961 12.5367 24.1311 12.5367 23.5431V22.4221H14.9437L17.4177 30.8031C17.5957 31.3771 17.9647 31.8011 18.4437 32.0061L19.0037 34.1111C19.1677 34.7401 19.7427 35.0681 20.3847 34.9181C21.0137 34.7401 21.3557 34.1661 21.1777 33.5231L20.6307 31.4731C20.9997 31.0351 21.1227 30.4331 20.9587 29.8461L18.7577 22.4221H21.6567C22.4087 22.4221 22.9687 21.8611 22.9687 21.1091C22.9687 20.3441 22.4087 19.8101 21.6567 19.8101H17.9787L15.6957 12.1271C16.3517 11.2381 16.7477 10.1581 16.7477 8.9821C16.7477 6.5621 15.1077 4.5121 12.8787 3.9101V1.3811C12.8787 0.6011 12.2637 0.0001 11.4847 0.0001C10.7187 0.0001 10.1037 0.6151 10.1037 1.3941V3.8961C7.8617 4.5121 6.2207 6.5621 6.2207 8.9821C6.2207 10.1581 6.6037 11.2381 7.2737 12.1271L4.9907 19.8101ZM11.4847 10.6091C10.5547 10.6091 9.8577 9.8981 9.8577 8.9821C9.8577 8.0531 10.5547 7.3551 11.4847 7.3551C12.4137 7.3551 13.1117 8.0531 13.1117 8.9821C13.1117 9.8981 12.4137 10.6091 11.4847 10.6091ZM12.5367 18.6761C12.5367 18.0741 12.0727 17.6231 11.4847 17.6231C10.8967 17.6231 10.4317 18.0741 10.4317 18.6761V19.8101H8.8047L10.4867 14.1371C10.8007 14.2051 11.1427 14.2321 11.4847 14.2321C11.8267 14.2321 12.1547 14.2051 12.4827 14.1371L14.1637 19.8101H12.5367Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.09765625 30.893281191315033"
          className={className}
        >
          <path
            d="              M0.7107 17.4867C0.3147 17.4867 -0.0003 17.8147 -0.0003 18.1977C-0.0003 18.5937 0.3147 18.9087 0.7107 18.9087H4.8127L2.1467 27.7537C2.0777 27.9997 2.1327 28.2597 2.2697 28.4647L1.7907 30.2147C1.7087 30.5157 1.8597 30.8027 2.1597 30.8707C2.4477 30.9527 2.7347 30.8027 2.8167 30.5017L3.3087 28.7517C3.5277 28.6567 3.7047 28.4647 3.7867 28.2047L6.5767 18.9087H9.3377V20.5627C9.3377 20.9457 9.6527 21.2737 10.0487 21.2737C10.4317 21.2737 10.7597 20.9457 10.7597 20.5627V18.9087H13.5217L16.3107 28.2047C16.3927 28.4647 16.5707 28.6567 16.7887 28.7517L17.2817 30.5017C17.3497 30.8027 17.6367 30.9527 17.9377 30.8707C18.2247 30.8027 18.3747 30.5157 18.3067 30.2147L17.8147 28.4647C17.9647 28.2597 18.0197 27.9997 17.9377 27.7537L15.2847 18.9087H19.3867C19.7697 18.9087 20.0977 18.5937 20.0977 18.1977C20.0977 17.8147 19.7697 17.4867 19.3867 17.4867H14.8617L12.5777 9.9117C13.4527 9.2017 13.9997 8.0937 13.9997 6.8637C13.9997 4.8677 12.5777 3.2407 10.6637 2.9527V0.6157C10.6637 0.2597 10.3907 -0.0003 10.0487 -0.0003C9.7067 -0.0003 9.4197 0.2737 9.4197 0.6157V2.9527C7.5197 3.2407 6.0837 4.8677 6.0837 6.8637C6.0837 8.0937 6.6447 9.2017 7.5057 9.9117L5.2367 17.4867ZM10.0487 9.2147C8.6957 9.2147 7.6837 8.2027 7.6837 6.8637C7.6837 5.5237 8.6957 4.4977 10.0487 4.4977C11.3887 4.4977 12.4007 5.5237 12.4007 6.8637C12.4007 8.2027 11.3887 9.2147 10.0487 9.2147ZM10.7597 15.8457C10.7597 15.4627 10.4317 15.1347 10.0487 15.1347C9.6527 15.1347 9.3377 15.4627 9.3377 15.8457V17.4867H6.9997L9.0507 10.6917C9.3657 10.7737 9.6937 10.8147 10.0487 10.8147C10.3907 10.8147 10.7327 10.7737 11.0467 10.6917L13.0837 17.4867H10.7597Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.0546875 32.14680126400593"
          className={className}
        >
          <path
            d="              M0.9977 18.2242C0.4377 18.2242 -0.0003 18.6622 -0.0003 19.2222C-0.0003 19.7692 0.4377 20.2072 0.9977 20.2072H4.4977L2.1877 27.9452C2.0777 28.3282 2.1597 28.7242 2.3787 29.0112L1.8187 31.1172C1.6957 31.5682 1.9417 31.9922 2.3927 32.1152C2.8297 32.2382 3.2677 31.9922 3.3907 31.5412L3.9517 29.4352C4.2797 29.2852 4.5257 28.9982 4.6487 28.6012L7.1507 20.2072H9.5977V21.5882C9.5977 22.1072 10.0077 22.5172 10.5277 22.5172C11.0467 22.5172 11.4567 22.1072 11.4567 21.5882V20.2072H13.9047L16.4067 28.6012C16.5157 28.9982 16.7757 29.2852 17.1037 29.4352L17.6637 31.5412C17.7867 31.9922 18.2107 32.2382 18.6617 32.1152C19.1137 31.9922 19.3597 31.5682 19.2367 31.1172L18.6757 29.0252C18.8947 28.7242 18.9767 28.3282 18.8677 27.9452L16.5567 20.2072H20.0567C20.6177 20.2072 21.0547 19.7692 21.0547 19.2222C21.0547 18.6622 20.6177 18.2242 20.0567 18.2242H15.9687L13.7127 10.6232C14.4927 9.8162 14.9707 8.7222 14.9707 7.5192C14.9707 5.3592 13.4527 3.5822 11.4297 3.1582V0.8882C11.4297 0.3832 11.0337 0.0002 10.5277 0.0002C10.0217 0.0002 9.6247 0.3962 9.6247 0.9022V3.1582C7.6017 3.5822 6.0837 5.3592 6.0837 7.5192C6.0837 8.7222 6.5627 9.8162 7.3417 10.6232L5.0857 18.2242ZM10.5277 9.5292C9.3657 9.5292 8.5177 8.6682 8.5177 7.5192C8.5177 6.3572 9.3657 5.5102 10.5277 5.5102C11.6897 5.5102 12.5367 6.3572 12.5367 7.5192C12.5367 8.6682 11.6897 9.5292 10.5277 9.5292ZM11.4567 16.8442C11.4567 16.3242 11.0467 15.9142 10.5277 15.9142C10.0077 15.9142 9.5977 16.3242 9.5977 16.8442V18.2242H7.7387L9.6247 11.8672C9.9117 11.9222 10.2127 11.9492 10.5277 11.9492C10.8417 11.9492 11.1427 11.9222 11.4297 11.8672L13.3167 18.2242H11.4567Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20.466796875 31.281989490877564"
          className={className}
        >
          <path
            d="              M0.9027 17.7457C0.3967 17.7457 -0.0003 18.1427 -0.0003 18.6347C-0.0003 19.1267 0.3967 19.5367 0.9027 19.5367H4.5797L2.2427 27.3707C2.1467 27.6857 2.2147 27.9997 2.3927 28.2597L1.8187 30.3787C1.7227 30.7617 1.9277 31.1577 2.3247 31.2537C2.7207 31.3637 3.1037 31.1447 3.2127 30.7477L3.7737 28.6427C4.0607 28.5057 4.2797 28.2597 4.3747 27.9317L6.8767 19.5367H9.3377V20.9867C9.3377 21.4787 9.7347 21.8887 10.2267 21.8887C10.7187 21.8887 11.1287 21.4787 11.1287 20.9867V19.5367H13.5897L16.0917 27.9317C16.1877 28.2597 16.4067 28.5057 16.6797 28.6427L17.2537 30.7477C17.3637 31.1447 17.7457 31.3637 18.1427 31.2537C18.5257 31.1577 18.7437 30.7617 18.6347 30.3787L18.0747 28.2597C18.2517 27.9997 18.3207 27.6857 18.2247 27.3707L15.8867 19.5367H19.5647C20.0567 19.5367 20.4667 19.1267 20.4667 18.6347C20.4667 18.1427 20.0567 17.7457 19.5647 17.7457H15.3537L13.0977 10.1307C13.9177 9.3647 14.4237 8.2847 14.4237 7.0687C14.4237 4.9897 12.9477 3.2947 10.9927 2.9397V0.7517C10.9927 0.3277 10.6507 -0.0003 10.2267 -0.0003C9.8027 -0.0003 9.4747 0.3417 9.4747 0.7657V2.9397C7.5057 3.2947 6.0427 4.9897 6.0427 7.0687C6.0427 8.2847 6.5487 9.3647 7.3687 10.1307L5.1137 17.7457ZM10.2267 9.1877C8.9957 9.1877 8.1077 8.2847 8.1077 7.0687C8.1077 5.8377 8.9957 4.9357 10.2267 4.9357C11.4567 4.9357 12.3597 5.8377 12.3597 7.0687C12.3597 8.2847 11.4567 9.1877 10.2267 9.1877ZM11.1287 16.2827C11.1287 15.7907 10.7187 15.3807 10.2267 15.3807C9.7347 15.3807 9.3377 15.7907 9.3377 16.2827V17.7457H7.4097L9.3657 11.1697C9.6387 11.2247 9.9397 11.2517 10.2267 11.2517C10.5277 11.2517 10.8147 11.2247 11.1017 11.1697L13.0567 17.7457H11.1287Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 21.505859375 32.815475201072445"
          className={className}
        >
          <path
            d="              M1.0667 18.607C0.4647 18.607 -0.0003 19.072 -0.0003 19.674C-0.0003 20.275 0.4647 20.74 1.0667 20.74H4.4297L2.1467 28.41C2.0237 28.834 2.1187 29.271 2.3657 29.6L1.8047 31.691C1.6817 32.184 1.9417 32.648 2.4337 32.785C2.9257 32.908 3.3907 32.648 3.5277 32.156L4.0877 30.051C4.4437 29.887 4.7307 29.559 4.8537 29.135L7.3557 20.74H9.7887V22.053C9.7887 22.586 10.2127 23.023 10.7457 23.023C11.2927 23.023 11.7167 22.586 11.7167 22.053V20.74H14.1507L16.6527 29.135C16.7757 29.559 17.0627 29.887 17.4177 30.051L17.9787 32.156C18.1157 32.648 18.5797 32.908 19.0727 32.785C19.5647 32.648 19.8247 32.184 19.7017 31.691L19.1407 29.6C19.3867 29.271 19.4827 28.834 19.3597 28.41L17.0767 20.74H20.4397C21.0407 20.74 21.5057 20.275 21.5057 19.674C21.5057 19.072 21.0407 18.607 20.4397 18.607H16.4477L14.1777 10.992C14.9297 10.172 15.3947 9.064 15.3947 7.861C15.3947 5.646 13.8497 3.801 11.7717 3.336V1.012C11.7717 0.437 11.3207 0 10.7457 0C10.1857 0 9.7347 0.451 9.7347 1.025V3.336C7.6567 3.801 6.1117 5.646 6.1117 7.861C6.1117 9.064 6.5767 10.172 7.3277 10.992L5.0587 18.607ZM10.7457 9.789C9.6527 9.789 8.8317 8.969 8.8317 7.861C8.8317 6.768 9.6527 5.947 10.7457 5.947C11.8537 5.947 12.6737 6.768 12.6737 7.861C12.6737 8.969 11.8537 9.789 10.7457 9.789ZM11.7167 17.281C11.7167 16.748 11.2927 16.324 10.7457 16.324C10.2127 16.324 9.7887 16.748 9.7887 17.281V18.607H7.9847L9.8297 12.4C10.1307 12.469 10.4317 12.496 10.7457 12.496C11.0747 12.496 11.3747 12.469 11.6757 12.4L13.5217 18.607H11.7167Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.60546875 30.382106693668963"
          className={className}
        >
          <path
            d="              M0.4647 17.1582C0.2047 17.1582 -0.0003 17.3772 -0.0003 17.6232C-0.0003 17.8832 0.2047 18.0882 0.4647 18.0882H5.1267L2.0237 28.2732C1.9827 28.4372 2.0237 28.6012 2.1187 28.7242L1.7497 30.0102C1.6957 30.1742 1.7777 30.3242 1.9417 30.3652C2.1057 30.4202 2.2557 30.3382 2.2967 30.1742L2.6797 28.9022C2.8297 28.8472 2.9527 28.7242 3.0077 28.5472L6.1937 18.0882H9.3377V19.9882C9.3377 20.2342 9.5427 20.4532 9.8027 20.4532C10.0627 20.4532 10.2677 20.2342 10.2677 19.9882V18.0882H13.4117L16.5977 28.5472C16.6527 28.7242 16.7757 28.8472 16.9257 28.9022L17.2947 30.1742C17.3497 30.3382 17.4997 30.4202 17.6637 30.3652C17.8277 30.3242 17.8827 30.1742 17.8557 30.0102L17.4867 28.7242C17.5817 28.6012 17.6227 28.4372 17.5687 28.2732L14.4787 18.0882H19.1407C19.3867 18.0882 19.6057 17.8832 19.6057 17.6232C19.6057 17.3772 19.3867 17.1582 19.1407 17.1582H14.1917L11.8947 9.5972C12.8377 8.9552 13.4527 7.8612 13.4527 6.5902C13.4527 4.6892 12.0727 3.1722 10.2407 2.9672V0.4242C10.2407 0.1912 10.0347 0.0002 9.8027 0.0002C9.5567 0.0002 9.3657 0.1912 9.3657 0.4372V2.9672C7.5337 3.1722 6.1527 4.6892 6.1527 6.5902C6.1527 7.8612 6.7537 8.9552 7.7107 9.5972L5.4007 17.1582ZM9.8027 9.2562C8.2987 9.2562 7.1367 8.0942 7.1367 6.5902C7.1367 5.0992 8.2987 3.9242 9.8027 3.9242C11.2927 3.9242 12.4687 5.0992 12.4687 6.5902C12.4687 8.0942 11.2927 9.2562 9.8027 9.2562ZM10.2677 15.2712C10.2677 15.0112 10.0627 14.8062 9.8027 14.8062C9.5427 14.8062 9.3377 15.0112 9.3377 15.2712V17.1582H6.4667L8.6407 10.0622C8.9957 10.1852 9.3927 10.2542 9.8027 10.2542C10.2127 10.2542 10.5957 10.1852 10.9647 10.0622L13.1247 17.1582H10.2677Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.345703125 30.12734375"
          className={className}
        >
          <path
            d="              M0.3417 16.9945C0.1507 16.9945 -0.0003 17.1585 -0.0003 17.3355C-0.0003 17.5275 0.1507 17.6775 0.3417 17.6775H5.2907L1.9687 28.5335C1.9277 28.6565 1.9687 28.7795 2.0507 28.8615L1.7227 29.9005C1.6957 29.9965 1.7227 30.0785 1.8187 30.1195C1.9277 30.1465 2.0097 30.1055 2.0367 29.9965L2.3517 28.9705C2.4747 28.9435 2.5707 28.8475 2.5977 28.7385L5.9887 17.6775H9.3377V19.6875C9.3377 19.8785 9.4887 20.0295 9.6797 20.0295C9.8577 20.0295 10.0077 19.8785 10.0077 19.6875V17.6775H13.3577L16.7477 28.7385C16.7757 28.8475 16.8847 28.9435 16.9937 28.9705L17.3087 29.9965C17.3497 30.1055 17.4317 30.1465 17.5277 30.1195C17.6227 30.0785 17.6367 29.9965 17.6227 29.9005L17.3087 28.8615C17.3907 28.7795 17.4177 28.6565 17.3767 28.5335L14.0687 17.6775H19.0177C19.1957 17.6775 19.3457 17.5275 19.3457 17.3355C19.3457 17.1585 19.1957 16.9945 19.0177 16.9945H13.8497L11.5387 9.4335C12.5237 8.8185 13.1657 7.7385 13.1657 6.4665C13.1657 4.6075 11.8127 3.1445 10.0217 2.9805V0.3415C10.0217 0.1505 9.8577 -0.0005 9.6797 -0.0005C9.4887 -0.0005 9.3377 0.1505 9.3377 0.3415V2.9805C7.5337 3.1445 6.1797 4.6075 6.1797 6.4665C6.1797 7.7385 6.8227 8.8185 7.8067 9.4335L5.4957 16.9945ZM9.6797 9.2835C8.0937 9.2835 6.8497 8.0395 6.8497 6.4665C6.8497 4.8805 8.0937 3.6365 9.6797 3.6365C11.2517 3.6365 12.4957 4.8805 12.4957 6.4665C12.4957 8.0395 11.2517 9.2835 9.6797 9.2835ZM10.0077 14.9845C10.0077 14.7925 9.8577 14.6425 9.6797 14.6425C9.4887 14.6425 9.3377 14.7925 9.3377 14.9845V16.9945H6.1937L8.4217 9.7345C8.8187 9.8845 9.2287 9.9535 9.6797 9.9535C10.1177 9.9535 10.5407 9.8845 10.9237 9.7345L13.1527 16.9945H10.0077Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
