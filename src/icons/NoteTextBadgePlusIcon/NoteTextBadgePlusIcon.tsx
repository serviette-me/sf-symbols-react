import { IconProps } from "../../types"

export default function NoteTextBadgePlusIconIcon({
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
            d="              M5.3597 27.1113H19.6877C18.7307 25.6893 18.1427 24.0212 18.0607 22.2583H6.0837C5.2497 22.2583 4.8537 21.9163 4.8537 21.0273V9.5843C4.8537 8.6953 5.2497 8.3673 6.0837 8.3673H24.0627C24.8967 8.3673 25.2927 8.6953 25.2927 9.5843V12.4273C26.0857 12.2093 26.8927 12.0993 27.7407 12.0993C28.5747 12.0993 29.3807 12.2093 30.1467 12.4003V5.3592C30.1467 1.9683 28.1637 0.0003 24.7867 0.0003H5.3597C1.9827 0.0003 -0.0003 1.9683 -0.0003 5.3592V21.7523C-0.0003 25.1293 1.9827 27.1113 5.3597 27.1113ZM8.3397 12.5923H21.8337C22.3807 12.5923 22.8047 12.1543 22.8047 11.5933C22.8047 11.0473 22.3807 10.6363 21.8337 10.6363H8.3397C7.7657 10.6363 7.3417 11.0473 7.3417 11.5933C7.3417 12.1543 7.7657 12.5923 8.3397 12.5923ZM8.3397 16.2833H19.7837C20.3027 15.5453 20.8907 14.9023 21.5747 14.3283H8.3397C7.7657 14.3283 7.3417 14.7653 7.3417 15.3263C7.3417 15.8593 7.7657 16.2833 8.3397 16.2833ZM27.7407 29.2303C31.8147 29.2303 35.1917 25.8403 35.1917 21.7653C35.1917 17.7053 31.8277 14.3283 27.7407 14.3283C23.6657 14.3283 20.2887 17.7053 20.2887 21.7653C20.2887 25.8403 23.6657 29.2303 27.7407 29.2303ZM27.7407 26.7423C26.9337 26.7423 26.3867 26.1953 26.3867 25.4023V23.1462H24.1587C23.3657 23.1462 22.8047 22.5993 22.8047 21.7793C22.8047 20.9723 23.3247 20.4263 24.1587 20.4263H26.3867V18.2242C26.3867 17.4183 26.9337 16.8573 27.7407 16.8573C28.5607 16.8573 29.0937 17.3903 29.0937 18.2242V20.4263H31.3357C32.1427 20.4263 32.6897 20.9723 32.6897 21.7793C32.6897 22.5993 32.1427 23.1462 31.3357 23.1462H29.0937V25.4023C29.0937 26.1953 28.5607 26.7423 27.7407 26.7423ZM8.3397 19.9883H16.5977C17.1447 19.9883 17.5687 19.5643 17.5687 19.0173C17.5687 18.4573 17.1447 18.0333 16.5977 18.0333H8.3397C7.7657 18.0333 7.3417 18.4573 7.3417 19.0173C7.3417 19.5643 7.7657 19.9883 8.3397 19.9883Z"
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
            d="              M4.8267 26.1407H19.0997C18.4297 25.1017 17.9787 23.8847 17.8557 22.6137H5.0857C4.0607 22.6137 3.5277 22.1207 3.5277 21.0407V8.8867C3.5277 7.8067 4.0607 7.3147 5.0857 7.3147H23.6117C24.6227 7.3147 25.1697 7.8067 25.1697 8.8867V12.2367C25.7577 12.1137 26.3457 12.0447 26.9477 12.0447C27.5487 12.0447 28.1367 12.1137 28.6977 12.2367V4.7987C28.6977 1.6957 27.0017 -0.0003 23.8707 -0.0003H4.8267C1.7087 -0.0003 -0.0003 1.6957 -0.0003 4.7987V21.3417C-0.0003 24.4457 1.7087 26.1407 4.8267 26.1407ZM7.3967 11.9627H21.3277C21.8477 11.9627 22.2307 11.5527 22.2307 11.0467C22.2307 10.5407 21.8477 10.1447 21.3277 10.1447H7.3967C6.8637 10.1447 6.4667 10.5407 6.4667 11.0467C6.4667 11.5527 6.8637 11.9627 7.3967 11.9627ZM7.3967 15.8727H19.4827C19.9747 15.1897 20.5347 14.5877 21.1917 14.0547H7.3967C6.8637 14.0547 6.4667 14.4647 6.4667 14.9847C6.4667 15.4897 6.8637 15.8727 7.3967 15.8727ZM26.9607 28.4917C30.8707 28.4917 34.1527 25.2247 34.1527 21.2867C34.1527 17.3497 30.8987 14.0957 26.9607 14.0957C23.0097 14.0957 19.7557 17.3497 19.7557 21.2867C19.7557 25.2387 23.0097 28.4917 26.9607 28.4917ZM26.9607 25.9487C26.2907 25.9487 25.8537 25.5117 25.8537 24.8557V22.3947H23.4067C22.7637 22.3947 22.3127 21.9567 22.3127 21.3007C22.3127 20.6307 22.7367 20.2067 23.4067 20.2067H25.8537V17.7597C25.8537 17.1167 26.2907 16.6657 26.9607 16.6657C27.6177 16.6657 28.0547 17.0897 28.0547 17.7597V20.2067H30.5017C31.1587 20.2067 31.5957 20.6307 31.5957 21.3007C31.5957 21.9567 31.1587 22.3947 30.5017 22.3947H28.0547V24.8557C28.0547 25.5117 27.6177 25.9487 26.9607 25.9487ZM7.3967 19.7827H16.0917C16.6117 19.7827 16.9937 19.3867 16.9937 18.8947C16.9937 18.3747 16.6117 17.9647 16.0917 17.9647H7.3967C6.8637 17.9647 6.4667 18.3747 6.4667 18.8947C6.4667 19.3867 6.8637 19.7827 7.3967 19.7827Z"
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
            d="              M5.1137 26.6605H19.4137C18.5937 25.4165 18.0747 23.9665 17.9647 22.4355H5.6057C4.6897 22.4355 4.2247 22.0255 4.2247 21.0415V9.2695C4.2247 8.2855 4.6897 7.8745 5.6057 7.8745H23.8437C24.7597 7.8745 25.2387 8.2855 25.2387 9.2695V12.3455C25.9357 12.1675 26.6467 12.0725 27.3707 12.0725C28.0817 12.0725 28.7927 12.1675 29.4627 12.3325V5.0995C29.4627 1.8455 27.6177 -0.0005 24.3497 -0.0005H5.1137C1.8597 -0.0005 -0.0003 1.8455 -0.0003 5.0995V21.5605C-0.0003 24.8145 1.8597 26.6605 5.1137 26.6605ZM7.8887 12.3045H21.5877C22.1347 12.3045 22.5317 11.8805 22.5317 11.3335C22.5317 10.8145 22.1347 10.4045 21.5877 10.4045H7.8887C7.3277 10.4045 6.9317 10.8145 6.9317 11.3335C6.9317 11.8805 7.3277 12.3045 7.8887 12.3045ZM7.8887 16.0915H19.6467C20.1387 15.3805 20.7267 14.7655 21.3967 14.2055H7.8887C7.3277 14.2055 6.9317 14.6285 6.9317 15.1755C6.9317 15.6955 7.3277 16.0915 7.8887 16.0915ZM27.3707 28.8885C31.3767 28.8885 34.6997 25.5525 34.6997 21.5465C34.6997 17.5415 31.3907 14.2325 27.3707 14.2325C23.3517 14.2325 20.0427 17.5415 20.0427 21.5465C20.0427 25.5665 23.3517 28.8885 27.3707 28.8885ZM27.3707 26.3735C26.6327 26.3735 26.1407 25.8805 26.1407 25.1565V22.7915H23.8027C23.0777 22.7915 22.5727 22.2985 22.5727 21.5605C22.5727 20.8225 23.0507 20.3305 23.8027 20.3305H26.1407V18.0055C26.1407 17.2815 26.6327 16.7755 27.3707 16.7755C28.1097 16.7755 28.6017 17.2535 28.6017 18.0055V20.3305H30.9527C31.6777 20.3305 32.1697 20.8225 32.1697 21.5605C32.1697 22.2985 31.6777 22.7915 30.9527 22.7915H28.6017V25.1565C28.6017 25.8805 28.1097 26.3735 27.3707 26.3735ZM7.8887 19.8925H16.3517C16.8987 19.8925 17.2947 19.4965 17.2947 18.9625C17.2947 18.4295 16.8987 18.0055 16.3517 18.0055H7.8887C7.3277 18.0055 6.9317 18.4295 6.9317 18.9625C6.9317 19.4965 7.3277 19.8925 7.8887 19.8925Z"
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
            d="              M4.0337 24.7595H18.9767C18.6757 24.2405 18.4297 23.6665 18.2797 23.0645H3.9097C2.4747 23.0645 1.6957 22.3125 1.6957 20.8355V8.3265C1.6957 6.8495 2.4747 6.0845 3.9097 6.0845H23.1597C24.5687 6.0845 25.3887 6.8495 25.3887 8.3265V12.2505C25.7167 12.2225 25.9767 12.1955 26.2637 12.1955C26.5367 12.1955 26.8107 12.2225 27.0837 12.2505V4.0055C27.0837 1.3675 25.7167 0.0005 23.0507 0.0005H4.0337C1.3677 0.0005 -0.0003 1.3535 -0.0003 4.0055V20.7675C-0.0003 23.4065 1.3677 24.7595 4.0337 24.7595ZM6.0837 11.0465H21.0137C21.3827 11.0465 21.6837 10.7465 21.6837 10.3635C21.6837 9.9945 21.3827 9.6935 21.0137 9.6935H6.0837C5.6877 9.6935 5.4007 9.9945 5.4007 10.3635C5.4007 10.7465 5.6877 11.0465 6.0837 11.0465ZM26.2497 27.3845C29.9417 27.3845 33.0447 24.3085 33.0447 20.5895C33.0447 16.8575 29.9827 13.7815 26.2497 13.7815C22.5317 13.7815 19.4547 16.8575 19.4547 20.5895C19.4547 24.3225 22.5317 27.3845 26.2497 27.3845ZM6.0837 15.2575H19.8107C20.1937 14.7515 20.6177 14.3005 21.1097 13.9045H6.0837C5.6877 13.9045 5.4007 14.2055 5.4007 14.5875C5.4007 14.9575 5.6877 15.2575 6.0837 15.2575ZM26.2497 24.8965C25.7987 24.8965 25.5117 24.5955 25.5117 24.1715V21.3145H22.6677C22.2437 21.3145 21.9437 21.0415 21.9437 20.5895C21.9437 20.1385 22.2437 19.8515 22.6677 19.8515H25.5117V17.0075C25.5117 16.5845 25.7987 16.2835 26.2497 16.2835C26.7017 16.2835 26.9747 16.5845 26.9747 17.0075V19.8515H29.8187C30.2557 19.8515 30.5567 20.1385 30.5567 20.5895C30.5567 21.0415 30.2557 21.3145 29.8187 21.3145H26.9747V24.1715C26.9747 24.5955 26.7017 24.8965 26.2497 24.8965ZM6.0837 19.4685H15.7637C16.1597 19.4685 16.4477 19.1675 16.4477 18.7985C16.4477 18.4165 16.1597 18.1155 15.7637 18.1155H6.0837C5.6877 18.1155 5.4007 18.4165 5.4007 18.7985C5.4007 19.1675 5.6877 19.4685 6.0837 19.4685Z"
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
            d="              M4.4847 25.5253H18.7307C18.2387 24.7053 17.8827 23.8023 17.7187 22.8453H4.4437C3.3087 22.8453 2.6797 22.2443 2.6797 21.0543V8.4223C2.6797 7.2183 3.3087 6.6313 4.4437 6.6313H23.3107C24.4587 6.6313 25.1017 7.2183 25.1017 8.4223V12.1133C25.5527 12.0453 26.0037 12.0043 26.4547 12.0043C26.8927 12.0043 27.3437 12.0453 27.7817 12.1133V4.4433C27.7817 1.5173 26.2497 0.0003 23.2967 0.0003H4.4847C1.5317 0.0003 -0.0003 1.5173 -0.0003 4.4433V21.0823C-0.0003 24.0083 1.5317 25.5253 4.4847 25.5253ZM6.7947 11.5523H20.9997C21.4927 11.5523 21.8617 11.1703 21.8617 10.6773C21.8617 10.1993 21.4927 9.8303 20.9997 9.8303H6.7947C6.2757 9.8303 5.9067 10.1993 5.9067 10.6773C5.9067 11.1703 6.2757 11.5523 6.7947 11.5523ZM6.7947 15.5993H19.2907C19.7557 14.9433 20.3027 14.3693 20.9457 13.8773H6.7947C6.2757 13.8773 5.9067 14.2593 5.9067 14.7523C5.9067 15.2303 6.2757 15.5993 6.7947 15.5993ZM26.4547 28.0133C30.2697 28.0133 33.4827 24.8143 33.4827 20.9723C33.4827 17.1173 30.3107 13.9453 26.4547 13.9453C22.5997 13.9453 19.4137 17.1173 19.4137 20.9723C19.4137 24.8423 22.5997 28.0133 26.4547 28.0133ZM26.4547 25.4293C25.8807 25.4293 25.5257 25.0603 25.5257 24.5133V21.9023H22.9277C22.3677 21.9023 21.9977 21.5473 21.9977 20.9723C21.9977 20.4123 22.3677 20.0433 22.9277 20.0433H25.5257V17.4593C25.5257 16.9123 25.8807 16.5293 26.4547 16.5293C27.0157 16.5293 27.3847 16.8983 27.3847 17.4593V20.0433H29.9687C30.5297 20.0433 30.8987 20.4123 30.8987 20.9723C30.8987 21.5473 30.5297 21.9023 29.9687 21.9023H27.3847V24.5133C27.3847 25.0603 27.0157 25.4293 26.4547 25.4293ZM6.7947 19.6463H15.7637C16.2557 19.6463 16.6247 19.2773 16.6247 18.7993C16.6247 18.3063 16.2557 17.9103 15.7637 17.9103H6.7947C6.2757 17.9103 5.9067 18.3063 5.9067 18.7993C5.9067 19.2773 6.2757 19.6463 6.7947 19.6463Z"
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
            d="              M4.2927 25.1695H18.5257C18.1287 24.4865 17.8277 23.7485 17.6367 22.9685H4.0877C2.8707 22.9685 2.2017 22.3265 2.2017 21.0545V8.1625C2.2017 6.9045 2.8707 6.2475 4.0877 6.2475H23.1467C24.3637 6.2475 25.0467 6.9045 25.0467 8.1625V12.0445C25.4437 12.0035 25.7987 11.9765 26.1677 11.9765C26.5237 11.9765 26.8927 12.0035 27.2477 12.0445V4.2385C27.2477 1.4215 25.8267 -0.0005 22.9687 -0.0005H4.2927C1.4357 -0.0005 -0.0003 1.4085 -0.0003 4.2385V20.9315C-0.0003 23.7615 1.4357 25.1695 4.2927 25.1695ZM6.4527 11.3335H20.8227C21.3007 11.3335 21.6567 10.9515 21.6567 10.4725C21.6567 10.0075 21.3007 9.6525 20.8227 9.6525H6.4527C5.9607 9.6525 5.5917 10.0075 5.5917 10.4725C5.5917 10.9515 5.9607 11.3335 6.4527 11.3335ZM6.4527 15.4495H19.1677C19.6467 14.8065 20.1797 14.2465 20.8087 13.7675H6.4527C5.9607 13.7675 5.5917 14.1365 5.5917 14.6285C5.5917 15.0935 5.9607 15.4495 6.4527 15.4495ZM26.1677 27.7405C29.9277 27.7405 33.1137 24.5955 33.1137 20.7945C33.1137 16.9805 29.9687 13.8495 26.1677 13.8495C22.3537 13.8495 19.2227 16.9945 19.2227 20.7945C19.2227 24.6235 22.3537 27.7405 26.1677 27.7405ZM26.1677 25.1425C25.6617 25.1425 25.3337 24.8145 25.3337 24.3085V21.6285H22.6547C22.1617 21.6285 21.8207 21.3005 21.8207 20.7945C21.8207 20.2895 22.1617 19.9605 22.6547 19.9605H25.3337V17.2815C25.3337 16.7895 25.6617 16.4475 26.1677 16.4475C26.6737 16.4475 27.0017 16.7895 27.0017 17.2815V19.9605H29.6677C30.1737 19.9605 30.5157 20.2895 30.5157 20.7945C30.5157 21.3005 30.1737 21.6285 29.6677 21.6285H27.0017V24.3085C27.0017 24.8145 26.6737 25.1425 26.1677 25.1425ZM6.4527 19.5645H15.5727C16.0647 19.5645 16.4197 19.2085 16.4197 18.7445C16.4197 18.2655 16.0647 17.8825 15.5727 17.8825H6.4527C5.9607 17.8825 5.5917 18.2655 5.5917 18.7445C5.5917 19.2085 5.9607 19.5645 6.4527 19.5645Z"
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
            d="              M4.6347 25.785H18.8947C18.3207 24.883 17.9237 23.844 17.7737 22.75H4.7307C3.6367 22.75 3.0487 22.203 3.0487 21.041V8.627C3.0487 7.479 3.6367 6.932 4.7307 6.932H23.4337C24.5277 6.932 25.1287 7.479 25.1287 8.627V12.168C25.6487 12.072 26.1547 12.018 26.6597 12.018C27.1797 12.018 27.6857 12.072 28.1777 12.168V4.594C28.1777 1.6 26.5777 0 23.5427 0H4.6347C1.6137 0 -0.0003 1.6 -0.0003 4.594V21.205C-0.0003 24.199 1.6137 25.785 4.6347 25.785ZM7.0547 11.73H21.1367C21.6427 11.73 22.0257 11.334 22.0257 10.842C22.0257 10.35 21.6427 9.967 21.1367 9.967H7.0547C6.5347 9.967 6.1527 10.35 6.1527 10.842C6.1527 11.334 6.5347 11.73 7.0547 11.73ZM7.0547 15.723H19.3727C19.8517 15.053 20.4117 14.465 21.0547 13.959H7.0547C6.5347 13.959 6.1527 14.342 6.1527 14.848C6.1527 15.34 6.5347 15.723 7.0547 15.723ZM26.6737 28.219C30.5297 28.219 33.7697 24.992 33.7697 21.109C33.7697 17.227 30.5707 14.014 26.6737 14.014C22.7777 14.014 19.5647 17.227 19.5647 21.109C19.5647 25.006 22.7777 28.219 26.6737 28.219ZM26.6737 25.662C26.0587 25.662 25.6617 25.252 25.6617 24.664V22.121H23.1327C22.5447 22.121 22.1347 21.725 22.1347 21.123C22.1347 20.508 22.5317 20.111 23.1327 20.111H25.6617V17.596C25.6617 16.994 26.0587 16.584 26.6737 16.584C27.2757 16.584 27.6717 16.98 27.6717 17.596V20.111H30.2017C30.8027 20.111 31.1997 20.508 31.1997 21.123C31.1997 21.725 30.8027 22.121 30.2017 22.121H27.6717V24.664C27.6717 25.252 27.2757 25.662 26.6737 25.662ZM7.0547 19.701H15.9007C16.4067 19.701 16.7887 19.332 16.7887 18.84C16.7887 18.334 16.4067 17.937 15.9007 17.937H7.0547C6.5347 17.937 6.1527 18.334 6.1527 18.84C6.1527 19.332 6.5347 19.701 7.0547 19.701Z"
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
            d="              M3.6917 24.1994H19.5777C19.4007 23.8844 19.2367 23.5434 19.1137 23.1874H3.6777C1.9277 23.1874 1.0117 22.2854 1.0117 20.5214V8.5314C1.0117 6.7674 1.9277 5.8654 3.6777 5.8654H23.1737C24.8557 5.8654 25.8267 6.7674 25.8267 8.5314V12.5094C26.0857 12.4824 26.2227 12.4824 26.4007 12.4824C26.5367 12.4824 26.7017 12.4824 26.8377 12.4964V3.6774C26.8377 1.2984 25.5797 0.0004 23.1597 0.0004H3.6917C1.2717 0.0004 -0.0003 1.2574 -0.0003 3.6774V20.5354C-0.0003 22.9414 1.2717 24.1994 3.6917 24.1994ZM5.5917 10.6504H21.2597C21.5057 10.6504 21.7107 10.4454 21.7107 10.1994C21.7107 9.9534 21.5057 9.7484 21.2597 9.7484H5.5917C5.3317 9.7484 5.1267 9.9534 5.1267 10.1994C5.1267 10.4454 5.3317 10.6504 5.5917 10.6504ZM26.3597 26.8924C29.9687 26.8924 32.9627 23.9124 32.9627 20.2894C32.9627 16.6664 29.9827 13.6854 26.3597 13.6854C22.7497 13.6854 19.7557 16.6794 19.7557 20.2894C19.7557 23.9254 22.7497 26.8924 26.3597 26.8924ZM5.6057 14.9844H20.6447C20.9177 14.6564 21.1917 14.3414 21.5197 14.0684H5.6057C5.3317 14.0684 5.1267 14.2734 5.1267 14.5334C5.1267 14.7794 5.3317 14.9844 5.6057 14.9844ZM26.3597 24.5544C25.9907 24.5544 25.7717 24.3084 25.7717 23.9664V20.8774H22.6817C22.3677 20.8774 22.0937 20.6584 22.0937 20.2894C22.0937 19.9204 22.3677 19.7014 22.6817 19.7014H25.7717V16.6384C25.7717 16.3104 25.9907 16.0374 26.3597 16.0374C26.7287 16.0374 26.9477 16.3104 26.9477 16.6384V19.7014H30.0237C30.3657 19.7014 30.6117 19.9204 30.6117 20.2894C30.6117 20.6584 30.3657 20.8774 30.0237 20.8774H26.9477V23.9664C26.9477 24.3084 26.7287 24.5544 26.3597 24.5544ZM5.6057 19.3044H16.0097C16.2697 19.3044 16.4747 19.0994 16.4747 18.8534C16.4747 18.6074 16.2697 18.4024 16.0097 18.4024H5.6057C5.3317 18.4024 5.1267 18.6074 5.1267 18.8534C5.1267 19.0994 5.3317 19.3044 5.6057 19.3044Z"
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
            d="              M3.5137 23.912H19.8787C19.7697 23.693 19.6467 23.475 19.5507 23.242H3.5547C1.6547 23.242 0.6697 22.258 0.6697 20.371V8.627C0.6697 6.727 1.6547 5.742 3.5547 5.742H23.1737C25.0057 5.742 26.0587 6.727 26.0587 8.627V12.647C26.2777 12.619 26.3457 12.619 26.4547 12.619C26.5367 12.619 26.6467 12.619 26.7287 12.619V3.514C26.7287 1.244 25.5117 0 23.2147 0H3.5137C1.2167 0 -0.0003 1.217 -0.0003 3.514V20.398C-0.0003 22.695 1.2167 23.912 3.5137 23.912ZM5.3317 10.445H21.3827C21.5747 10.445 21.7247 10.295 21.7247 10.104C21.7247 9.926 21.5747 9.775 21.3827 9.775H5.3317C5.1547 9.775 5.0037 9.926 5.0037 10.104C5.0037 10.295 5.1547 10.445 5.3317 10.445ZM26.4137 26.647C29.9687 26.647 32.9217 23.707 32.9217 20.139C32.9217 16.57 29.9957 13.645 26.4137 13.645C22.8597 13.645 19.9197 16.584 19.9197 20.139C19.9197 23.707 22.8597 26.647 26.4137 26.647ZM5.3597 14.834H21.0817C21.2867 14.602 21.4927 14.355 21.7247 14.15H5.3597C5.1547 14.15 5.0037 14.314 5.0037 14.492C5.0037 14.684 5.1547 14.834 5.3597 14.834ZM26.4137 24.377C26.0857 24.377 25.8947 24.158 25.8947 23.857V20.658H22.6957C22.4217 20.658 22.1757 20.467 22.1757 20.139C22.1757 19.811 22.4217 19.619 22.6957 19.619H25.8947V16.434C25.8947 16.16 26.0857 15.914 26.4137 15.914C26.7427 15.914 26.9337 16.16 26.9337 16.434V19.619H30.1187C30.4067 19.619 30.6387 19.811 30.6387 20.139C30.6387 20.467 30.4067 20.658 30.1187 20.658H26.9337V23.857C26.9337 24.158 26.7427 24.377 26.4137 24.377ZM5.3597 19.223H16.1327C16.3377 19.223 16.4887 19.072 16.4887 18.881C16.4887 18.689 16.3377 18.539 16.1327 18.539H5.3597C5.1547 18.539 5.0037 18.689 5.0037 18.881C5.0037 19.072 5.1547 19.223 5.3597 19.223Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}