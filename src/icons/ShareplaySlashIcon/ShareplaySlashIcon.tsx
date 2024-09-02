import { IconProps } from "../../types"

export default function ShareplaySlashIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 43.435546875 31.86237588602757"
          className={className}
        >
          <path
            d="              M37.6527 31.4997C38.1447 31.9927 38.9507 31.9787 39.4157 31.4867C39.8807 31.0077 39.9077 30.2147 39.4157 29.7227L10.0487 0.3687C9.5567 -0.1233 8.7497 -0.1233 8.2717 0.3687C7.7927 0.8477 7.7927 1.6677 8.2717 2.1327ZM41.1797 26.1817C42.4377 26.1817 43.4357 25.1697 43.4357 23.9117C43.4357 11.0877 33.7007 0.6287 21.7247 0.6287C19.2087 0.6287 16.7887 1.0937 14.5327 1.9417L18.1567 5.5647C19.3047 5.2777 20.4937 5.1267 21.7247 5.1267C31.2267 5.1267 38.9507 13.5347 38.9507 23.9117C38.9507 25.1697 39.9487 26.1817 41.1797 26.1817ZM2.2557 26.1817C3.4997 26.1817 4.4847 25.1697 4.4847 23.9117C4.4847 17.5687 7.3687 11.9767 11.7847 8.5727L8.5857 5.3867C3.3637 9.6387 -0.0003 16.3657 -0.0003 23.9117C-0.0003 25.1697 1.0117 26.1817 2.2557 26.1817ZM25.8807 13.2757C26.1137 12.7007 26.2497 12.0587 26.2497 11.3747C26.2497 8.8047 24.2537 6.5627 21.7247 6.5627C20.9997 6.5627 20.3027 6.7537 19.7007 7.1097ZM36.9547 24.3357C36.9957 24.2127 37.0367 24.0627 37.0367 23.9117C37.0367 17.5547 33.5237 11.7437 28.1097 9.0507C28.6837 10.7867 28.6157 12.6057 27.9317 14.2457C29.4487 15.4357 30.6247 16.9807 31.3637 18.7437ZM8.6547 26.1547C9.8987 26.1547 10.9097 25.1567 10.9097 23.9117C10.9097 20.0427 12.6187 16.5157 15.4767 14.2737C15.1347 13.4527 14.9437 12.5777 14.9027 11.6897L13.4117 10.1997C9.0917 13.2067 6.3987 18.3477 6.3987 23.9117C6.3987 25.1567 7.3967 26.1547 8.6547 26.1547ZM15.0937 26.0857H29.3127L20.9047 17.6777C15.8867 18.0197 12.6187 21.4237 12.6187 24.0217C12.6187 25.3337 13.5757 26.0857 15.0937 26.0857Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.109375 29.765400576092485"
          className={className}
        >
          <path
            d="              M35.1367 29.4326C35.5877 29.8836 36.3257 29.8696 36.7637 29.4326C37.2007 28.9676 37.2147 28.2566 36.7637 27.8056L9.3107 0.3386C8.8597 -0.1124 8.1207 -0.1124 7.6697 0.3386C7.2327 0.7756 7.2327 1.5276 7.6697 1.9656ZM40.4277 24.7016C41.3577 24.7016 42.1097 23.9636 42.1097 23.0196C42.1097 10.5646 32.6617 0.4066 21.0547 0.4066C18.3887 0.4066 15.8457 0.9536 13.4937 1.9376L16.1467 4.5906C17.6917 4.0566 19.3457 3.7696 21.0547 3.7696C30.8167 3.7696 38.7597 12.3966 38.7597 23.0196C38.7597 23.9636 39.5117 24.7016 40.4277 24.7016ZM1.6817 24.7016C2.5977 24.7016 3.3357 23.9636 3.3357 23.0196C3.3357 16.6356 6.2067 11.0026 10.5957 7.5026L8.2307 5.1236C3.2267 9.2526 -0.0003 15.7466 -0.0003 23.0196C-0.0003 23.9636 0.7517 24.7016 1.6817 24.7016ZM24.5687 13.0126C25.1017 12.3286 25.4437 11.3986 25.4437 10.3736C25.4437 7.8036 23.4477 5.7116 21.0687 5.7116C20.0427 5.7116 19.0857 6.1486 18.4157 6.8596ZM35.4507 23.6896C35.6157 23.5396 35.7387 23.2936 35.7387 23.0196C35.7387 16.9766 32.4027 11.4806 27.2887 8.9246C27.6037 10.1816 27.5487 11.4946 27.1117 12.7246C29.5727 14.3796 31.2817 17.0176 31.7737 20.0126ZM8.0387 24.6876C8.9687 24.6876 9.7347 23.9496 9.7347 23.0196C9.7347 18.8366 11.7167 15.0626 14.9157 12.8066C14.6697 12.3286 14.5057 11.8226 14.4237 11.3166L13.0977 9.9766C8.9827 12.8206 6.3707 17.7016 6.3707 23.0196C6.3707 23.9496 7.1097 24.6876 8.0387 24.6876ZM14.3007 24.8106H27.9317L19.8517 16.7306C15.1207 17.2096 12.1407 20.5316 12.1407 23.0606C12.1407 24.1686 12.9607 24.8106 14.3007 24.8106Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 42.806640625 30.872821308341738"
          className={className}
        >
          <path
            d="              M36.4627 30.5189C36.9417 30.9979 37.7067 30.9839 38.1577 30.5189C38.6227 30.0409 38.6367 29.2889 38.1577 28.8099L9.6937 0.3589C9.2287 -0.1201 8.4487 -0.1201 7.9847 0.3589C7.5327 0.8099 7.5327 1.6029 7.9847 2.0539ZM40.8237 25.4739C41.9317 25.4739 42.8067 24.5989 42.8067 23.4919C42.8067 10.8319 33.2087 0.5229 21.4097 0.5229C18.8257 0.5229 16.3377 1.0289 14.0407 1.9309L17.2127 5.1029C18.5387 4.7069 19.9477 4.4879 21.4097 4.4879C31.0347 4.4879 38.8687 12.9919 38.8687 23.4919C38.8687 24.5989 39.7437 25.4739 40.8237 25.4739ZM1.9827 25.4739C3.0757 25.4739 3.9507 24.5989 3.9507 23.4919C3.9507 17.1209 6.8227 11.5149 11.2247 8.0699L8.4217 5.2529C3.3087 9.4509 -0.0003 16.0679 -0.0003 23.4919C-0.0003 24.5989 0.8887 25.4739 1.9827 25.4739ZM25.2517 13.1559C25.6347 12.5129 25.8667 11.7479 25.8667 10.8999C25.8667 8.3299 23.8707 6.1559 21.4237 6.1559C20.5487 6.1559 19.7287 6.4699 19.0997 6.9899ZM36.2437 24.0249C36.3537 23.8879 36.4217 23.6969 36.4217 23.4919C36.4217 17.2709 32.9907 11.6249 27.7267 8.9859C28.1777 10.4899 28.1097 12.0759 27.5487 13.5249C29.5037 14.9329 30.9397 16.9979 31.5547 19.3349ZM8.3667 25.4609C9.4607 25.4609 10.3497 24.5859 10.3497 23.4919C10.3497 19.4719 12.1957 15.8219 15.2167 13.5799C14.9157 12.9229 14.7387 12.2259 14.6697 11.5149L13.2617 10.0929C9.0367 13.0189 6.3847 18.0369 6.3847 23.4919C6.3847 24.5859 7.2597 25.4609 8.3667 25.4609ZM14.7247 25.4879H28.6567L20.3987 17.2299C15.5317 17.6269 12.3867 21.0029 12.3867 23.5599C12.3867 24.7909 13.2887 25.4879 14.7247 25.4879Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 39.826171875 26.668728436732692"
          className={className}
        >
          <path
            d="              M32.0877 26.4225C32.4157 26.7505 32.9357 26.7505 33.2497 26.4225C33.5647 26.0945 33.5647 25.6025 33.2497 25.2745L8.2437 0.2405C7.9157 -0.0735 7.4097 -0.0875 7.0817 0.2405C6.7677 0.5555 6.7677 1.0885 7.0817 1.4035ZM38.9647 22.4445C39.4437 22.4445 39.8257 22.0885 39.8257 21.5965C39.8257 9.8115 30.8847 0.1725 19.9067 0.1725C17.0757 0.1725 14.3827 0.8155 11.9487 1.9635L13.2477 3.2625C15.2987 2.3735 17.5547 1.8675 19.9067 1.8675C29.9547 1.8675 38.1307 10.7405 38.1307 21.5965C38.1307 22.0885 38.4997 22.4445 38.9647 22.4445ZM0.8477 22.4445C1.3257 22.4445 1.6957 22.0885 1.6957 21.5965C1.6957 15.0205 4.7027 9.1825 9.2967 5.6145L8.0937 4.4105C3.1857 8.2935 -0.0003 14.5695 -0.0003 21.5965C-0.0003 22.0885 0.3827 22.4445 0.8477 22.4445ZM22.4217 12.4495C23.4067 11.6845 24.0627 10.3855 24.0627 8.8955C24.0627 6.4065 22.1487 4.4515 19.9337 4.4515C18.4977 4.4515 17.2127 5.2995 16.5157 6.5435ZM33.1957 22.3075C33.4137 22.1575 33.5647 21.9105 33.5647 21.6105C33.5647 16.0045 30.3657 11.0285 25.5937 8.7585C25.6347 9.3605 25.5937 9.9895 25.4297 10.6045C29.1207 12.6275 31.6227 16.4965 31.8417 20.9405ZM7.1097 22.4445C7.5737 22.4445 7.9847 22.0885 7.9847 21.6105C7.9847 16.9205 10.5277 12.7915 14.3557 10.6725C14.2457 10.5635 14.1367 10.4535 14.0407 10.3585L13.1247 9.4425C9.0097 11.8895 6.2757 16.4695 6.2757 21.6105C6.2757 22.0885 6.6447 22.4445 7.1097 22.4445ZM13.0017 22.8135H26.4827L18.8807 15.2115C14.1777 15.6215 11.2927 18.9575 11.2927 21.4465C11.2927 22.2805 11.9487 22.8135 13.0017 22.8135Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.26171875 28.42724609375"
          className={className}
        >
          <path
            d="              M33.5237 28.1099C33.9477 28.5329 34.6577 28.5329 35.0687 28.1099C35.4787 27.6719 35.4917 27.0019 35.0687 26.5649L8.8457 0.3279C8.4077 -0.1091 7.7107 -0.1091 7.2867 0.3279C6.8767 0.7379 6.8767 1.4489 7.2867 1.8599ZM39.9357 23.7479C40.6597 23.7479 41.2617 23.1879 41.2617 22.4489C41.2617 10.2539 31.9917 0.2739 20.6167 0.2739C17.8687 0.2739 15.2307 0.8609 12.8237 1.9419L14.8617 3.9649C16.6657 3.2809 18.6077 2.8989 20.6167 2.8989C30.5567 2.8989 38.6507 11.6759 38.6507 22.4489C38.6507 23.1879 39.2107 23.7479 39.9357 23.7479ZM1.3127 23.7479C2.0367 23.7479 2.6117 23.1879 2.6117 22.4489C2.6117 16.0509 5.4547 10.3769 9.8437 6.8089L7.9977 4.9629C3.1307 9.0099 -0.0003 15.3539 -0.0003 22.4489C-0.0003 23.1879 0.5877 23.7479 1.3127 23.7479ZM23.7347 12.8519C24.4587 12.0859 24.9237 10.9789 24.9237 9.7479C24.9237 7.1639 22.9417 5.1539 20.6447 5.1539C19.4417 5.1539 18.3207 5.7699 17.5957 6.7129ZM34.4937 23.2699C34.7407 23.1059 34.9177 22.8049 34.9177 22.4629C34.9177 16.5979 31.6777 11.3199 26.7557 8.8319C26.9197 9.8029 26.8657 10.8009 26.5777 11.7579C29.6407 13.6989 31.7047 17.0489 32.0467 20.8359ZM7.6567 23.7479C8.3667 23.7479 8.9827 23.1879 8.9827 22.4629C8.9827 18.0739 11.1427 14.1369 14.5467 11.8669C14.3827 11.6079 14.2327 11.3479 14.1227 11.0879L12.8927 9.8439C8.9007 12.5649 6.3577 17.2949 6.3577 22.4629C6.3577 23.1879 6.9317 23.7479 7.6567 23.7479ZM13.7947 24.0079H27.0427L19.1817 16.1329C14.6287 16.7069 11.8257 19.9609 11.8257 22.4359C11.8257 23.4199 12.5647 24.0079 13.7947 24.0079Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40.783203125 27.677022962405374"
          className={className}
        >
          <path
            d="              M32.6207 27.3697C33.0317 27.7797 33.7147 27.7797 34.1117 27.3697C34.5077 26.9457 34.5217 26.3027 34.1117 25.8787L8.5727 0.3127C8.1487 -0.1113 7.4917 -0.0973 7.0687 0.3127C6.6717 0.7097 6.6717 1.4067 7.0687 1.8027ZM39.6617 23.2267C40.2777 23.2267 40.7827 22.7487 40.7827 22.1327C40.7827 10.0607 31.6097 0.2037 20.3847 0.2037C17.5687 0.2037 14.8887 0.8187 12.4547 1.9397L14.1367 3.6217C16.0777 2.8417 18.1837 2.4047 20.3847 2.4047C30.4067 2.4047 38.5817 11.2637 38.5817 22.1327C38.5817 22.7487 39.0607 23.2267 39.6617 23.2267ZM23.2557 12.7537C24.1037 11.9607 24.6367 10.7447 24.6367 9.3907C24.6367 6.7927 22.6407 4.8517 20.4117 4.8517C19.0857 4.8517 17.8827 5.5487 17.1307 6.6287ZM1.1077 23.2267C1.7087 23.2267 2.2007 22.7487 2.2007 22.1327C2.2007 15.7207 5.0447 10.0197 9.4197 6.4237L7.8747 4.8657C3.0897 8.8717 -0.0003 15.1197 -0.0003 22.1327C-0.0003 22.7487 0.4917 23.2267 1.1077 23.2267ZM33.9477 23.0487C34.2477 22.8717 34.4527 22.5297 34.4527 22.1467C34.4527 16.3907 31.2817 11.2227 26.4547 8.7897C26.5367 9.5827 26.4827 10.4027 26.2777 11.2097C29.6817 13.3287 31.9377 17.0607 32.1977 21.2857ZM7.4377 23.2267C8.0387 23.2267 8.5727 22.7487 8.5727 22.1467C8.5727 17.6487 10.8277 13.6017 14.3417 11.3327L12.7827 9.7737C8.8597 12.4257 6.3437 17.0607 6.3437 22.1467C6.3437 22.7487 6.8227 23.2267 7.4377 23.2267ZM13.5077 23.5547H26.5507L18.7987 15.8027C14.3417 16.4177 11.6487 19.6447 11.6487 22.0917C11.6487 23.0077 12.3457 23.5547 13.5077 23.5547Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.6171875 29.003193544842485"
          className={className}
        >
          <path
            d="              M34.2207 28.6751C34.6577 29.1121 35.3687 29.1121 35.7927 28.6751C36.2167 28.2371 36.2307 27.5401 35.7927 27.1031L9.0367 0.3331C8.5997 -0.1179 7.8887 -0.1039 7.4507 0.3331C7.0277 0.7571 7.0277 1.4821 7.4507 1.9051ZM40.1407 24.1631C40.9607 24.1631 41.6167 23.5211 41.6167 22.7001C41.6167 10.3821 32.2797 0.3331 20.8087 0.3331C18.0877 0.3331 15.4907 0.9071 13.1117 1.9331L15.4217 4.2301C17.1037 3.6141 18.9217 3.2731 20.8087 3.2731C30.6657 3.2731 38.7047 11.9821 38.7047 22.7001C38.7047 23.5211 39.3477 24.1631 40.1407 24.1631ZM1.4627 24.1631C2.2827 24.1631 2.9257 23.5211 2.9257 22.7001C2.9257 16.3021 5.7827 10.6421 10.1717 7.1011L8.1077 5.0231C3.1717 9.1111 -0.0003 15.5231 -0.0003 22.7001C-0.0003 23.5211 0.6567 24.1631 1.4627 24.1631ZM24.0897 12.9251C24.7327 12.1871 25.1567 11.1611 25.1567 10.0131C25.1567 7.4291 23.1597 5.3921 20.8357 5.3921C19.7007 5.3921 18.6487 5.9391 17.9507 6.7731ZM34.9047 23.4521C35.1227 23.2881 35.2737 23.0151 35.2737 22.7001C35.2737 16.7671 31.9917 11.3801 26.9747 8.8641C27.2207 9.9581 27.1527 11.0931 26.8107 12.1731C29.6137 13.9911 31.5277 17.0401 31.9377 20.4721ZM7.8207 24.1501C8.6267 24.1501 9.3107 23.5071 9.3107 22.7001C9.3107 18.4071 11.3887 14.5251 14.7107 12.2691C14.5057 11.9131 14.3557 11.5441 14.2597 11.1891L12.9747 9.9031C8.9417 12.6791 6.3577 17.4641 6.3577 22.7001C6.3577 23.5071 7.0137 24.1501 7.8207 24.1501ZM14.0137 24.3551H27.4257L19.4687 16.3981C14.8337 16.9171 11.9627 20.2121 11.9627 22.7001C11.9627 23.7391 12.7417 24.3551 14.0137 24.3551Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 38.58203125 25.320495141023716"
          className={className}
        >
          <path
            d="              M31.3907 25.1774C31.5957 25.3684 31.9097 25.3684 32.1017 25.1774C32.3207 24.9584 32.3067 24.6574 32.1017 24.4664L7.7927 0.1434C7.6157 -0.0336 7.3007 -0.0616 7.0817 0.1434C6.8907 0.3484 6.8907 0.6634 7.0817 0.8684ZM38.0487 21.4034C38.3357 21.4034 38.5817 21.1844 38.5817 20.8844C38.5817 9.4544 29.9137 0.1164 19.2777 0.1164C16.4337 0.1164 13.7127 0.7864 11.2797 1.9894L12.0727 2.7964C14.2737 1.7434 16.7067 1.1554 19.2777 1.1554C29.3397 1.1554 37.5427 10.0284 37.5427 20.8844C37.5427 21.1844 37.7617 21.4034 38.0487 21.4034ZM0.5197 21.4034C0.8207 21.4034 1.0387 21.1844 1.0387 20.8844C1.0387 14.1024 4.2387 8.0734 9.1187 4.5324L8.3807 3.7944C3.3227 7.5264 -0.0003 13.8024 -0.0003 20.8844C-0.0003 21.1844 0.2457 21.4034 0.5197 21.4034ZM21.3147 12.0384C22.5037 11.3134 23.2967 9.8914 23.2967 8.2374C23.2967 5.8724 21.4917 3.9034 19.3047 3.9034C17.7047 3.9034 16.3107 4.9564 15.7227 6.4324ZM32.1977 21.3214C32.3207 21.2254 32.4157 21.0754 32.4157 20.8974C32.4157 15.4694 29.1487 10.7534 24.4587 8.7024C24.4587 9.0714 24.4047 9.4404 24.3227 9.7964C28.3967 11.6964 31.2127 15.7434 31.3637 20.4734ZM6.6857 21.4034C6.9727 21.4034 7.2187 21.1844 7.2187 20.8974C7.2187 15.9484 10.1307 11.6964 14.3557 9.7684C14.2867 9.7004 14.2187 9.6324 14.1507 9.5634L13.5897 9.0034C9.1877 11.1494 6.1657 15.6884 6.1657 20.8974C6.1657 21.1844 6.3987 21.4034 6.6857 21.4034ZM12.3317 21.8274H26.4007L19.0037 14.4174C13.9457 14.5534 10.8277 18.0264 10.8277 20.5834C10.8277 21.3214 11.4297 21.8274 12.3317 21.8274Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 37.939453125 24.635609541252872"
          className={className}
        >
          <path
            d="              M31.0347 24.5429C31.1717 24.6659 31.3907 24.6659 31.5277 24.5429C31.6777 24.3789 31.6507 24.1879 31.5277 24.0509L7.5737 0.0979C7.4507 -0.0111 7.2327 -0.0521 7.0817 0.0979C6.9457 0.2349 6.9457 0.4539 7.0817 0.5899ZM37.5837 20.8789C37.7757 20.8789 37.9397 20.7289 37.9397 20.5239C37.9397 9.2719 29.4217 0.0839 18.9627 0.0839C16.0917 0.0839 13.3707 0.7819 10.9377 2.0119L11.4707 2.5449C13.7407 1.4239 16.2827 0.7949 18.9627 0.7949C29.0257 0.7949 37.2287 9.6679 37.2287 20.5239C37.2287 20.7289 37.3787 20.8789 37.5837 20.8789ZM0.3557 20.8789C0.5607 20.8789 0.7107 20.7289 0.7107 20.5239C0.7107 13.6329 4.0057 7.5079 9.0367 3.9809L8.5317 3.4889C3.3907 7.1389 -0.0003 13.4279 -0.0003 20.5239C-0.0003 20.7289 0.1637 20.8789 0.3557 20.8789ZM20.7537 11.8289C22.0387 11.1179 22.9007 9.6549 22.9007 7.8909C22.9007 5.5939 21.1637 3.6249 18.9767 3.6249C17.2947 3.6249 15.8597 4.7879 15.3127 6.3869ZM31.6777 20.8109C31.7737 20.7429 31.8147 20.6469 31.8147 20.5239C31.8147 15.1919 28.5327 10.6119 23.8707 8.6699C23.8577 8.9299 23.8027 9.1629 23.7617 9.3949C28.0137 11.2129 30.9937 15.3559 31.1167 20.2369ZM6.4807 20.8789C6.6577 20.8789 6.8227 20.7289 6.8227 20.5239C6.8227 15.4519 9.9257 11.1449 14.3557 9.3129C14.3147 9.2719 14.2597 9.2169 14.2047 9.1629L13.8227 8.7799C9.2967 10.7759 6.1247 15.2879 6.1247 20.5239C6.1247 20.7289 6.2757 20.8789 6.4807 20.8789ZM11.9907 21.3169H26.3597L19.0587 14.0159C13.8227 14.0019 10.5957 17.5569 10.5957 20.1409C10.5957 20.8379 11.1697 21.3169 11.9907 21.3169Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}