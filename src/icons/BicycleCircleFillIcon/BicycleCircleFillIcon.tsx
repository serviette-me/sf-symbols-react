import { IconProps } from "../../types"

export default function BicycleCircleFillIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.873046875"
          className={className}
        >
          <path
            d="              M14.9297 29.8734C23.1597 29.8734 29.8727 23.1604 29.8727 14.9294C29.8727 6.7124 23.1597 0.0004 14.9297 0.0004C6.7127 0.0004 -0.0003 6.7124 -0.0003 14.9294C-0.0003 23.1604 6.7127 29.8734 14.9297 29.8734ZM5.4687 16.5844C5.4687 14.4924 7.1637 12.8104 9.2557 12.8104C9.8987 12.8104 10.5277 12.9744 11.0327 13.2614L11.9077 12.3044L10.9647 10.5954H10.3227C9.9117 10.5954 9.5837 10.2674 9.5837 9.8574C9.5837 9.4474 9.9117 9.1194 10.3227 9.1194H12.7967C13.1937 9.1194 13.5347 9.4474 13.5347 9.8574C13.5347 10.2404 13.1657 10.5954 12.7967 10.5954H12.6467L13.3297 11.7984L17.7187 11.2384L17.1037 9.7614H15.8597C15.4217 9.7614 15.0937 9.4334 15.0937 8.9964C15.0937 8.5854 15.4357 8.2574 15.8597 8.2574H17.4047C17.8687 8.2574 18.1287 8.4354 18.2927 8.8184L19.9607 12.8654C20.1797 12.8244 20.3987 12.8104 20.6167 12.8104C22.7087 12.8104 24.4047 14.4924 24.4047 16.5844C24.4047 18.6754 22.7087 20.3574 20.6167 20.3574C18.5257 20.3574 16.8437 18.6754 16.8437 16.5844C16.8437 15.2304 17.5547 14.0544 18.6077 13.3844L18.3747 12.8514L15.3807 16.3374C15.0387 16.7204 14.7657 16.8844 14.2187 16.8844H13.0157C12.8657 18.8264 11.2387 20.3574 9.2557 20.3574C7.1637 20.3574 5.4687 18.6754 5.4687 16.5844ZM14.0957 13.1664L14.9297 14.6564L16.6657 12.6464ZM12.2367 14.2594C12.5097 14.6014 12.7287 15.0254 12.8657 15.4494H13.6577L12.7147 13.7404ZM6.9727 16.5704C6.9727 17.8284 7.9847 18.8394 9.2557 18.8394C10.4997 18.8394 11.5117 17.8284 11.5117 16.5704C11.5117 16.1324 11.3887 15.7224 11.1697 15.3674L10.2817 16.3244C10.2947 16.3924 10.2947 16.4744 10.2947 16.5434C10.2947 17.1304 9.8297 17.5954 9.2557 17.5954C8.6677 17.5954 8.2027 17.1304 8.2027 16.5434C8.2027 16.0374 8.5587 15.6134 9.0367 15.5174L10.0077 14.4234C9.7887 14.3284 9.5157 14.2874 9.2557 14.2874C7.9847 14.2874 6.9727 15.2984 6.9727 16.5704ZM18.3617 16.5704C18.3617 17.8284 19.3727 18.8394 20.6167 18.8394C21.9027 18.8394 22.9137 17.8284 22.9137 16.5704C22.9137 15.2984 21.9027 14.2874 20.6167 14.2874C20.5897 14.2874 20.5757 14.2874 20.5487 14.2874L21.0817 15.5994C21.4377 15.7774 21.6837 16.1194 21.6837 16.5434C21.6837 17.1304 21.2047 17.5954 20.6167 17.5954C20.0427 17.5954 19.5777 17.1304 19.5777 16.5434C19.5777 16.3784 19.6187 16.2284 19.6877 16.0784L19.1677 14.8204C18.6897 15.2304 18.3617 15.8594 18.3617 16.5704Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.875"
          className={className}
        >
          <path
            d="              M14.4377 28.8753C22.3667 28.8753 28.8747 22.3533 28.8747 14.4373C28.8747 6.5083 22.3537 0.0003 14.4377 0.0003C6.5077 0.0003 -0.0003 6.5083 -0.0003 14.4373C-0.0003 22.3533 6.5217 28.8753 14.4377 28.8753ZM4.5937 16.1052C4.5937 13.9723 6.3297 12.2503 8.4627 12.2503C9.1877 12.2503 9.8707 12.4413 10.4457 12.7973L11.3887 11.7303L10.4177 9.9803H9.7067C9.3377 9.9803 9.0507 9.6933 9.0507 9.3383C9.0507 8.9683 9.3377 8.6813 9.7067 8.6813H12.2637C12.6327 8.6813 12.9337 8.9683 12.9337 9.3383C12.9337 9.6793 12.6057 9.9803 12.2637 9.9803H11.9077L12.6597 11.3343L17.5407 10.7053L16.8167 8.9003H15.3947C15.0117 8.9003 14.7247 8.5993 14.7247 8.2303C14.7247 7.8612 15.0257 7.5742 15.3947 7.5742H17.0487C17.4727 7.5742 17.7187 7.7243 17.8687 8.0933L19.6057 12.3323C19.8657 12.2773 20.1527 12.2503 20.4257 12.2503C22.5727 12.2503 24.3087 13.9723 24.3087 16.1052C24.3087 18.2523 22.5727 19.9742 20.4257 19.9742C18.2927 19.9742 16.5567 18.2523 16.5567 16.1052C16.5567 14.6973 17.3087 13.4803 18.4157 12.8103L18.1157 12.0993L14.8337 15.9273C14.5057 16.2972 14.2187 16.4333 13.6717 16.4333H12.3187C12.1547 18.4293 10.4867 19.9742 8.4627 19.9742C6.3297 19.9742 4.5937 18.2523 4.5937 16.1052ZM13.3437 12.5513L14.4237 14.4653L16.5837 11.9633ZM11.4847 13.6853C11.8257 14.1093 12.0857 14.6293 12.2227 15.1763H13.3167L12.1137 13.0023ZM5.9197 16.0923C5.9197 17.5133 7.0547 18.6353 8.4767 18.6353C9.8707 18.6353 11.0057 17.5133 11.0057 16.0923C11.0057 15.5583 10.8417 15.0803 10.5687 14.6703L9.4477 15.9003C9.4607 15.9413 9.4607 16.0233 9.4607 16.0923C9.4607 16.6523 9.0237 17.0903 8.4767 17.0903C7.9157 17.0903 7.4647 16.6523 7.4647 16.0923C7.4647 15.5723 7.8617 15.1353 8.4077 15.1073L9.5567 13.8083C9.2287 13.6443 8.8597 13.5493 8.4767 13.5493C7.0547 13.5493 5.9197 14.6833 5.9197 16.0923ZM17.8967 16.0923C17.8967 17.5133 19.0317 18.6353 20.4397 18.6353C21.8477 18.6353 22.9827 17.5133 22.9827 16.0923C22.9827 14.6833 21.8477 13.5493 20.4397 13.5493C20.3297 13.5493 20.2207 13.5623 20.1247 13.5903L20.7537 15.1483C21.1507 15.2853 21.4377 15.6403 21.4377 16.0923C21.4377 16.6523 20.9867 17.0903 20.4397 17.0903C19.8787 17.0903 19.4417 16.6523 19.4417 16.0923C19.4417 15.9273 19.4827 15.7773 19.5507 15.6403L18.9077 14.0683C18.3067 14.5193 17.8967 15.2583 17.8967 16.0923Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.39453125"
          className={className}
        >
          <path
            d="              M14.6977 29.395C22.7777 29.395 29.4077 22.777 29.4077 14.697C29.4077 6.617 22.7777 0 14.6977 0C6.6167 0 -0.0003 6.617 -0.0003 14.697C-0.0003 22.777 6.6167 29.395 14.6977 29.395ZM5.0587 16.352C5.0587 14.246 6.7677 12.537 8.8867 12.537C9.5707 12.537 10.2127 12.728 10.7597 13.043L11.6617 12.031L10.7047 10.309H10.0347C9.6387 10.309 9.3377 9.994 9.3377 9.611C9.3377 9.215 9.6387 8.914 10.0347 8.914H12.5367C12.9197 8.914 13.2477 9.215 13.2477 9.611C13.2477 9.98 12.9067 10.309 12.5367 10.309H12.3047L13.0157 11.58L17.6367 10.992L16.9667 9.352H15.6407C15.2307 9.352 14.9157 9.037 14.9157 8.641C14.9157 8.244 15.2437 7.943 15.6407 7.943H17.2407C17.6917 7.943 17.9377 8.094 18.0877 8.477L19.7967 12.619C20.0297 12.564 20.2757 12.537 20.5347 12.537C22.6407 12.537 24.3637 14.246 24.3637 16.352C24.3637 18.471 22.6407 20.18 20.5347 20.18C18.4157 20.18 16.7067 18.471 16.7067 16.352C16.7067 14.984 17.4317 13.781 18.5117 13.111L18.2517 12.496L15.1207 16.146C14.7797 16.516 14.5057 16.68 13.9587 16.68H12.6877C12.5367 18.635 10.8827 20.18 8.8867 20.18C6.7677 20.18 5.0587 18.471 5.0587 16.352ZM13.7407 12.879L14.6837 14.561L16.6247 12.332ZM11.8807 13.986C12.1957 14.369 12.4277 14.834 12.5647 15.326H13.4937L12.4277 13.398ZM6.4807 16.338C6.4807 17.678 7.5467 18.744 8.8867 18.744C10.2127 18.744 11.2797 17.678 11.2797 16.338C11.2797 15.859 11.1287 15.422 10.8827 15.039L9.8847 16.119C9.8987 16.174 9.8987 16.27 9.8987 16.324C9.8987 16.898 9.4477 17.35 8.8867 17.35C8.3127 17.35 7.8617 16.898 7.8617 16.324C7.8617 15.818 8.2307 15.395 8.7497 15.326L9.7887 14.137C9.5297 14.014 9.2147 13.945 8.8867 13.945C7.5467 13.945 6.4807 15.012 6.4807 16.338ZM18.1427 16.338C18.1427 17.678 19.2087 18.744 20.5347 18.744C21.8747 18.744 22.9417 17.678 22.9417 16.338C22.9417 15.012 21.8747 13.945 20.5347 13.945C20.4667 13.945 20.4117 13.945 20.3437 13.959L20.9317 15.395C21.3007 15.545 21.5607 15.9 21.5607 16.324C21.5607 16.898 21.1097 17.35 20.5347 17.35C19.9747 17.35 19.5097 16.898 19.5097 16.324C19.5097 16.16 19.5507 16.01 19.6187 15.873L19.0447 14.465C18.4977 14.889 18.1427 15.586 18.1427 16.338Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.42578125 27.42578125"
          className={className}
        >
          <path
            d="              M13.7127 27.4253C21.2187 27.4253 27.4257 21.2323 27.4257 13.7133C27.4257 6.2073 21.2187 0.0003 13.6987 0.0003C6.1937 0.0003 -0.0003 6.2073 -0.0003 13.7133C-0.0003 21.2323 6.2067 27.4253 13.7127 27.4253ZM3.6097 15.3813C3.6097 13.2203 5.3597 11.4843 7.5197 11.4843C8.3257 11.4843 9.0777 11.7303 9.7067 12.1543L10.7047 10.9923L9.6797 9.1603H8.7777C8.5037 9.1603 8.2847 8.9413 8.2847 8.6813C8.2847 8.3813 8.5037 8.1753 8.7777 8.1753H11.3747C11.6617 8.1753 11.8807 8.3943 11.8807 8.6813C11.8807 8.9413 11.6487 9.1603 11.3747 9.1603H10.8147L11.6897 10.7323L17.1987 10.0353L16.2967 7.7523H14.6697C14.3827 7.7523 14.1637 7.5193 14.1637 7.2593C14.1637 6.9723 14.3827 6.7673 14.6697 6.7673H16.4337C16.7757 6.7673 16.9807 6.8773 17.1037 7.1913L18.8947 11.6213C19.2087 11.5253 19.5367 11.4843 19.8927 11.4843C22.0527 11.4843 23.7887 13.2203 23.7887 15.3813C23.7887 17.5413 22.0527 19.2913 19.8927 19.2913C17.7327 19.2913 15.9827 17.5413 15.9827 15.3813C15.9827 13.9183 16.8027 12.6463 17.9787 11.9903L17.6367 11.1293L14.0277 15.3123C13.7267 15.6543 13.4667 15.7633 12.9067 15.7633H11.4027C11.2107 17.7463 9.5427 19.2913 7.5197 19.2913C5.3597 19.2913 3.6097 17.5413 3.6097 15.3813ZM12.2087 11.6623L13.6717 14.2733L16.5017 10.9923ZM10.4727 12.8383C10.9377 13.3713 11.2657 14.0543 11.3617 14.8063H12.8657L11.2517 11.9493ZM4.6207 15.3673C4.6207 16.9943 5.9197 18.2793 7.5327 18.2793C9.1327 18.2793 10.4317 16.9943 10.4317 15.3673C10.4317 14.6833 10.1987 14.0683 9.8027 13.5623L8.3807 15.1893C8.3807 15.2303 8.3947 15.3123 8.3947 15.3813C8.3947 15.9003 8.0117 16.2833 7.5197 16.2833C7.0137 16.2833 6.6167 15.9003 6.6167 15.3813C6.6167 14.8613 7.0687 14.4373 7.6567 14.5193L9.0507 12.8923C8.6137 12.6323 8.0937 12.4683 7.5327 12.4683C5.9067 12.4683 4.6207 13.7543 4.6207 15.3673ZM16.9937 15.3673C16.9937 16.9943 18.2927 18.2793 19.9067 18.2793C21.5057 18.2793 22.8047 16.9943 22.8047 15.3673C22.8047 13.7673 21.5057 12.4683 19.9067 12.4683C19.6877 12.4683 19.4687 12.4963 19.2637 12.5503L20.0567 14.5063C20.4667 14.5743 20.7947 14.9433 20.7947 15.3813C20.7947 15.9003 20.3987 16.2833 19.9067 16.2833C19.4007 16.2833 19.0037 15.9003 19.0037 15.3813C19.0037 15.2033 19.0727 15.0523 19.1547 14.9293L18.3477 12.9203C17.5407 13.4253 16.9937 14.3283 16.9937 15.3673Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.24609375 28.24609375"
          className={className}
        >
          <path
            d="              M14.1227 28.2465C21.8477 28.2465 28.2457 21.8615 28.2457 14.1235C28.2457 6.3985 21.8477 0.0005 14.1097 0.0005C6.3847 0.0005 -0.0003 6.3985 -0.0003 14.1235C-0.0003 21.8615 6.3987 28.2465 14.1227 28.2465ZM4.0327 15.8185C4.0327 13.6445 5.7967 11.8945 7.9707 11.8945C8.7367 11.8945 9.4607 12.1265 10.0757 12.5095L11.0607 11.3755L10.0757 9.6115H9.2967C8.9687 9.6115 8.7087 9.3375 8.7087 9.0235C8.7087 8.6675 8.9687 8.4085 9.2967 8.4085H11.9217C12.2637 8.4085 12.5507 8.6675 12.5507 9.0235C12.5507 9.3375 12.2497 9.6115 11.9217 9.6115H11.4437L12.2497 11.0465L17.4317 10.3765L16.6247 8.3535H15.1077C14.7517 8.3535 14.4917 8.0805 14.4917 7.7515C14.4917 7.4105 14.7657 7.1505 15.1077 7.1505H16.8167C17.2267 7.1505 17.4457 7.2735 17.5957 7.6425L19.3867 12.0175C19.6737 11.9355 19.9887 11.8945 20.3027 11.8945C22.4767 11.8945 24.2407 13.6445 24.2407 15.8185C24.2407 17.9925 22.4767 19.7555 20.3027 19.7555C18.1287 19.7555 16.3787 17.9925 16.3787 15.8185C16.3787 14.3825 17.1447 13.1385 18.2927 12.4555L17.9507 11.6345L14.4787 15.6815C14.1637 16.0375 13.8767 16.1735 13.3167 16.1735H11.8807C11.7027 18.1835 10.0217 19.7555 7.9707 19.7555C5.7967 19.7555 4.0327 17.9925 4.0327 15.8185ZM12.8657 12.1675L14.0957 14.3555L16.5297 11.5395ZM11.0057 13.3305C11.4027 13.8085 11.6897 14.3825 11.8127 15.0115H13.0977L11.7307 12.5505ZM5.2497 15.8045C5.2497 17.3225 6.4667 18.5255 7.9847 18.5255C9.4747 18.5255 10.6777 17.3225 10.6777 15.8045C10.6777 15.2165 10.4997 14.6695 10.1857 14.2325L8.9137 15.6265C8.9137 15.6545 8.9277 15.7505 8.9277 15.8045C8.9277 16.3655 8.5037 16.7755 7.9707 16.7755C7.4237 16.7755 6.9997 16.3655 6.9997 15.8045C6.9997 15.2985 7.4097 14.8475 8.0117 14.8615L9.2557 13.4255C8.8867 13.2205 8.4487 13.0975 7.9847 13.0975C6.4667 13.0975 5.2497 14.3005 5.2497 15.8045ZM17.6097 15.8045C17.6097 17.3225 18.8127 18.5255 20.3167 18.5255C21.8207 18.5255 23.0367 17.3225 23.0367 15.8045C23.0367 14.3005 21.8207 13.0975 20.3167 13.0975C20.1527 13.0975 20.0017 13.1115 19.8517 13.1525L20.5487 14.8755C20.9727 14.9845 21.2737 15.3535 21.2737 15.8045C21.2737 16.3655 20.8497 16.7755 20.3167 16.7755C19.7827 16.7755 19.3597 16.3655 19.3597 15.8045C19.3597 15.6405 19.4007 15.5035 19.4687 15.3805L18.7437 13.6035C18.0607 14.0955 17.6097 14.8885 17.6097 15.8045Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 27.890625"
          className={className}
        >
          <path
            d="              M13.9457 27.8907C21.5737 27.8907 27.8907 21.5737 27.8907 13.9457C27.8907 6.3297 21.5607 -0.0003 13.9317 -0.0003C6.3167 -0.0003 -0.0003 6.3297 -0.0003 13.9457C-0.0003 21.5737 6.3297 27.8907 13.9457 27.8907ZM3.7187 15.6547C3.7187 13.4527 5.4957 11.7027 7.6837 11.7027C8.4907 11.7027 9.2287 11.9357 9.8577 12.3457L10.8687 11.1697L9.8847 9.3787H9.0777C8.7637 9.3787 8.5037 9.1327 8.5037 8.8317C8.5037 8.4897 8.7637 8.2437 9.0777 8.2437H11.7307C12.0587 8.2437 12.3317 8.5037 12.3317 8.8317C12.3317 9.1327 12.0447 9.3787 11.7307 9.3787H11.1697L12.0037 10.8827L17.3767 10.1857L16.5157 8.0527H14.9437C14.6017 8.0527 14.3557 7.7797 14.3557 7.4647C14.3557 7.1507 14.6157 6.9047 14.9437 6.9047H16.6797C17.0897 6.9047 17.2947 7.0277 17.4457 7.3687L19.2637 11.8257C19.5647 11.7307 19.9067 11.7027 20.2347 11.7027C22.4217 11.7027 24.1987 13.4527 24.1987 15.6547C24.1987 17.8417 22.4217 19.6187 20.2347 19.6187C18.0467 19.6187 16.2697 17.8417 16.2697 15.6547C16.2697 14.1917 17.0627 12.9337 18.2247 12.2497L17.8557 11.3617L14.2867 15.5317C13.9727 15.8727 13.6857 16.0097 13.1117 16.0097H11.6347C11.4437 18.0327 9.7477 19.6187 7.6837 19.6187C5.4957 19.6187 3.7187 17.8417 3.7187 15.6547ZM12.5917 11.9487L13.9047 14.2867L16.5017 11.2797ZM10.7457 13.1247C11.1567 13.6307 11.4567 14.2457 11.5797 14.9157H12.9747L11.5117 12.2777ZM4.8807 15.6267C4.8807 17.2127 6.1387 18.4437 7.6977 18.4437C9.2417 18.4437 10.4997 17.2127 10.4997 15.6267C10.4997 15.0117 10.2947 14.4377 9.9667 13.9727L8.6137 15.4767C8.6137 15.4897 8.6267 15.5727 8.6267 15.6407C8.6267 16.1877 8.2167 16.5977 7.6977 16.5977C7.1507 16.5977 6.7407 16.1877 6.7407 15.6407C6.7407 15.1207 7.1637 14.6697 7.7927 14.7107L9.0917 13.2067C8.6817 12.9747 8.2027 12.8237 7.6977 12.8237C6.1387 12.8237 4.8807 14.0817 4.8807 15.6267ZM17.4317 15.6267C17.4317 17.2127 18.6897 18.4437 20.2617 18.4437C21.8067 18.4437 23.0647 17.2127 23.0647 15.6267C23.0647 14.0817 21.8067 12.8237 20.2617 12.8237C20.0567 12.8237 19.8787 12.8517 19.7007 12.8927L20.4397 14.7107C20.8637 14.8067 21.1917 15.1757 21.1917 15.6407C21.1917 16.1877 20.7817 16.5977 20.2617 16.5977C19.7147 16.5977 19.3047 16.1877 19.3047 15.6407C19.3047 15.4897 19.3457 15.3397 19.4137 15.2167L18.6487 13.3297C17.9237 13.8357 17.4317 14.6697 17.4317 15.6267Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.533203125"
          className={className}
        >
          <path
            d="              M14.2597 28.5332C22.0797 28.5332 28.5197 22.0802 28.5197 14.2732C28.5197 6.4532 22.0667 0.0002 14.2457 0.0002C6.4397 0.0002 -0.0003 6.4532 -0.0003 14.2732C-0.0003 22.0802 6.4397 28.5332 14.2597 28.5332ZM4.2797 15.9552C4.2797 13.7952 6.0297 12.0582 8.1897 12.0582C8.9417 12.0582 9.6387 12.2632 10.2267 12.6462L11.1977 11.5252L10.2267 9.7752H9.4747C9.1327 9.7752 8.8457 9.5022 8.8457 9.1602C8.8457 8.8042 9.1327 8.5312 9.4747 8.5312H12.0727C12.4277 8.5312 12.7147 8.8042 12.7147 9.1602C12.7147 9.4882 12.4007 9.7752 12.0727 9.7752H11.6487L12.4277 11.1832L17.4867 10.5272L16.7067 8.5992H15.2307C14.8617 8.5992 14.5877 8.3122 14.5877 7.9572C14.5877 7.6152 14.8747 7.3422 15.2307 7.3422H16.9117C17.3357 7.3422 17.5547 7.4782 17.7047 7.8342L19.4827 12.1682C19.7557 12.0862 20.0567 12.0582 20.3577 12.0582C22.5177 12.0582 24.2677 13.7952 24.2677 15.9552C24.2677 18.1152 22.5177 19.8512 20.3577 19.8512C18.1977 19.8512 16.4607 18.1152 16.4607 15.9552C16.4607 14.5332 17.2127 13.2892 18.3337 12.6192L18.0197 11.8402L14.6287 15.7912C14.3147 16.1462 14.0277 16.2972 13.4667 16.2972H12.0727C11.8947 18.2932 10.2267 19.8512 8.1897 19.8512C6.0297 19.8512 4.2797 18.1152 4.2797 15.9552ZM13.0707 12.3462L14.2327 14.4102L16.5567 11.7302ZM11.2107 13.4942C11.5797 13.9452 11.8537 14.4922 11.9907 15.0942H13.1937L11.8947 12.7562ZM5.5367 15.9282C5.5367 17.4042 6.7267 18.5802 8.1897 18.5802C9.6527 18.5802 10.8277 17.4042 10.8277 15.9282C10.8277 15.3672 10.6507 14.8472 10.3497 14.4242L9.1327 15.7502C9.1467 15.7772 9.1597 15.8732 9.1597 15.9282C9.1597 16.4882 8.7227 16.9122 8.1897 16.9122C7.6427 16.9122 7.2047 16.4882 7.2047 15.9282C7.2047 15.4222 7.6017 14.9842 8.1897 14.9712L9.3787 13.6032C9.0367 13.4122 8.6267 13.3032 8.1897 13.3032C6.7267 13.3032 5.5367 14.4782 5.5367 15.9282ZM17.7327 15.9282C17.7327 17.4042 18.9077 18.5802 20.3707 18.5802C21.8337 18.5802 23.0097 17.4042 23.0097 15.9282C23.0097 14.4782 21.8337 13.3032 20.3707 13.3032C20.2347 13.3032 20.0977 13.3162 19.9747 13.3442L20.6447 14.9982C21.0407 15.1212 21.3417 15.4902 21.3417 15.9282C21.3417 16.4882 20.9177 16.9122 20.3707 16.9122C19.8237 16.9122 19.3867 16.4882 19.3867 15.9282C19.3867 15.7772 19.4277 15.6272 19.4957 15.5042L18.8127 13.8082C18.1697 14.2872 17.7327 15.0532 17.7327 15.9282Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.810546875 26.810546875"
          className={className}
        >
          <path
            d="              M13.4117 26.8109C20.7677 26.8109 26.8107 20.7679 26.8107 13.3989C26.8107 6.0429 20.7677 -0.0001 13.3987 -0.0001C6.0427 -0.0001 -0.0003 6.0429 -0.0003 13.3989C-0.0003 20.7679 6.0427 26.8109 13.4117 26.8109ZM3.4727 15.0259C3.4727 12.9059 5.1817 11.2109 7.3007 11.2109C8.1077 11.2109 8.8727 11.4569 9.5017 11.9079L10.4867 10.7459L9.4067 8.8599H8.3807C8.1757 8.8599 7.9977 8.6819 7.9977 8.4629C7.9977 8.2309 8.1757 8.0669 8.3807 8.0669H10.8967C11.1427 8.0669 11.3067 8.2439 11.3067 8.4629C11.3067 8.6819 11.1157 8.8599 10.8967 8.8599H10.3497L11.2657 10.5139L16.9667 9.8299L15.9957 7.3559H14.3007C14.0817 7.3559 13.8907 7.1639 13.8907 6.9729C13.8907 6.7399 14.0817 6.5759 14.3007 6.5759H16.0917C16.3787 6.5759 16.5567 6.6859 16.6657 6.9449L18.4027 11.3479C18.7307 11.2519 19.0727 11.2109 19.4277 11.2109C21.5467 11.2109 23.2557 12.9059 23.2557 15.0259C23.2557 17.1449 21.5467 18.8539 19.4277 18.8539C17.3227 18.8539 15.5997 17.1449 15.5997 15.0259C15.5997 13.5489 16.4477 12.2769 17.6637 11.6349L17.3357 10.8009L13.6987 15.0119C13.3987 15.3539 13.1937 15.4219 12.6187 15.4219H11.1017C10.8967 17.3499 9.2697 18.8539 7.3007 18.8539C5.1817 18.8539 3.4727 17.1449 3.4727 15.0259ZM11.6897 11.2659L13.3577 14.2459L16.4887 10.6099ZM10.1167 12.4419C10.6507 13.0289 11.0197 13.8089 11.0877 14.6559H12.7007L10.9237 11.5119ZM4.2657 15.0119C4.2657 16.7069 5.6187 18.0609 7.3147 18.0609C8.9827 18.0609 10.3357 16.7069 10.3357 15.0119C10.3357 14.2459 10.0627 13.5629 9.6117 13.0159L8.0667 14.8069C8.0797 14.8749 8.0937 14.9569 8.0937 15.0389C8.0937 15.5179 7.7387 15.8729 7.2867 15.8729C6.8087 15.8729 6.4527 15.5179 6.4527 15.0389C6.4527 14.5059 6.9457 14.1229 7.4917 14.2459L8.9957 12.4829C8.5037 12.1819 7.9297 11.9769 7.3147 11.9769C5.6057 11.9769 4.2657 13.3169 4.2657 15.0119ZM16.4067 15.0119C16.4067 16.7069 17.7597 18.0609 19.4417 18.0609C21.1227 18.0609 22.4767 16.7069 22.4767 15.0119C22.4767 13.3299 21.1227 11.9769 19.4417 11.9769C19.1817 11.9769 18.9217 12.0179 18.7027 12.0719L19.5367 14.2189C19.9477 14.2739 20.2617 14.6149 20.2617 15.0389C20.2617 15.5179 19.9067 15.8729 19.4417 15.8729C18.9767 15.8729 18.6077 15.5179 18.6077 15.0389C18.6077 14.8339 18.6897 14.6559 18.7987 14.5199L17.9507 12.3599C17.0217 12.8789 16.4067 13.8499 16.4067 15.0119Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.49609375 26.49609375"
          className={className}
        >
          <path
            d="              M13.2477 26.4965C20.5347 26.4965 26.4957 20.5355 26.4957 13.2485C26.4957 5.9605 20.5347 0.0005 13.2477 0.0005C5.9607 0.0005 -0.0003 5.9605 -0.0003 13.2485C-0.0003 20.5355 5.9607 26.4965 13.2477 26.4965ZM3.4047 14.8475C3.4047 12.7555 5.0857 11.0745 7.1777 11.0745C7.9977 11.0745 8.7637 11.3345 9.3927 11.7855L10.3767 10.6365L9.2697 8.7095H8.1897C7.9977 8.7095 7.8477 8.5585 7.8477 8.3675C7.8477 8.1625 7.9977 8.0255 8.1897 8.0255H10.6637C10.8687 8.0255 11.0057 8.1755 11.0057 8.3675C11.0057 8.5585 10.8557 8.7095 10.6637 8.7095H10.1037L11.0467 10.4045L16.8437 9.7345L15.8457 7.1505H14.1227C13.9317 7.1505 13.7537 7.0005 13.7537 6.8225C13.7537 6.6175 13.9317 6.4805 14.1227 6.4805H15.9137C16.1737 6.4805 16.3377 6.5895 16.4337 6.8355L18.1427 11.2105C18.4847 11.1285 18.8257 11.0745 19.1957 11.0745C21.2867 11.0745 22.9827 12.7555 22.9827 14.8475C22.9827 16.9395 21.2867 18.6345 19.1957 18.6345C17.1037 18.6345 15.4077 16.9395 15.4077 14.8475C15.4077 13.3715 16.2697 12.0995 17.5137 11.4705L17.1717 10.6505L13.5347 14.8755C13.2347 15.2035 13.0427 15.2575 12.4827 15.2575H10.9507C10.7327 17.1585 9.1327 18.6345 7.1777 18.6345C5.0857 18.6345 3.4047 16.9395 3.4047 14.8475ZM11.4297 11.0875L13.1937 14.2325L16.4887 10.4175ZM9.9397 12.2505C10.5137 12.8655 10.8967 13.6855 10.9507 14.5875H12.6327L10.7597 11.2925ZM4.0877 14.8345C4.0877 16.5705 5.4687 17.9515 7.2047 17.9515C8.9137 17.9515 10.2947 16.5705 10.2947 14.8345C10.2947 14.0275 9.9937 13.3165 9.5017 12.7555L7.9157 14.6285C7.9297 14.6975 7.9437 14.7795 7.9437 14.8755C7.9437 15.3265 7.6017 15.6675 7.1637 15.6675C6.7127 15.6675 6.3577 15.3265 6.3577 14.8755C6.3577 14.3285 6.8907 13.9595 7.4097 14.1235L8.9687 12.2915C8.4627 11.9495 7.8477 11.7445 7.2047 11.7445C5.4547 11.7445 4.0877 13.1115 4.0877 14.8345ZM16.1057 14.8345C16.1057 16.5705 17.4867 17.9515 19.2087 17.9515C20.9317 17.9515 22.3127 16.5705 22.3127 14.8345C22.3127 13.1255 20.9317 11.7445 19.2087 11.7445C18.9357 11.7445 18.6487 11.7715 18.4027 11.8535L19.2777 14.0825C19.6877 14.1235 19.9887 14.4515 19.9887 14.8755C19.9887 15.3265 19.6467 15.6675 19.2087 15.6675C18.7577 15.6675 18.4157 15.3265 18.4157 14.8755C18.4157 14.6565 18.4977 14.4645 18.6207 14.3285L17.7457 12.0855C16.7617 12.6055 16.1057 13.6305 16.1057 14.8345Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}