import { IconProps } from "../../types"

export default function CalendarBadgeCheckmarkIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.19140625 29.23046875"
          className={className}
        >
          <path
            d="              M5.3597 27.1113H19.6877C18.7307 25.6893 18.1427 24.0212 18.0607 22.2583H6.0837C5.2497 22.2583 4.8537 21.9163 4.8537 21.0273V9.5843C4.8537 8.6953 5.2497 8.3673 6.0837 8.3673H24.0627C24.8967 8.3673 25.2927 8.6953 25.2927 9.5843V12.4273C26.0857 12.2093 26.8927 12.0993 27.7407 12.0993C28.5747 12.0993 29.3807 12.2093 30.1467 12.4003V5.3592C30.1467 1.9683 28.1637 0.0003 24.7867 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM12.5917 12.3323H13.3987C13.9177 12.3323 14.1097 12.1543 14.1097 11.6352V10.8283C14.1097 10.3082 13.9177 10.1313 13.3987 10.1313H12.5917C12.0727 10.1313 11.8807 10.3082 11.8807 10.8283V11.6352C11.8807 12.1543 12.0727 12.3323 12.5917 12.3323ZM16.7477 12.3323H17.5547C18.0747 12.3323 18.2657 12.1543 18.2657 11.6352V10.8283C18.2657 10.3082 18.0747 10.1313 17.5547 10.1313H16.7477C16.2287 10.1313 16.0237 10.3082 16.0237 10.8283V11.6352C16.0237 12.1543 16.2287 12.3323 16.7477 12.3323ZM20.8907 12.3323H21.6977C22.2167 12.3323 22.4087 12.1543 22.4087 11.6352V10.8283C22.4087 10.3082 22.2167 10.1313 21.6977 10.1313H20.8907C20.3707 10.1313 20.1797 10.3082 20.1797 10.8283V11.6352C20.1797 12.1543 20.3707 12.3323 20.8907 12.3323ZM8.4497 16.4063H9.2557C9.7757 16.4063 9.9667 16.2283 9.9667 15.7093V14.9023C9.9667 14.3833 9.7757 14.2053 9.2557 14.2053H8.4497C7.9297 14.2053 7.7387 14.3833 7.7387 14.9023V15.7093C7.7387 16.2283 7.9297 16.4063 8.4497 16.4063ZM12.5917 16.4063H13.3987C13.9177 16.4063 14.1097 16.2283 14.1097 15.7093V14.9023C14.1097 14.3833 13.9177 14.2053 13.3987 14.2053H12.5917C12.0727 14.2053 11.8807 14.3833 11.8807 14.9023V15.7093C11.8807 16.2283 12.0727 16.4063 12.5917 16.4063ZM16.7477 16.4063H17.5547C18.0747 16.4063 18.2657 16.2283 18.2657 15.7093V14.9023C18.2657 14.3833 18.0747 14.2053 17.5547 14.2053H16.7477C16.2287 14.2053 16.0237 14.3833 16.0237 14.9023V15.7093C16.0237 16.2283 16.2287 16.4063 16.7477 16.4063ZM27.7407 29.2303C31.8147 29.2303 35.1917 25.8403 35.1917 21.7653C35.1917 17.7053 31.8277 14.3283 27.7407 14.3283C23.6657 14.3283 20.2887 17.7053 20.2887 21.7653C20.2887 25.8403 23.6657 29.2303 27.7407 29.2303ZM27.1117 25.8943C26.6877 25.8943 26.2227 25.7993 25.9087 25.4573L23.7207 23.1193C23.4477 22.8043 23.2147 22.4493 23.2147 22.0393C23.2147 21.0133 24.0077 20.5353 24.7457 20.5353C25.1697 20.5353 25.5527 20.6443 25.8127 20.9593L26.9607 22.3263L29.7087 18.5663C30.0097 18.1423 30.4607 17.8963 30.9527 17.8963C31.8007 17.8963 32.4567 18.5803 32.4567 19.4003C32.4567 19.6603 32.3887 19.9743 32.1977 20.2203L28.3147 25.3612C28.0547 25.6893 27.5897 25.8943 27.1117 25.8943ZM8.4497 20.4802H9.2557C9.7757 20.4802 9.9667 20.3163 9.9667 19.7833V18.9903C9.9667 18.4573 9.7757 18.2933 9.2557 18.2933H8.4497C7.9297 18.2933 7.7387 18.4573 7.7387 18.9903V19.7833C7.7387 20.3163 7.9297 20.4802 8.4497 20.4802ZM12.5917 20.4802H13.3987C13.9177 20.4802 14.1097 20.3163 14.1097 19.7833V18.9903C14.1097 18.4573 13.9177 18.2933 13.3987 18.2933H12.5917C12.0727 18.2933 11.8807 18.4573 11.8807 18.9903V19.7833C11.8807 20.3163 12.0727 20.4802 12.5917 20.4802ZM16.7477 20.4802H17.5547C18.0747 20.4802 18.2657 20.3163 18.2657 19.7833V18.9903C18.2657 18.4573 18.0747 18.2933 17.5547 18.2933H16.7477C16.2287 18.2933 16.0237 18.4573 16.0237 18.9903V19.7833C16.0237 20.3163 16.2287 20.4802 16.7477 20.4802Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.15234375 28.4921875"
          className={className}
        >
          <path
            d="              M4.8267 26.1407H19.0997C18.4297 25.1017 17.9787 23.8847 17.8557 22.6137H5.0857C4.0607 22.6137 3.5277 22.1207 3.5277 21.0407V8.8867C3.5277 7.8067 4.0607 7.3147 5.0857 7.3147H23.6117C24.6227 7.3147 25.1697 7.8067 25.1697 8.8867V12.2367C25.7577 12.1137 26.3457 12.0447 26.9477 12.0447C27.5487 12.0447 28.1367 12.1137 28.6977 12.2367V4.7987C28.6977 1.6957 27.0017 -0.0003 23.8707 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM11.7717 11.7437H12.5777C13.0837 11.7437 13.2617 11.5937 13.2617 11.0877V10.2817C13.2617 9.7887 13.0837 9.6247 12.5777 9.6247H11.7717C11.2797 9.6247 11.1017 9.7887 11.1017 10.2817V11.0877C11.1017 11.5937 11.2797 11.7437 11.7717 11.7437ZM16.1187 11.7437H16.9257C17.4317 11.7437 17.5957 11.5937 17.5957 11.0877V10.2817C17.5957 9.7887 17.4317 9.6247 16.9257 9.6247H16.1187C15.6137 9.6247 15.4497 9.7887 15.4497 10.2817V11.0877C15.4497 11.5937 15.6137 11.7437 16.1187 11.7437ZM20.4667 11.7437H21.2737C21.7657 11.7437 21.9437 11.5937 21.9437 11.0877V10.2817C21.9437 9.7887 21.7657 9.6247 21.2737 9.6247H20.4667C19.9607 9.6247 19.7837 9.7887 19.7837 10.2817V11.0877C19.7837 11.5937 19.9607 11.7437 20.4667 11.7437ZM7.4237 16.0237H8.2307C8.7367 16.0237 8.9137 15.8727 8.9137 15.3667V14.5607C8.9137 14.0687 8.7367 13.9047 8.2307 13.9047H7.4237C6.9317 13.9047 6.7537 14.0687 6.7537 14.5607V15.3667C6.7537 15.8727 6.9317 16.0237 7.4237 16.0237ZM11.7717 16.0237H12.5777C13.0837 16.0237 13.2617 15.8727 13.2617 15.3667V14.5607C13.2617 14.0687 13.0837 13.9047 12.5777 13.9047H11.7717C11.2797 13.9047 11.1017 14.0687 11.1017 14.5607V15.3667C11.1017 15.8727 11.2797 16.0237 11.7717 16.0237ZM16.1187 16.0237H16.9257C17.4317 16.0237 17.5957 15.8727 17.5957 15.3667V14.5607C17.5957 14.0687 17.4317 13.9047 16.9257 13.9047H16.1187C15.6137 13.9047 15.4497 14.0687 15.4497 14.5607V15.3667C15.4497 15.8727 15.6137 16.0237 16.1187 16.0237ZM26.9607 28.4917C30.8707 28.4917 34.1527 25.2247 34.1527 21.2867C34.1527 17.3497 30.8987 14.0957 26.9607 14.0957C23.0097 14.0957 19.7557 17.3497 19.7557 21.2867C19.7557 25.2387 23.0097 28.4917 26.9607 28.4917ZM26.2227 25.2247C25.8947 25.2247 25.5257 25.1287 25.2797 24.8557L23.0237 22.4217C22.8187 22.1757 22.6677 21.8747 22.6677 21.5737C22.6677 20.8227 23.2427 20.3847 23.8577 20.3847C24.2127 20.3847 24.5137 20.5077 24.7187 20.7537L26.1267 22.3397L29.1617 18.1427C29.3947 17.8277 29.7497 17.6227 30.1597 17.6227C30.8027 17.6227 31.3357 18.1427 31.3357 18.7987C31.3357 19.0037 31.2677 19.2637 31.1177 19.4687L27.1797 24.8007C26.9887 25.0607 26.6057 25.2247 26.2227 25.2247ZM7.4237 20.3027H8.2307C8.7367 20.3027 8.9137 20.1387 8.9137 19.6467V18.8397C8.9137 18.3337 8.7367 18.1837 8.2307 18.1837H7.4237C6.9317 18.1837 6.7537 18.3337 6.7537 18.8397V19.6467C6.7537 20.1387 6.9317 20.3027 7.4237 20.3027ZM11.7717 20.3027H12.5777C13.0837 20.3027 13.2617 20.1387 13.2617 19.6467V18.8397C13.2617 18.3337 13.0837 18.1837 12.5777 18.1837H11.7717C11.2797 18.1837 11.1017 18.3337 11.1017 18.8397V19.6467C11.1017 20.1387 11.2797 20.3027 11.7717 20.3027ZM16.1187 20.3027H16.9257C17.4317 20.3027 17.5957 20.1387 17.5957 19.6467V18.8397C17.5957 18.3337 17.4317 18.1837 16.9257 18.1837H16.1187C15.6137 18.1837 15.4497 18.3337 15.4497 18.8397V19.6467C15.4497 20.1387 15.6137 20.3027 16.1187 20.3027Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34.69921875 28.888671875"
          className={className}
        >
          <path
            d="              M5.1137 26.6605H19.4137C18.5937 25.4165 18.0747 23.9665 17.9647 22.4355H5.6057C4.6897 22.4355 4.2247 22.0255 4.2247 21.0415V9.2695C4.2247 8.2855 4.6897 7.8745 5.6057 7.8745H23.8437C24.7597 7.8745 25.2387 8.2855 25.2387 9.2695V12.3455C25.9357 12.1675 26.6467 12.0725 27.3707 12.0725C28.0817 12.0725 28.7927 12.1675 29.4627 12.3325V5.0995C29.4627 1.8455 27.6177 -0.0005 24.3497 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM12.2087 12.0585H13.0157C13.5217 12.0585 13.7127 11.8945 13.7127 11.3885V10.5825C13.7127 10.0625 13.5217 9.8985 13.0157 9.8985H12.2087C11.6897 9.8985 11.5117 10.0625 11.5117 10.5825V11.3885C11.5117 11.8945 11.6897 12.0585 12.2087 12.0585ZM16.4477 12.0585H17.2537C17.7737 12.0585 17.9517 11.8945 17.9517 11.3885V10.5825C17.9517 10.0625 17.7737 9.8985 17.2537 9.8985H16.4477C15.9417 9.8985 15.7497 10.0625 15.7497 10.5825V11.3885C15.7497 11.8945 15.9417 12.0585 16.4477 12.0585ZM20.6857 12.0585H21.4927C22.0117 12.0585 22.1897 11.8945 22.1897 11.3885V10.5825C22.1897 10.0625 22.0117 9.8985 21.4927 9.8985H20.6857C20.1797 9.8985 19.9887 10.0625 19.9887 10.5825V11.3885C19.9887 11.8945 20.1797 12.0585 20.6857 12.0585ZM7.9707 16.2285H8.7777C9.2837 16.2285 9.4747 16.0645 9.4747 15.5585V14.7515C9.4747 14.2325 9.2837 14.0685 8.7777 14.0685H7.9707C7.4517 14.0685 7.2737 14.2325 7.2737 14.7515V15.5585C7.2737 16.0645 7.4517 16.2285 7.9707 16.2285ZM12.2087 16.2285H13.0157C13.5217 16.2285 13.7127 16.0645 13.7127 15.5585V14.7515C13.7127 14.2325 13.5217 14.0685 13.0157 14.0685H12.2087C11.6897 14.0685 11.5117 14.2325 11.5117 14.7515V15.5585C11.5117 16.0645 11.6897 16.2285 12.2087 16.2285ZM16.4477 16.2285H17.2537C17.7737 16.2285 17.9517 16.0645 17.9517 15.5585V14.7515C17.9517 14.2325 17.7737 14.0685 17.2537 14.0685H16.4477C15.9417 14.0685 15.7497 14.2325 15.7497 14.7515V15.5585C15.7497 16.0645 15.9417 16.2285 16.4477 16.2285ZM27.3707 28.8885C31.3767 28.8885 34.6997 25.5525 34.6997 21.5465C34.6997 17.5415 31.3907 14.2325 27.3707 14.2325C23.3517 14.2325 20.0427 17.5415 20.0427 21.5465C20.0427 25.5665 23.3517 28.8885 27.3707 28.8885ZM26.6877 25.5935C26.3187 25.5935 25.8947 25.4845 25.6207 25.1835L23.3927 22.7915C23.1467 22.5175 22.9547 22.1895 22.9547 21.8205C22.9547 20.9315 23.6387 20.4665 24.3227 20.4665C24.7187 20.4665 25.0607 20.5895 25.2927 20.8635L26.5647 22.3395L29.4497 18.3745C29.7227 17.9925 30.1327 17.7735 30.5837 17.7735C31.3227 17.7735 31.9237 18.3745 31.9237 19.1265C31.9237 19.3595 31.8557 19.6465 31.6917 19.8655L27.7817 25.1015C27.5487 25.4025 27.1247 25.5935 26.6877 25.5935ZM7.9707 20.4125H8.7777C9.2837 20.4125 9.4747 20.2345 9.4747 19.7285V18.9215C9.4747 18.4165 9.2837 18.2385 8.7777 18.2385H7.9707C7.4517 18.2385 7.2737 18.4165 7.2737 18.9215V19.7285C7.2737 20.2345 7.4517 20.4125 7.9707 20.4125ZM12.2087 20.4125H13.0157C13.5217 20.4125 13.7127 20.2345 13.7127 19.7285V18.9215C13.7127 18.4165 13.5217 18.2385 13.0157 18.2385H12.2087C11.6897 18.2385 11.5117 18.4165 11.5117 18.9215V19.7285C11.5117 20.2345 11.6897 20.4125 12.2087 20.4125ZM16.4477 20.4125H17.2537C17.7737 20.4125 17.9517 20.2345 17.9517 19.7285V18.9215C17.9517 18.4165 17.7737 18.2385 17.2537 18.2385H16.4477C15.9417 18.2385 15.7497 18.4165 15.7497 18.9215V19.7285C15.7497 20.2345 15.9417 20.4125 16.4477 20.4125Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.044921875 27.384765625"
          className={className}
        >
          <path
            d="              M4.0337 24.7595H18.9767C18.6757 24.2405 18.4297 23.6665 18.2797 23.0645H3.9097C2.4747 23.0645 1.6957 22.3125 1.6957 20.8355V8.3265C1.6957 6.8495 2.4747 6.0845 3.9097 6.0845H23.1597C24.5687 6.0845 25.3887 6.8495 25.3887 8.3265V12.2505C25.7167 12.2225 25.9767 12.1955 26.2637 12.1955C26.5367 12.1955 26.8107 12.2225 27.0837 12.2505V4.0055C27.0837 1.3675 25.7167 0.0005 23.0507 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM10.8147 10.9515H11.6207C12.0587 10.9515 12.1677 10.8415 12.1677 10.4175V9.6115C12.1677 9.1875 12.0587 9.0785 11.6207 9.0785H10.8147C10.3907 9.0785 10.2677 9.1875 10.2677 9.6115V10.4175C10.2677 10.8415 10.3907 10.9515 10.8147 10.9515ZM15.4497 10.9515H16.2557C16.6937 10.9515 16.8027 10.8415 16.8027 10.4175V9.6115C16.8027 9.1875 16.6937 9.0785 16.2557 9.0785H15.4497C15.0257 9.0785 14.9027 9.1875 14.9027 9.6115V10.4175C14.9027 10.8415 15.0257 10.9515 15.4497 10.9515ZM20.0977 10.9515H20.8907C21.3277 10.9515 21.4377 10.8415 21.4377 10.4175V9.6115C21.4377 9.1875 21.3277 9.0785 20.8907 9.0785H20.0977C19.6597 9.0785 19.5507 9.1875 19.5507 9.6115V10.4175C19.5507 10.8415 19.6597 10.9515 20.0977 10.9515ZM6.1797 15.5035H6.9867C7.4237 15.5035 7.5337 15.4085 7.5337 14.9845V14.1775C7.5337 13.7535 7.4237 13.6445 6.9867 13.6445H6.1797C5.7557 13.6445 5.6327 13.7535 5.6327 14.1775V14.9845C5.6327 15.4085 5.7557 15.5035 6.1797 15.5035ZM10.8147 15.5035H11.6207C12.0587 15.5035 12.1677 15.4085 12.1677 14.9845V14.1775C12.1677 13.7535 12.0587 13.6445 11.6207 13.6445H10.8147C10.3907 13.6445 10.2677 13.7535 10.2677 14.1775V14.9845C10.2677 15.4085 10.3907 15.5035 10.8147 15.5035ZM15.4497 15.5035H16.2557C16.6937 15.5035 16.8027 15.4085 16.8027 14.9845V14.1775C16.8027 13.7535 16.6937 13.6445 16.2557 13.6445H15.4497C15.0257 13.6445 14.9027 13.7535 14.9027 14.1775V14.9845C14.9027 15.4085 15.0257 15.5035 15.4497 15.5035ZM26.2497 27.3845C29.9417 27.3845 33.0447 24.3085 33.0447 20.5895C33.0447 16.8575 29.9827 13.7815 26.2497 13.7815C22.5317 13.7815 19.4547 16.8575 19.4547 20.5895C19.4547 24.3225 22.5317 27.3845 26.2497 27.3845ZM25.4027 24.1715C25.2107 24.1715 24.9647 24.0895 24.8147 23.9125L22.5447 21.4235C22.4087 21.2735 22.3397 21.0545 22.3397 20.8765C22.3397 20.4535 22.6677 20.1385 23.0777 20.1385C23.3517 20.1385 23.5297 20.2755 23.6657 20.4125L25.3747 22.2575L28.7107 17.6505C28.8477 17.4455 29.0667 17.3225 29.3267 17.3225C29.7227 17.3225 30.0777 17.6365 30.0777 18.0465C30.0777 18.1975 30.0097 18.3615 29.9007 18.5115L26.0317 23.8845C25.8947 24.0625 25.6757 24.1715 25.4027 24.1715ZM6.1797 20.0705H6.9867C7.4237 20.0705 7.5337 19.9745 7.5337 19.5505V18.7445C7.5337 18.3205 7.4237 18.2105 6.9867 18.2105H6.1797C5.7557 18.2105 5.6327 18.3205 5.6327 18.7445V19.5505C5.6327 19.9745 5.7557 20.0705 6.1797 20.0705ZM10.8147 20.0705H11.6207C12.0587 20.0705 12.1677 19.9745 12.1677 19.5505V18.7445C12.1677 18.3205 12.0587 18.2105 11.6207 18.2105H10.8147C10.3907 18.2105 10.2677 18.3205 10.2677 18.7445V19.5505C10.2677 19.9745 10.3907 20.0705 10.8147 20.0705ZM15.4497 20.0705H16.2557C16.6937 20.0705 16.8027 19.9745 16.8027 19.5505V18.7445C16.8027 18.3205 16.6937 18.2105 16.2557 18.2105H15.4497C15.0257 18.2105 14.9027 18.3205 14.9027 18.7445V19.5505C14.9027 19.9745 15.0257 20.0705 15.4497 20.0705Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.482421875 28.013671875"
          className={className}
        >
          <path
            d="              M4.4847 25.5253H18.7307C18.2387 24.7053 17.8827 23.8023 17.7187 22.8453H4.4437C3.3087 22.8453 2.6797 22.2443 2.6797 21.0543V8.4223C2.6797 7.2183 3.3087 6.6313 4.4437 6.6313H23.3107C24.4587 6.6313 25.1017 7.2183 25.1017 8.4223V12.1133C25.5527 12.0453 26.0037 12.0043 26.4547 12.0043C26.8927 12.0043 27.3437 12.0453 27.7817 12.1133V4.4433C27.7817 1.5173 26.2497 0.0003 23.2967 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM11.2517 11.3753H12.0587C12.5367 11.3753 12.7017 11.2243 12.7017 10.7323V9.9393C12.7017 9.4473 12.5367 9.2973 12.0587 9.2973H11.2517C10.7597 9.2973 10.5957 9.4473 10.5957 9.9393V10.7323C10.5957 11.2243 10.7597 11.3753 11.2517 11.3753ZM15.7227 11.3753H16.5297C17.0077 11.3753 17.1717 11.2243 17.1717 10.7323V9.9393C17.1717 9.4473 17.0077 9.2973 16.5297 9.2973H15.7227C15.2307 9.2973 15.0667 9.4473 15.0667 9.9393V10.7323C15.0667 11.2243 15.2307 11.3753 15.7227 11.3753ZM20.1937 11.3753H20.9997C21.4927 11.3753 21.6567 11.2243 21.6567 10.7323V9.9393C21.6567 9.4473 21.4927 9.2973 20.9997 9.2973H20.1937C19.7017 9.2973 19.5367 9.4473 19.5367 9.9393V10.7323C19.5367 11.2243 19.7017 11.3753 20.1937 11.3753ZM6.7817 15.7773H7.5747C8.0667 15.7773 8.2307 15.6273 8.2307 15.1343V14.3423C8.2307 13.8493 8.0667 13.6993 7.5747 13.6993H6.7817C6.2887 13.6993 6.1247 13.8493 6.1247 14.3423V15.1343C6.1247 15.6273 6.2887 15.7773 6.7817 15.7773ZM11.2517 15.7773H12.0587C12.5367 15.7773 12.7017 15.6273 12.7017 15.1343V14.3423C12.7017 13.8493 12.5367 13.6993 12.0587 13.6993H11.2517C10.7597 13.6993 10.5957 13.8493 10.5957 14.3423V15.1343C10.5957 15.6273 10.7597 15.7773 11.2517 15.7773ZM15.7227 15.7773H16.5297C17.0077 15.7773 17.1717 15.6273 17.1717 15.1343V14.3423C17.1717 13.8493 17.0077 13.6993 16.5297 13.6993H15.7227C15.2307 13.6993 15.0667 13.8493 15.0667 14.3423V15.1343C15.0667 15.6273 15.2307 15.7773 15.7227 15.7773ZM26.4547 28.0133C30.2697 28.0133 33.4827 24.8143 33.4827 20.9723C33.4827 17.1173 30.3107 13.9453 26.4547 13.9453C22.5997 13.9453 19.4137 17.1173 19.4137 20.9723C19.4137 24.8423 22.5997 28.0133 26.4547 28.0133ZM25.6487 24.7873C25.3887 24.7873 25.0747 24.6913 24.8827 24.4723L22.5857 21.9703C22.4087 21.7653 22.3127 21.5063 22.3127 21.2593C22.3127 20.6853 22.7637 20.2893 23.2837 20.2893C23.5977 20.2893 23.8437 20.4123 24.0077 20.6033L25.5937 22.3403L28.8207 17.8693C29.0117 17.6093 29.2987 17.4453 29.6407 17.4453C30.1737 17.4453 30.6247 17.8553 30.6247 18.4023C30.6247 18.5803 30.5567 18.7853 30.4197 18.9763L26.4547 24.4313C26.2907 24.6503 25.9907 24.7873 25.6487 24.7873ZM6.7817 20.1793H7.5747C8.0667 20.1793 8.2307 20.0293 8.2307 19.5373V18.7443C8.2307 18.2523 8.0667 18.1013 7.5747 18.1013H6.7817C6.2887 18.1013 6.1247 18.2523 6.1247 18.7443V19.5373C6.1247 20.0293 6.2887 20.1793 6.7817 20.1793ZM11.2517 20.1793H12.0587C12.5367 20.1793 12.7017 20.0293 12.7017 19.5373V18.7443C12.7017 18.2523 12.5367 18.1013 12.0587 18.1013H11.2517C10.7597 18.1013 10.5957 18.2523 10.5957 18.7443V19.5373C10.5957 20.0293 10.7597 20.1793 11.2517 20.1793ZM15.7227 20.1793H16.5297C17.0077 20.1793 17.1717 20.0293 17.1717 19.5373V18.7443C17.1717 18.2523 17.0077 18.1013 16.5297 18.1013H15.7227C15.2307 18.1013 15.0667 18.2523 15.0667 18.7443V19.5373C15.0667 20.0293 15.2307 20.1793 15.7227 20.1793Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.11328125 27.740234375"
          className={className}
        >
          <path
            d="              M4.2927 25.1695H18.5257C18.1287 24.4865 17.8277 23.7485 17.6367 22.9685H4.0877C2.8707 22.9685 2.2017 22.3265 2.2017 21.0545V8.1625C2.2017 6.9045 2.8707 6.2475 4.0877 6.2475H23.1467C24.3637 6.2475 25.0467 6.9045 25.0467 8.1625V12.0445C25.4437 12.0035 25.7987 11.9765 26.1677 11.9765C26.5237 11.9765 26.8927 12.0035 27.2477 12.0445V4.2385C27.2477 1.4215 25.8267 -0.0005 22.9687 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM10.9517 11.1565H11.7577C12.2367 11.1565 12.4007 11.0195 12.4007 10.5405V9.7345C12.4007 9.2555 12.2367 9.1055 11.7577 9.1055H10.9517C10.4727 9.1055 10.3087 9.2555 10.3087 9.7345V10.5405C10.3087 11.0195 10.4727 11.1565 10.9517 11.1565ZM15.5037 11.1565H16.2967C16.7757 11.1565 16.9397 11.0195 16.9397 10.5405V9.7345C16.9397 9.2555 16.7757 9.1055 16.2967 9.1055H15.5037C15.0117 9.1055 14.8617 9.2555 14.8617 9.7345V10.5405C14.8617 11.0195 15.0117 11.1565 15.5037 11.1565ZM20.0427 11.1565H20.8497C21.3277 11.1565 21.4787 11.0195 21.4787 10.5405V9.7345C21.4787 9.2555 21.3277 9.1055 20.8497 9.1055H20.0427C19.5647 9.1055 19.4007 9.2555 19.4007 9.7345V10.5405C19.4007 11.0195 19.5647 11.1565 20.0427 11.1565ZM6.4117 15.6265H7.2187C7.6977 15.6265 7.8477 15.4905 7.8477 15.0115V14.2055C7.8477 13.7265 7.6977 13.5895 7.2187 13.5895H6.4117C5.9337 13.5895 5.7697 13.7265 5.7697 14.2055V15.0115C5.7697 15.4905 5.9337 15.6265 6.4117 15.6265ZM10.9517 15.6265H11.7577C12.2367 15.6265 12.4007 15.4905 12.4007 15.0115V14.2055C12.4007 13.7265 12.2367 13.5895 11.7577 13.5895H10.9517C10.4727 13.5895 10.3087 13.7265 10.3087 14.2055V15.0115C10.3087 15.4905 10.4727 15.6265 10.9517 15.6265ZM15.5037 15.6265H16.2967C16.7757 15.6265 16.9397 15.4905 16.9397 15.0115V14.2055C16.9397 13.7265 16.7757 13.5895 16.2967 13.5895H15.5037C15.0117 13.5895 14.8617 13.7265 14.8617 14.2055V15.0115C14.8617 15.4905 15.0117 15.6265 15.5037 15.6265ZM26.1677 27.7405C29.9277 27.7405 33.1137 24.5955 33.1137 20.7945C33.1137 16.9805 29.9687 13.8495 26.1677 13.8495C22.3537 13.8495 19.2227 16.9945 19.2227 20.7945C19.2227 24.6235 22.3537 27.7405 26.1677 27.7405ZM25.3337 24.5405C25.1017 24.5405 24.8277 24.4455 24.6507 24.2535L22.3397 21.7105C22.1757 21.5335 22.1077 21.2875 22.1077 21.0955C22.1077 20.6035 22.4907 20.2345 22.9687 20.2345C23.2557 20.2345 23.4747 20.3715 23.6117 20.5215L25.2927 22.3395L28.6287 17.7185C28.7927 17.4995 29.0387 17.3355 29.3537 17.3355C29.8047 17.3355 30.2147 17.7055 30.2147 18.1835C30.2147 18.3335 30.1467 18.5255 30.0237 18.7035L26.0587 24.2125C25.9087 24.4175 25.6347 24.5405 25.3337 24.5405ZM6.4117 20.1115H7.2187C7.6977 20.1115 7.8477 19.9605 7.8477 19.4825V18.6755C7.8477 18.1975 7.6977 18.0605 7.2187 18.0605H6.4117C5.9337 18.0605 5.7697 18.1975 5.7697 18.6755V19.4825C5.7697 19.9605 5.9337 20.1115 6.4117 20.1115ZM10.9517 20.1115H11.7577C12.2367 20.1115 12.4007 19.9605 12.4007 19.4825V18.6755C12.4007 18.1975 12.2367 18.0605 11.7577 18.0605H10.9517C10.4727 18.0605 10.3087 18.1975 10.3087 18.6755V19.4825C10.3087 19.9605 10.4727 20.1115 10.9517 20.1115ZM15.5037 20.1115H16.2967C16.7757 20.1115 16.9397 19.9605 16.9397 19.4825V18.6755C16.9397 18.1975 16.7757 18.0605 16.2967 18.0605H15.5037C15.0117 18.0605 14.8617 18.1975 14.8617 18.6755V19.4825C14.8617 19.9605 15.0117 20.1115 15.5037 20.1115Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.76953125 28.21875"
          className={className}
        >
          <path
            d="              M4.6347 25.785H18.8947C18.3207 24.883 17.9237 23.844 17.7737 22.75H4.7307C3.6367 22.75 3.0487 22.203 3.0487 21.041V8.627C3.0487 7.479 3.6367 6.932 4.7307 6.932H23.4337C24.5277 6.932 25.1287 7.479 25.1287 8.627V12.168C25.6487 12.072 26.1547 12.018 26.6597 12.018C27.1797 12.018 27.6857 12.072 28.1777 12.168V4.594C28.1777 1.6 26.5777 0 23.5427 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM11.4707 11.539H12.2777C12.7697 11.539 12.9477 11.389 12.9477 10.896V10.09C12.9477 9.598 12.7697 9.447 12.2777 9.447H11.4707C10.9787 9.447 10.8147 9.598 10.8147 10.09V10.896C10.8147 11.389 10.9787 11.539 11.4707 11.539ZM15.9007 11.539H16.6937C17.1857 11.539 17.3637 11.389 17.3637 10.896V10.09C17.3637 9.598 17.1857 9.447 16.6937 9.447H15.9007C15.3947 9.447 15.2307 9.598 15.2307 10.09V10.896C15.2307 11.389 15.3947 11.539 15.9007 11.539ZM20.3167 11.539H21.1097C21.6157 11.539 21.7797 11.389 21.7797 10.896V10.09C21.7797 9.598 21.6157 9.447 21.1097 9.447H20.3167C19.8107 9.447 19.6467 9.598 19.6467 10.09V10.896C19.6467 11.389 19.8107 11.539 20.3167 11.539ZM7.0547 15.887H7.8617C8.3537 15.887 8.5317 15.736 8.5317 15.244V14.437C8.5317 13.945 8.3537 13.795 7.8617 13.795H7.0547C6.5627 13.795 6.3987 13.945 6.3987 14.437V15.244C6.3987 15.736 6.5627 15.887 7.0547 15.887ZM11.4707 15.887H12.2777C12.7697 15.887 12.9477 15.736 12.9477 15.244V14.437C12.9477 13.945 12.7697 13.795 12.2777 13.795H11.4707C10.9787 13.795 10.8147 13.945 10.8147 14.437V15.244C10.8147 15.736 10.9787 15.887 11.4707 15.887ZM15.9007 15.887H16.6937C17.1857 15.887 17.3637 15.736 17.3637 15.244V14.437C17.3637 13.945 17.1857 13.795 16.6937 13.795H15.9007C15.3947 13.795 15.2307 13.945 15.2307 14.437V15.244C15.2307 15.736 15.3947 15.887 15.9007 15.887ZM26.6737 28.219C30.5297 28.219 33.7697 24.992 33.7697 21.109C33.7697 17.227 30.5707 14.014 26.6737 14.014C22.7777 14.014 19.5647 17.227 19.5647 21.109C19.5647 25.006 22.7777 28.219 26.6737 28.219ZM25.8947 24.979C25.6077 24.979 25.2657 24.883 25.0467 24.637L22.7777 22.162C22.5857 21.943 22.4627 21.656 22.4627 21.396C22.4627 20.74 22.9687 20.33 23.5297 20.33C23.8707 20.33 24.1307 20.453 24.3227 20.672L25.8267 22.34L28.9707 17.992C29.1757 17.705 29.4907 17.527 29.8597 17.527C30.4477 17.527 30.9257 17.992 30.9257 18.58C30.9257 18.758 30.8577 18.99 30.7207 19.182L26.7697 24.582C26.5917 24.828 26.2497 24.979 25.8947 24.979ZM7.0547 20.234H7.8617C8.3537 20.234 8.5317 20.084 8.5317 19.592V18.785C8.5317 18.293 8.3537 18.143 7.8617 18.143H7.0547C6.5627 18.143 6.3987 18.293 6.3987 18.785V19.592C6.3987 20.084 6.5627 20.234 7.0547 20.234ZM11.4707 20.234H12.2777C12.7697 20.234 12.9477 20.084 12.9477 19.592V18.785C12.9477 18.293 12.7697 18.143 12.2777 18.143H11.4707C10.9787 18.143 10.8147 18.293 10.8147 18.785V19.592C10.8147 20.084 10.9787 20.234 11.4707 20.234ZM15.9007 20.234H16.6937C17.1857 20.234 17.3637 20.084 17.3637 19.592V18.785C17.3637 18.293 17.1857 18.143 16.6937 18.143H15.9007C15.3947 18.143 15.2307 18.293 15.2307 18.785V19.592C15.2307 20.084 15.3947 20.234 15.9007 20.234Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.962890625 26.892578125"
          className={className}
        >
          <path
            d="              M3.6917 24.1994H19.5777C19.4007 23.8844 19.2367 23.5434 19.1137 23.1874H3.6777C1.9277 23.1874 1.0117 22.2854 1.0117 20.5214V8.5314C1.0117 6.7674 1.9277 5.8654 3.6777 5.8654H23.1737C24.8557 5.8654 25.8267 6.7674 25.8267 8.5314V12.5094C26.0857 12.4824 26.2227 12.4824 26.4007 12.4824C26.5367 12.4824 26.7017 12.4824 26.8377 12.4964V3.6774C26.8377 1.2984 25.5797 0.0004 23.1597 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM10.6367 10.6504H11.4437C11.8127 10.6504 11.8677 10.5824 11.8677 10.2404V9.4334C11.8677 9.0914 11.8127 9.0234 11.4437 9.0234H10.6367C10.2817 9.0234 10.2127 9.0914 10.2127 9.4334V10.2404C10.2127 10.5824 10.2817 10.6504 10.6367 10.6504ZM15.3947 10.6504H16.2017C16.5707 10.6504 16.6247 10.5824 16.6247 10.2404V9.4334C16.6247 9.0914 16.5707 9.0234 16.2017 9.0234H15.3947C15.0387 9.0234 14.9707 9.0914 14.9707 9.4334V10.2404C14.9707 10.5824 15.0387 10.6504 15.3947 10.6504ZM20.1527 10.6504H20.9587C21.3277 10.6504 21.3827 10.5824 21.3827 10.2404V9.4334C21.3827 9.0914 21.3277 9.0234 20.9587 9.0234H20.1527C19.7967 9.0234 19.7287 9.0914 19.7287 9.4334V10.2404C19.7287 10.5824 19.7967 10.6504 20.1527 10.6504ZM26.3597 26.8924C29.9687 26.8924 32.9627 23.9124 32.9627 20.2894C32.9627 16.6664 29.9827 13.6854 26.3597 13.6854C22.7497 13.6854 19.7557 16.6794 19.7557 20.2894C19.7557 23.9254 22.7497 26.8924 26.3597 26.8924ZM5.8787 15.3394H6.6857C7.0547 15.3394 7.1097 15.2714 7.1097 14.9294V14.1234C7.1097 13.7814 7.0547 13.7134 6.6857 13.7134H5.8787C5.5237 13.7134 5.4547 13.7814 5.4547 14.1234V14.9294C5.4547 15.2714 5.5237 15.3394 5.8787 15.3394ZM10.6367 15.3394H11.4437C11.8127 15.3394 11.8677 15.2714 11.8677 14.9294V14.1234C11.8677 13.7814 11.8127 13.7134 11.4437 13.7134H10.6367C10.2817 13.7134 10.2127 13.7814 10.2127 14.1234V14.9294C10.2127 15.2714 10.2817 15.3394 10.6367 15.3394ZM15.3947 15.3394H16.2017C16.5707 15.3394 16.6247 15.2714 16.6247 14.9294V14.1234C16.6247 13.7814 16.5707 13.7134 16.2017 13.7134H15.3947C15.0387 13.7134 14.9707 13.7814 14.9707 14.1234V14.9294C14.9707 15.2714 15.0387 15.3394 15.3947 15.3394ZM25.5117 23.6664C25.3337 23.6664 25.1567 23.5974 25.0197 23.4474L22.8187 21.0414C22.7087 20.9044 22.6547 20.7404 22.6547 20.5894C22.6547 20.2484 22.9137 20.0024 23.2427 20.0024C23.4747 20.0024 23.6117 20.1384 23.7207 20.2484L25.4707 22.1214L28.8067 17.5414C28.9157 17.3774 29.0937 17.2814 29.2987 17.2814C29.6137 17.2814 29.8867 17.5274 29.8867 17.8554C29.8867 17.9924 29.8317 18.1154 29.7497 18.2384L25.9907 23.4204C25.8807 23.5704 25.7167 23.6664 25.5117 23.6664ZM5.8787 20.0294H6.6857C7.0547 20.0294 7.1097 19.9614 7.1097 19.6194V18.8124C7.1097 18.4704 7.0547 18.4024 6.6857 18.4024H5.8787C5.5237 18.4024 5.4547 18.4704 5.4547 18.8124V19.6194C5.4547 19.9614 5.5237 20.0294 5.8787 20.0294ZM10.6367 20.0294H11.4437C11.8127 20.0294 11.8677 19.9614 11.8677 19.6194V18.8124C11.8677 18.4704 11.8127 18.4024 11.4437 18.4024H10.6367C10.2817 18.4024 10.2127 18.4704 10.2127 18.8124V19.6194C10.2127 19.9614 10.2817 20.0294 10.6367 20.0294ZM15.3947 20.0294H16.2017C16.5707 20.0294 16.6247 19.9614 16.6247 19.6194V18.8124C16.6247 18.4704 16.5707 18.4024 16.2017 18.4024H15.3947C15.0387 18.4024 14.9707 18.4704 14.9707 18.8124V19.6194C14.9707 19.9614 15.0387 20.0294 15.3947 20.0294Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32.921875 26.646484375"
          className={className}
        >
          <path
            d="              M3.5137 23.912H19.8787C19.7697 23.693 19.6467 23.475 19.5507 23.242H3.5547C1.6547 23.242 0.6697 22.258 0.6697 20.371V8.627C0.6697 6.727 1.6547 5.742 3.5547 5.742H23.1737C25.0057 5.742 26.0587 6.727 26.0587 8.627V12.647C26.2777 12.619 26.3457 12.619 26.4547 12.619C26.5367 12.619 26.6467 12.619 26.7287 12.619V3.514C26.7287 1.244 25.5117 0 23.2147 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM10.5547 10.486H11.3477C11.6757 10.486 11.7167 10.459 11.7167 10.145V9.338C11.7167 9.037 11.6757 8.996 11.3477 8.996H10.5547C10.2267 8.996 10.1857 9.037 10.1857 9.338V10.145C10.1857 10.459 10.2267 10.486 10.5547 10.486ZM15.3677 10.486H16.1737C16.5017 10.486 16.5297 10.459 16.5297 10.145V9.338C16.5297 9.037 16.5017 8.996 16.1737 8.996H15.3677C15.0387 8.996 15.0117 9.037 15.0117 9.338V10.145C15.0117 10.459 15.0387 10.486 15.3677 10.486ZM20.1937 10.486H20.9997C21.3277 10.486 21.3557 10.459 21.3557 10.145V9.338C21.3557 9.037 21.3277 8.996 20.9997 8.996H20.1937C19.8657 8.996 19.8377 9.037 19.8377 9.338V10.145C19.8377 10.459 19.8657 10.486 20.1937 10.486ZM26.4137 26.647C29.9687 26.647 32.9217 23.707 32.9217 20.139C32.9217 16.57 29.9957 13.645 26.4137 13.645C22.8597 13.645 19.9197 16.584 19.9197 20.139C19.9197 23.707 22.8597 26.647 26.4137 26.647ZM5.7287 15.244H6.5347C6.8637 15.244 6.8907 15.203 6.8907 14.902V14.096C6.8907 13.781 6.8637 13.754 6.5347 13.754H5.7287C5.4007 13.754 5.3727 13.781 5.3727 14.096V14.902C5.3727 15.203 5.4007 15.244 5.7287 15.244ZM10.5547 15.244H11.3477C11.6757 15.244 11.7167 15.203 11.7167 14.902V14.096C11.7167 13.781 11.6757 13.754 11.3477 13.754H10.5547C10.2267 13.754 10.1857 13.781 10.1857 14.096V14.902C10.1857 15.203 10.2267 15.244 10.5547 15.244ZM15.3677 15.244H16.1737C16.5017 15.244 16.5297 15.203 16.5297 14.902V14.096C16.5297 13.781 16.5017 13.754 16.1737 13.754H15.3677C15.0387 13.754 15.0117 13.781 15.0117 14.096V14.902C15.0117 15.203 15.0387 15.244 15.3677 15.244ZM25.5527 23.406C25.4027 23.406 25.2517 23.338 25.1287 23.201L22.9687 20.836C22.8597 20.713 22.8047 20.576 22.8047 20.439C22.8047 20.139 23.0367 19.934 23.3247 19.934C23.5297 19.934 23.6527 20.057 23.7617 20.166L25.5257 22.053L28.8477 17.473C28.9567 17.336 29.1077 17.254 29.2847 17.254C29.5587 17.254 29.7907 17.473 29.7907 17.746C29.7907 17.897 29.7367 17.992 29.6677 18.102L25.9627 23.188C25.8677 23.324 25.7437 23.406 25.5527 23.406ZM5.7287 19.988H6.5347C6.8637 19.988 6.8907 19.961 6.8907 19.647V18.84C6.8907 18.539 6.8637 18.498 6.5347 18.498H5.7287C5.4007 18.498 5.3727 18.539 5.3727 18.84V19.647C5.3727 19.961 5.4007 19.988 5.7287 19.988ZM10.5547 19.988H11.3477C11.6757 19.988 11.7167 19.961 11.7167 19.647V18.84C11.7167 18.539 11.6757 18.498 11.3477 18.498H10.5547C10.2267 18.498 10.1857 18.539 10.1857 18.84V19.647C10.1857 19.961 10.2267 19.988 10.5547 19.988ZM15.3677 19.988H16.1737C16.5017 19.988 16.5297 19.961 16.5297 19.647V18.84C16.5297 18.539 16.5017 18.498 16.1737 18.498H15.3677C15.0387 18.498 15.0117 18.539 15.0117 18.84V19.647C15.0117 19.961 15.0387 19.988 15.3677 19.988Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}