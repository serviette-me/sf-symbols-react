import { IconProps } from "../../types"

export default function QSquareIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.111328125 27.111328125"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H21.7517C25.1287 27.1113 27.1117 25.1293 27.1117 21.7523V5.3592C27.1117 1.9683 25.1287 0.0003 21.7517 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM6.0977 22.2583C5.2637 22.2583 4.8537 21.9023 4.8537 21.0003V6.0972C4.8537 5.1953 5.2637 4.8532 6.0977 4.8532H21.0137C21.8477 4.8532 22.2577 5.1953 22.2577 6.0972V21.0003C22.2577 21.9023 21.8477 22.2583 21.0137 22.2583ZM13.5627 19.7972C14.0277 19.7972 14.4647 19.7563 14.8887 19.6743L15.1077 20.0293C15.5447 20.7953 16.0097 21.0823 16.7477 21.0823C17.7047 21.0823 18.3887 20.4393 18.3887 19.5513C18.3887 19.1543 18.2657 18.7993 17.9647 18.3612L17.8827 18.2242C19.0177 17.1583 19.6877 15.5723 19.6877 13.5493C19.6877 9.5843 17.0487 7.3013 13.5627 7.3013C10.0627 7.3013 7.4237 9.5843 7.4237 13.5493C7.4237 17.5273 10.0627 19.7972 13.5627 19.7972ZM13.5627 16.2153C12.6057 16.2153 11.8537 15.3813 11.8537 13.5493C11.8537 11.7173 12.6057 10.8963 13.5627 10.8963C14.5057 10.8963 15.2577 11.7173 15.2577 13.5493C15.2577 14.0413 15.1897 14.4783 15.0797 14.8203L14.9567 14.7113C14.8747 14.6563 14.7657 14.6153 14.5607 14.6153C14.0137 14.6153 13.5767 14.9983 13.5767 15.5453C13.5767 15.7773 13.6447 15.9413 13.7537 16.0783L13.8227 16.1873C13.7407 16.2153 13.6447 16.2153 13.5627 16.2153Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.140625 26.140625"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H21.3147C24.4457 26.1407 26.1407 24.4457 26.1407 21.3417V4.7987C26.1407 1.6957 24.4457 -0.0003 21.3147 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM5.2087 22.6137C4.1157 22.6137 3.5277 22.0797 3.5277 20.9177V5.2367C3.5277 4.0737 4.1157 3.5277 5.2087 3.5277H20.9317C22.0257 3.5277 22.6137 4.0737 22.6137 5.2367V20.9177C22.6137 22.0797 22.0257 22.6137 20.9317 22.6137ZM13.0707 19.4007C13.6997 19.4007 14.3007 19.3047 14.8337 19.1407L15.4217 19.9607C15.7777 20.5217 16.1327 20.7267 16.6657 20.7267C17.3907 20.7267 17.8967 20.2477 17.8967 19.5647C17.8967 19.2367 17.8007 18.9767 17.5277 18.5797L17.0767 17.9787C18.3477 16.8707 19.0997 15.1487 19.0997 13.0017C19.0997 9.0917 16.5707 6.6037 13.0707 6.6037C9.5837 6.6037 7.0547 9.0917 7.0547 13.0017C7.0547 16.9117 9.5837 19.4007 13.0707 19.4007ZM13.0707 16.7347C11.4707 16.7347 10.3637 15.3807 10.3637 13.0017C10.3637 10.6227 11.4707 9.2557 13.0707 9.2557C14.6837 9.2557 15.7907 10.6227 15.7907 13.0017C15.7907 14.0407 15.5447 14.9027 15.0797 15.4897L14.6427 14.9157C14.4927 14.7387 14.3277 14.6697 14.0687 14.6697C13.5767 14.6697 13.1657 15.0257 13.1657 15.5317C13.1657 15.7637 13.2477 15.9417 13.3847 16.1327L13.7537 16.6527C13.5487 16.7067 13.3167 16.7347 13.0707 16.7347Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.66015625 26.66015625"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H21.5467C24.8007 26.6605 26.6597 24.8145 26.6597 21.5605V5.0995C26.6597 1.8455 24.8007 -0.0005 21.5467 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM5.6877 22.4355C4.7167 22.4355 4.2247 21.9985 4.2247 20.9725V5.7015C4.2247 4.6755 4.7167 4.2385 5.6877 4.2385H20.9727C21.9297 4.2385 22.4217 4.6755 22.4217 5.7015V20.9725C22.4217 21.9985 21.9297 22.4355 20.9727 22.4355ZM13.3297 19.6195C13.8767 19.6195 14.3827 19.5505 14.8617 19.4275L15.2577 20.0015C15.6547 20.6715 16.0647 20.9175 16.7067 20.9175C17.5547 20.9175 18.1567 20.3575 18.1567 19.5645C18.1567 19.1955 18.0467 18.8945 17.7597 18.4705L17.4997 18.1155C18.7027 17.0215 19.4137 15.3805 19.4137 13.3025C19.4137 9.3515 16.8297 6.9865 13.3297 6.9865C9.8297 6.9865 7.2457 9.3515 7.2457 13.3025C7.2457 17.2405 9.8297 19.6195 13.3297 19.6195ZM13.3297 16.4745C12.0727 16.4745 11.1567 15.3945 11.1567 13.3025C11.1567 11.2105 12.0727 10.1305 13.3297 10.1305C14.5877 10.1305 15.5037 11.2105 15.5037 13.3025C15.5037 14.0415 15.3537 14.6835 15.0797 15.1345L14.8067 14.8205C14.6977 14.6975 14.5607 14.6425 14.3277 14.6425C13.8087 14.6425 13.3847 15.0255 13.3847 15.5445C13.3847 15.7775 13.4527 15.9555 13.5767 16.1195L13.7947 16.4065C13.6447 16.4475 13.4937 16.4745 13.3297 16.4745Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.759765625 24.759765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H20.7267C23.3927 24.7595 24.7597 23.3925 24.7597 20.7675V4.0055C24.7597 1.3675 23.3927 0.0005 20.7267 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM4.0607 23.0645C2.5297 23.0645 1.6957 22.2575 1.6957 20.6715V4.0875C1.6957 2.5155 2.5297 1.6955 4.0607 1.6955H20.6857C22.2027 1.6955 23.0647 2.5155 23.0647 4.0875V20.6715C23.0647 22.2575 22.2027 23.0645 20.6857 23.0645ZM12.3867 18.7035C13.2067 18.7035 13.9587 18.5525 14.6287 18.2655L15.6677 19.7015C15.8727 19.9885 16.0777 20.0845 16.3377 20.0845C16.7207 20.0845 16.9937 19.8245 16.9937 19.4415C16.9937 19.2635 16.9257 19.1135 16.7207 18.8535L15.7907 17.5825C17.2537 16.4885 18.1427 14.6015 18.1427 12.2635C18.1427 8.4905 15.8047 5.8515 12.3867 5.8515C8.9547 5.8515 6.6307 8.4905 6.6307 12.2635C6.6307 16.0785 8.9547 18.7035 12.3867 18.7035ZM12.3867 17.3355C9.9397 17.3355 8.3267 15.3265 8.3267 12.2635C8.3267 9.2425 9.9397 7.2325 12.3867 7.2325C14.8207 7.2325 16.4477 9.2425 16.4477 12.2635C16.4477 14.0545 15.8867 15.5035 14.8887 16.3655L13.9047 15.0115C13.7267 14.7655 13.5627 14.6975 13.3027 14.6975C12.9477 14.6975 12.6597 14.9575 12.6597 15.3125C12.6597 15.4905 12.7147 15.6545 12.8657 15.8595L13.7677 17.1035C13.3707 17.2535 12.9067 17.3355 12.3867 17.3355Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.525390625 25.525390625"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H21.0407C23.9937 25.5253 25.5257 23.9943 25.5257 21.0823V4.4433C25.5257 1.5173 23.9937 0.0003 21.0407 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM4.6487 22.8453C3.3767 22.8453 2.6797 22.1753 2.6797 20.8493V4.6623C2.6797 3.3363 3.3767 2.6793 4.6487 2.6793H20.8767C22.1347 2.6793 22.8457 3.3363 22.8457 4.6623V20.8493C22.8457 22.1753 22.1347 22.8453 20.8767 22.8453ZM12.7697 19.1273C13.5077 19.1273 14.1917 19.0173 14.8067 18.7853L15.6137 19.9063C15.9137 20.3303 16.2147 20.4943 16.6247 20.4943C17.1857 20.4943 17.5817 20.1113 17.5817 19.5503C17.5817 19.2773 17.4997 19.0863 17.2407 18.7173L16.5567 17.8003C17.9097 16.6793 18.7307 14.8613 18.7307 12.6463C18.7307 8.7633 16.2697 6.1523 12.7697 6.1523C9.2697 6.1523 6.8087 8.7633 6.8087 12.6463C6.8087 16.5153 9.2697 19.1273 12.7697 19.1273ZM12.7697 17.0763C10.7457 17.0763 9.3927 15.3673 9.3927 12.6463C9.3927 9.9123 10.7457 8.2033 12.7697 8.2033C14.7927 8.2033 16.1467 9.9123 16.1467 12.6463C16.1467 14.0273 15.7637 15.1753 15.0937 15.9143L14.4377 15.0393C14.2457 14.7793 14.0547 14.6973 13.7537 14.6973C13.2887 14.6973 12.9067 15.0393 12.9067 15.5043C12.9067 15.7363 12.9747 15.9273 13.1527 16.1603L13.7127 16.9393C13.4257 17.0213 13.1117 17.0763 12.7697 17.0763Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.169921875 25.169921875"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H20.8767C23.7477 25.1695 25.1697 23.7485 25.1697 20.9315V4.2385C25.1697 1.4215 23.7477 -0.0005 20.8767 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM4.3207 22.9685C2.9527 22.9685 2.2017 22.2445 2.2017 20.8225V4.3475C2.2017 2.9255 2.9527 2.2015 4.3207 2.2015H20.8497C22.2027 2.2015 22.9687 2.9255 22.9687 4.3475V20.8225C22.9687 22.2445 22.2027 22.9685 20.8497 22.9685ZM12.5917 18.9765C13.3847 18.9765 14.1367 18.8395 14.7797 18.5805L15.7367 19.8655C15.9957 20.2345 16.2557 20.3575 16.5977 20.3575C17.0767 20.3575 17.4177 20.0295 17.4177 19.5505C17.4177 19.3045 17.3357 19.1405 17.0767 18.7985L16.2557 17.7055C17.6637 16.5705 18.5117 14.7105 18.5117 12.4415C18.5117 8.5855 16.0917 5.8925 12.5917 5.8925C9.0917 5.8925 6.6717 8.5855 6.6717 12.4415C6.6717 16.2835 9.0917 18.9765 12.5917 18.9765ZM12.5917 17.2535C10.3357 17.2535 8.8597 15.3535 8.8597 12.4415C8.8597 9.5155 10.3357 7.6155 12.5917 7.6155C14.8617 7.6155 16.3377 9.5155 16.3377 12.4415C16.3377 14.0275 15.8867 15.3265 15.0937 16.1465L14.3147 15.0935C14.0957 14.8065 13.8907 14.7105 13.5767 14.7105C13.1247 14.7105 12.7557 15.0525 12.7557 15.4905C12.7557 15.7225 12.8377 15.9145 13.0157 16.1735L13.6857 17.0895C13.3577 17.1995 13.0017 17.2535 12.5917 17.2535Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.78515625 25.78515625"
          className={className}
        >
          <path
            d="              M4.6347 25.785H21.1507C24.1857 25.785 25.7847 24.199 25.7847 21.205V4.594C25.7847 1.6 24.1857 0 21.1507 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM4.8947 22.75C3.6917 22.75 3.0487 22.135 3.0487 20.877V4.908C3.0487 3.65 3.6917 3.049 4.8947 3.049H20.9047C22.0797 3.049 22.7497 3.65 22.7497 4.908V20.877C22.7497 22.135 22.0797 22.75 20.9047 22.75ZM12.9067 19.25C13.5897 19.25 14.2327 19.141 14.8207 18.936L15.5317 19.92C15.8597 20.412 16.1877 20.59 16.6387 20.59C17.2677 20.59 17.7187 20.166 17.7187 19.551C17.7187 19.264 17.6367 19.031 17.3637 18.662L16.7757 17.883C18.1017 16.762 18.8947 14.984 18.8947 12.797C18.8947 8.9 16.4067 6.344 12.9067 6.344C9.4067 6.344 6.9177 8.9 6.9177 12.797C6.9177 16.693 9.4067 19.25 12.9067 19.25ZM12.9067 16.926C11.0607 16.926 9.8167 15.367 9.8167 12.797C9.8167 10.227 11.0607 8.668 12.9067 8.668C14.7387 8.668 15.9957 10.227 15.9957 12.797C15.9957 14.041 15.6677 15.053 15.0937 15.736L14.5197 14.984C14.3417 14.766 14.1637 14.684 13.8907 14.684C13.4117 14.684 13.0157 15.039 13.0157 15.518C13.0157 15.75 13.0977 15.928 13.2477 16.146L13.7267 16.816C13.4807 16.898 13.2067 16.926 12.9067 16.926Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.19921875 24.19921875"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H20.5217C22.9417 24.1994 24.1997 22.9144 24.1997 20.5354V3.6774C24.1997 1.2984 22.9417 0.0004 20.5217 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM3.7187 23.1874C1.9417 23.1874 1.0117 22.2574 1.0117 20.4804V3.7324C1.0117 1.9414 1.9417 1.0114 3.7187 1.0114H20.4807C22.2027 1.0114 23.1877 1.9414 23.1877 3.7324V20.4804C23.1877 22.2574 22.2027 23.1874 20.4807 23.1874ZM12.0997 18.3204C12.9607 18.3204 13.7407 18.1564 14.4097 17.8414L15.5727 19.4684C15.7087 19.6464 15.8187 19.7014 16.0097 19.7014C16.2557 19.7014 16.4197 19.5234 16.4197 19.2914C16.4197 19.1814 16.3787 19.0724 16.2557 18.9084L15.1757 17.4044C16.7207 16.3514 17.6367 14.4514 17.6367 12.0314C17.6367 8.3394 15.4357 5.7834 12.0997 5.7834C8.7777 5.7834 6.5767 8.3394 6.5767 12.0314C6.5767 15.7774 8.7777 18.3204 12.0997 18.3204ZM12.0997 17.4184C9.4197 17.4184 7.6157 15.2574 7.6157 12.0314C7.6157 8.8594 9.4197 6.6994 12.0997 6.6994C14.7797 6.6994 16.5977 8.8594 16.5977 12.0314C16.5977 14.0684 15.8867 15.7224 14.6157 16.6254L13.3437 14.8754C13.2207 14.7114 13.1247 14.6564 12.9477 14.6564C12.7147 14.6564 12.5237 14.8204 12.5237 15.0664C12.5237 15.1754 12.5647 15.2854 12.6737 15.4354L13.8637 17.0894C13.3707 17.3084 12.7967 17.4184 12.0997 17.4184Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.92578125 23.912109375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H20.4117C22.6957 23.912 23.9257 22.668 23.9257 20.398V3.514C23.9257 1.244 22.6957 0 20.4117 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM3.5407 23.242C1.6547 23.242 0.6697 22.258 0.6697 20.371V3.541C0.6697 1.641 1.6547 0.67 3.5407 0.67H20.3707C22.2027 0.67 23.2557 1.641 23.2557 3.541V20.371C23.2557 22.258 22.2027 23.242 20.3707 23.242ZM11.9627 18.129C12.8377 18.129 13.6177 17.951 14.3007 17.623L15.5317 19.332C15.6267 19.469 15.6957 19.51 15.8317 19.51C16.0237 19.51 16.1327 19.373 16.1327 19.209C16.1327 19.141 16.1057 19.045 16.0237 18.936L14.8617 17.322C16.4337 16.283 17.3767 14.369 17.3767 11.908C17.3767 8.258 15.2437 5.756 11.9627 5.756C8.6817 5.756 6.5487 8.258 6.5487 11.908C6.5487 15.613 8.6817 18.129 11.9627 18.129ZM11.9627 17.445C9.1597 17.445 7.2457 15.23 7.2457 11.908C7.2457 8.654 9.1597 6.426 11.9627 6.426C14.7657 6.426 16.6797 8.654 16.6797 11.908C16.6797 14.082 15.8867 15.832 14.4787 16.762L13.0707 14.807C12.9607 14.67 12.8927 14.629 12.7557 14.629C12.5917 14.629 12.4547 14.752 12.4547 14.943C12.4547 15.012 12.4957 15.094 12.5777 15.217L13.9177 17.076C13.3707 17.322 12.7427 17.445 11.9627 17.445Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}