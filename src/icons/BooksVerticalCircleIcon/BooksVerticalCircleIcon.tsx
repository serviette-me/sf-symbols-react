import { IconProps } from "../../types"

export default function BooksVerticalCircleIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.873046875 29.859375"
          className={className}
        >
          <path
            d="              M14.9297 29.8591C23.1597 29.8591 29.8727 23.1601 29.8727 14.9301C29.8727 6.6991 23.1597 0.0001 14.9297 0.0001C6.7127 0.0001 -0.0003 6.6991 -0.0003 14.9301C-0.0003 23.1601 6.7127 29.8591 14.9297 29.8591ZM14.9297 24.9921C9.3657 24.9921 4.8667 20.4941 4.8667 14.9301C4.8667 9.3651 9.3657 4.8671 14.9297 4.8671C20.4937 4.8671 25.0057 9.3651 25.0057 14.9301C25.0057 20.4941 20.4937 24.9921 14.9297 24.9921ZM16.9667 20.6031H17.8417C18.5797 20.6031 19.0037 20.1661 19.0037 19.4411V14.4101L19.9747 19.6871C20.1117 20.3851 20.6307 20.7131 21.3277 20.6031L21.9027 20.4801C22.5997 20.3441 22.9277 19.8381 22.7907 19.1271L21.3687 11.3481C21.2597 10.6371 20.7267 10.3221 20.0157 10.4451L19.4547 10.5551C19.2777 10.5821 19.1267 10.6371 19.0037 10.7191V9.9391C19.0037 9.1871 18.5797 8.7771 17.8417 8.7771H16.9667C16.2287 8.7771 15.8187 9.1871 15.8187 9.9391V19.4411C15.8187 20.1661 16.2287 20.6031 16.9667 20.6031ZM8.5177 20.6031H9.4337C10.1307 20.6031 10.5687 20.1661 10.5687 19.4411V11.5121C10.5687 10.8011 10.1307 10.3631 9.4337 10.3631H8.5177C7.7927 10.3631 7.3417 10.8011 7.3417 11.5121V19.4411C7.3417 20.1661 7.7927 20.6031 8.5177 20.6031ZM12.4137 20.6031H13.9727C14.6837 20.6031 15.1207 20.1661 15.1207 19.4411V13.6441C15.1207 12.9331 14.6837 12.4961 13.9727 12.4961H12.4137C11.6757 12.4961 11.2517 12.9331 11.2517 13.6441V19.4411C11.2517 20.1661 11.6757 20.6031 12.4137 20.6031ZM12.7417 14.7931C12.4827 14.7931 12.2637 14.6011 12.2637 14.3421C12.2637 14.0961 12.4547 13.8631 12.7417 13.8631H13.6717C13.9997 13.8631 14.1227 14.0961 14.1227 14.3421C14.1227 14.6011 13.9317 14.7931 13.6717 14.7931ZM12.7417 19.2091C12.4547 19.2091 12.2637 19.0041 12.2637 18.7441C12.2637 18.4711 12.4827 18.2791 12.7417 18.2791H13.6717C13.9317 18.2791 14.1227 18.4711 14.1227 18.7441C14.1227 19.0041 13.9317 19.2091 13.6717 19.2091Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.875 28.888671875"
          className={className}
        >
          <path
            d="              M14.4377 28.8886C22.3667 28.8886 28.8747 22.3676 28.8747 14.4376C28.8747 6.5216 22.3537 -0.0004 14.4377 -0.0004C6.5077 -0.0004 -0.0003 6.5216 -0.0003 14.4376C-0.0003 22.3676 6.5217 28.8886 14.4377 28.8886ZM14.4377 25.2926C8.4357 25.2926 3.6097 20.4536 3.6097 14.4376C3.6097 8.4356 8.4217 3.5956 14.4377 3.5956C20.4397 3.5956 25.2797 8.4356 25.2797 14.4376C25.2797 20.4536 20.4527 25.2926 14.4377 25.2926ZM16.3107 20.6176H17.5277C18.1427 20.6176 18.4977 20.2756 18.4977 19.6606V13.3986L19.7697 19.8656C19.8787 20.4536 20.3027 20.7406 20.9047 20.6176L21.6837 20.4396C22.2847 20.3296 22.5447 19.9066 22.4357 19.3046L20.6577 10.2536C20.5487 9.6526 20.1387 9.3656 19.5367 9.4886L18.7577 9.6796C18.6617 9.6936 18.5667 9.7206 18.4977 9.7476V8.6956C18.4977 8.0666 18.1427 7.7246 17.5277 7.7246H16.3107C15.6957 7.7246 15.3537 8.0666 15.3537 8.6956V19.6606C15.3537 20.2756 15.6957 20.6176 16.3107 20.6176ZM7.7387 20.6176H8.7907C9.3927 20.6176 9.7477 20.2756 9.7477 19.6606V10.3496C9.7477 9.7476 9.3927 9.3926 8.7907 9.3926H7.7387C7.1227 9.3926 6.7537 9.7476 6.7537 10.3496V19.6606C6.7537 20.2756 7.1227 20.6176 7.7387 20.6176ZM11.5117 20.6176H13.5757C14.1917 20.6176 14.5327 20.2756 14.5327 19.6606V12.4956C14.5327 11.8946 14.1917 11.5256 13.5757 11.5256H11.5117C10.9097 11.5256 10.5547 11.8946 10.5547 12.4956V19.6606C10.5547 20.2756 10.9097 20.6176 11.5117 20.6176ZM11.9767 13.8226C11.7307 13.8226 11.5527 13.6176 11.5527 13.3846C11.5527 13.1526 11.7307 12.9476 11.9767 12.9476H13.1387C13.4117 12.9476 13.5757 13.1526 13.5757 13.3846C13.5757 13.6176 13.3847 13.8226 13.1387 13.8226ZM11.9767 19.2086C11.7307 19.2086 11.5527 19.0176 11.5527 18.7716C11.5527 18.5116 11.7307 18.3336 11.9767 18.3336H13.1387C13.3847 18.3336 13.5757 18.5116 13.5757 18.7716C13.5757 19.0176 13.3847 19.2086 13.1387 19.2086Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.408203125 29.408203125"
          className={className}
        >
          <path
            d="              M14.6977 29.4084C22.7777 29.4084 29.4077 22.7914 29.4077 14.7114C29.4077 6.6304 22.7777 0.0004 14.6977 0.0004C6.6167 0.0004 -0.0003 6.6304 -0.0003 14.7114C-0.0003 22.7914 6.6167 29.4084 14.6977 29.4084ZM14.6977 25.1424C8.9277 25.1424 4.2657 20.4804 4.2657 14.7114C4.2657 8.9274 8.9277 4.2794 14.6977 4.2794C20.4667 4.2794 25.1287 8.9274 25.1287 14.7114C25.1287 20.4804 20.4807 25.1424 14.6977 25.1424ZM16.6527 20.6174H17.6917C18.3747 20.6174 18.7577 20.2204 18.7577 19.5504V13.9314L19.8787 19.7834C20.0017 20.4254 20.4807 20.7264 21.1227 20.6174L21.7927 20.4664C22.4487 20.3434 22.7497 19.8794 22.6267 19.2224L21.0407 10.8414C20.9177 10.1854 20.4527 9.8714 19.7967 9.9944L19.1267 10.1444C18.9907 10.1724 18.8667 10.2134 18.7577 10.2674V9.3514C18.7577 8.6684 18.3747 8.2854 17.6917 8.2854H16.6527C15.9827 8.2854 15.5997 8.6684 15.5997 9.3514V19.5504C15.5997 20.2204 15.9827 20.6174 16.6527 20.6174ZM8.1487 20.6174H9.1327C9.7887 20.6174 10.1857 20.2204 10.1857 19.5504V10.9644C10.1857 10.3084 9.7887 9.9124 9.1327 9.9124H8.1487C7.4647 9.9124 7.0687 10.3084 7.0687 10.9644V19.5504C7.0687 20.2204 7.4647 20.6174 8.1487 20.6174ZM11.9907 20.6174H13.7817C14.4507 20.6174 14.8477 20.2204 14.8477 19.5504V13.1114C14.8477 12.4554 14.4507 12.0454 13.7817 12.0454H11.9907C11.3207 12.0454 10.9237 12.4554 10.9237 13.1114V19.5504C10.9237 20.2204 11.3207 20.6174 11.9907 20.6174ZM12.3867 14.3414C12.1267 14.3414 11.9357 14.1364 11.9357 13.8904C11.9357 13.6584 12.1137 13.4394 12.3867 13.4394H13.4257C13.7267 13.4394 13.8637 13.6584 13.8637 13.8904C13.8637 14.1364 13.6717 14.3414 13.4257 14.3414ZM12.3867 19.2224C12.1137 19.2224 11.9357 19.0174 11.9357 18.7574C11.9357 18.4984 12.1267 18.3064 12.3867 18.3064H13.4257C13.6717 18.3064 13.8637 18.4984 13.8637 18.7574C13.8637 19.0174 13.6717 19.2224 13.4257 19.2224Z"
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
            d="              M13.7127 27.426C21.2187 27.426 27.4257 21.219 27.4257 13.713C27.4257 6.193 21.2187 0 13.6987 0C6.1937 0 -0.0003 6.193 -0.0003 13.713C-0.0003 21.219 6.2067 27.426 13.7127 27.426ZM13.7127 25.648C7.0957 25.648 1.7777 20.316 1.7777 13.713C1.7777 7.096 7.0957 1.764 13.6987 1.764C20.3167 1.764 25.6617 7.096 25.6617 13.713C25.6617 20.316 20.3297 25.648 13.7127 25.648ZM15.4907 20.467H16.9117C17.4587 20.467 17.7327 20.18 17.7327 19.674V12.4L19.1957 19.838C19.2907 20.344 19.6057 20.576 20.1247 20.467L21.0137 20.275C21.5467 20.18 21.7517 19.824 21.6567 19.318L19.6597 9.064C19.5507 8.545 19.2367 8.271 18.7027 8.395L17.8147 8.613C17.7867 8.613 17.7597 8.627 17.7327 8.641V7.219C17.7327 6.699 17.4587 6.412 16.9117 6.412H15.4907C14.9297 6.412 14.6697 6.699 14.6697 7.219V19.674C14.6697 20.18 14.9297 20.467 15.4907 20.467ZM6.9457 20.467H8.0527C8.5857 20.467 8.8597 20.18 8.8597 19.674V8.859C8.8597 8.354 8.5857 8.066 8.0527 8.066H6.9457C6.3847 8.066 6.1117 8.354 6.1117 8.859V19.674C6.1117 20.18 6.3847 20.467 6.9457 20.467ZM10.5137 20.467H13.0017C13.5627 20.467 13.8087 20.18 13.8087 19.674V11.047C13.8087 10.541 13.5627 10.24 13.0017 10.24H10.5137C9.9937 10.24 9.7067 10.541 9.7067 11.047V19.674C9.7067 20.18 9.9937 20.467 10.5137 20.467ZM11.0057 12.359C10.7867 12.359 10.6507 12.195 10.6507 12.004C10.6507 11.799 10.8007 11.648 11.0057 11.648H12.5367C12.7287 11.648 12.8927 11.799 12.8927 12.004C12.8927 12.195 12.7287 12.359 12.5367 12.359ZM11.0057 19.072C10.8007 19.072 10.6507 18.922 10.6507 18.717C10.6507 18.512 10.7867 18.361 11.0057 18.361H12.5367C12.7287 18.361 12.8927 18.512 12.8927 18.717C12.8927 18.922 12.7287 19.072 12.5367 19.072Z"
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
            d="              M14.1227 28.2461C21.8477 28.2461 28.2457 21.8611 28.2457 14.1231C28.2457 6.3981 21.8477 0.0001 14.1097 0.0001C6.3847 0.0001 -0.0003 6.3981 -0.0003 14.1231C-0.0003 21.8611 6.3987 28.2461 14.1227 28.2461ZM14.1227 25.4711C7.8337 25.4711 2.7887 20.4121 2.7887 14.1231C2.7887 7.8341 7.8207 2.7891 14.1097 2.7891C20.3987 2.7891 25.4707 7.8341 25.4707 14.1231C25.4707 20.4121 20.4117 25.4711 14.1227 25.4711ZM15.9007 20.6311H17.3227C17.8687 20.6311 18.1697 20.3301 18.1697 19.7971V12.7561L19.6467 19.9741C19.7417 20.4801 20.0977 20.7401 20.6307 20.6311L21.5467 20.4121C22.0667 20.3031 22.2987 19.9471 22.2027 19.4141L20.2067 9.5561C20.0977 9.0231 19.7557 8.7501 19.2227 8.8731L18.3067 9.1051C18.2517 9.1051 18.2107 9.1191 18.1697 9.1331V7.8891C18.1697 7.3421 17.8687 7.0411 17.3227 7.0411H15.9007C15.3397 7.0411 15.0527 7.3421 15.0527 7.8891V19.7971C15.0527 20.3301 15.3397 20.6311 15.9007 20.6311ZM7.2457 20.6311H8.3807C8.9277 20.6311 9.2287 20.3301 9.2287 19.7971V9.5981C9.2287 9.0641 8.9277 8.7641 8.3807 8.7641H7.2457C6.6857 8.7641 6.3847 9.0641 6.3847 9.5981V19.7971C6.3847 20.3301 6.6857 20.6311 7.2457 20.6311ZM10.9377 20.6311H13.3297C13.8767 20.6311 14.1637 20.3301 14.1637 19.7971V11.7581C14.1637 11.2241 13.8767 10.8961 13.3297 10.8961H10.9377C10.4047 10.8961 10.0897 11.2241 10.0897 11.7581V19.7971C10.0897 20.3301 10.4047 20.6311 10.9377 20.6311ZM11.4977 13.1931C11.2517 13.1931 11.0877 12.9881 11.0877 12.7691C11.0877 12.5371 11.2517 12.3461 11.4977 12.3461H12.7967C13.0427 12.3461 13.2067 12.5371 13.2067 12.7691C13.2067 12.9881 13.0297 13.1931 12.7967 13.1931ZM11.4977 19.1951C11.2517 19.1951 11.0877 19.0171 11.0877 18.7711C11.0877 18.5251 11.2517 18.3481 11.4977 18.3481H12.7967C13.0297 18.3481 13.2067 18.5251 13.2067 18.7711C13.2067 19.0171 13.0297 19.1951 12.7967 19.1951Z"
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
            d="              M13.9457 27.8904C21.5737 27.8904 27.8907 21.5604 27.8907 13.9454C27.8907 6.3164 21.5607 0.0004 13.9317 0.0004C6.3167 0.0004 -0.0003 6.3164 -0.0003 13.9454C-0.0003 21.5604 6.3297 27.8904 13.9457 27.8904ZM13.9457 25.5664C7.4917 25.5664 2.3377 20.3984 2.3377 13.9454C2.3377 7.4924 7.4787 2.3244 13.9317 2.3244C20.3847 2.3244 25.5667 7.4924 25.5667 13.9454C25.5667 20.3984 20.3987 25.5664 13.9457 25.5664ZM15.6677 20.6304H17.2127C17.7187 20.6304 17.9917 20.3574 17.9917 19.8654V12.3864L19.5647 20.0294C19.6597 20.5074 19.9887 20.7404 20.4667 20.6304L21.4647 20.3844C21.9567 20.2894 22.1617 19.9614 22.0797 19.4684L19.9477 9.1604C19.8517 8.6544 19.5367 8.4084 19.0447 8.5314L18.0467 8.7774L17.9917 8.7914V7.4374C17.9917 6.9314 17.7187 6.6584 17.2127 6.6584H15.6677C15.1487 6.6584 14.8887 6.9314 14.8887 7.4374V19.8654C14.8887 20.3574 15.1487 20.6304 15.6677 20.6304ZM6.9727 20.6304H8.1487C8.6547 20.6304 8.9277 20.3574 8.9277 19.8654V9.1734C8.9277 8.6814 8.6547 8.4084 8.1487 8.4084H6.9727C6.4527 8.4084 6.1657 8.6814 6.1657 9.1734V19.8654C6.1657 20.3574 6.4527 20.6304 6.9727 20.6304ZM10.6227 20.6304H13.1797C13.6987 20.6304 13.9587 20.3574 13.9587 19.8654V11.3344C13.9587 10.8414 13.6987 10.5414 13.1797 10.5414H10.6227C10.1307 10.5414 9.8437 10.8414 9.8437 11.3344V19.8654C9.8437 20.3574 10.1307 20.6304 10.6227 20.6304ZM11.2247 12.8374C10.9787 12.8374 10.8277 12.6324 10.8277 12.4274C10.8277 12.1954 10.9917 12.0174 11.2247 12.0174H12.6057C12.8377 12.0174 13.0157 12.1954 13.0157 12.4274C13.0157 12.6324 12.8377 12.8374 12.6057 12.8374ZM11.2247 19.1954C10.9917 19.1954 10.8277 19.0174 10.8277 18.7714C10.8277 18.5394 10.9787 18.3614 11.2247 18.3614H12.6057C12.8377 18.3614 13.0157 18.5394 13.0157 18.7714C13.0157 19.0174 12.8377 19.1954 12.6057 19.1954Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.51953125 28.51953125"
          className={className}
        >
          <path
            d="              M14.2597 28.5199C22.0797 28.5199 28.5197 22.0799 28.5197 14.2599C28.5197 6.4529 22.0667 -0.0001 14.2457 -0.0001C6.4397 -0.0001 -0.0003 6.4529 -0.0003 14.2599C-0.0003 22.0799 6.4397 28.5199 14.2597 28.5199ZM14.2597 25.3889C8.0937 25.3889 3.1447 20.4259 3.1447 14.2599C3.1447 8.0939 8.0797 3.1309 14.2457 3.1309C20.4257 3.1309 25.3887 8.0939 25.3887 14.2599C25.3887 20.4259 20.4257 25.3889 14.2597 25.3889ZM16.0777 20.6309H17.4047C17.9917 20.6309 18.3067 20.3029 18.3067 19.7419V13.0289L19.7007 19.9339C19.7967 20.4669 20.1937 20.7399 20.7407 20.6309L21.6017 20.4259C22.1617 20.3169 22.4077 19.9339 22.2987 19.3729L20.3987 9.8579C20.2887 9.2969 19.9197 9.0239 19.3597 9.1469L18.4977 9.3519C18.4297 9.3649 18.3747 9.3789 18.3067 9.4059V8.2309C18.3067 7.6559 17.9917 7.3279 17.4047 7.3279H16.0777C15.4907 7.3279 15.1757 7.6559 15.1757 8.2309V19.7419C15.1757 20.3029 15.4907 20.6309 16.0777 20.6309ZM7.4647 20.6309H8.5587C9.1187 20.6309 9.4477 20.3029 9.4477 19.7419V9.9259C9.4477 9.3649 9.1187 9.0369 8.5587 9.0369H7.4647C6.8767 9.0369 6.5487 9.3649 6.5487 9.9259V19.7419C6.5487 20.3029 6.8767 20.6309 7.4647 20.6309ZM11.1837 20.6309H13.4397C14.0137 20.6309 14.3277 20.3029 14.3277 19.7419V12.0719C14.3277 11.5119 14.0137 11.1699 13.4397 11.1699H11.1837C10.6227 11.1699 10.2947 11.5119 10.2947 12.0719V19.7419C10.2947 20.3029 10.6227 20.6309 11.1837 20.6309ZM11.7027 13.4669C11.4567 13.4669 11.2797 13.2619 11.2797 13.0429C11.2797 12.7969 11.4567 12.6059 11.7027 12.6059H12.9477C13.2067 12.6059 13.3707 12.7969 13.3707 13.0429C13.3707 13.2619 13.1797 13.4669 12.9477 13.4669ZM11.7027 19.2089C11.4567 19.2089 11.2797 19.0179 11.2797 18.7719C11.2797 18.5259 11.4567 18.3479 11.7027 18.3479H12.9477C13.1797 18.3479 13.3707 18.5259 13.3707 18.7719C13.3707 19.0179 13.1797 19.2089 12.9477 19.2089Z"
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
            d="              M13.4117 26.8102C20.7677 26.8102 26.8107 20.7672 26.8107 13.4122C26.8107 6.0432 20.7677 0.0002 13.3987 0.0002C6.0427 0.0002 -0.0003 6.0432 -0.0003 13.4122C-0.0003 20.7672 6.0427 26.8102 13.4117 26.8102ZM13.4117 25.7712C6.5757 25.7712 1.0387 20.2342 1.0387 13.4122C1.0387 6.5902 6.5757 1.0392 13.3987 1.0392C20.2347 1.0392 25.7717 6.5902 25.7717 13.4122C25.7717 20.2342 20.2347 25.7712 13.4117 25.7712ZM15.2437 20.2622H16.5157C17.1167 20.2622 17.3767 19.9612 17.3767 19.4142V12.4282L18.6897 19.5782C18.7847 20.1252 19.0857 20.3572 19.6737 20.2482L20.4257 20.1252C21.0137 20.0432 21.2187 19.6602 21.1097 19.1132L19.2637 8.9412C19.1547 8.3812 18.8397 8.1072 18.2657 8.2302L17.5137 8.3942C17.4587 8.4082 17.4177 8.4222 17.3767 8.4352V6.9452C17.3767 6.3982 17.1167 6.0842 16.5157 6.0842H15.2437C14.6427 6.0842 14.3827 6.3982 14.3827 6.9452V19.4142C14.3827 19.9612 14.6427 20.2622 15.2437 20.2622ZM6.9177 20.2622H7.9027C8.4907 20.2622 8.7637 19.9612 8.7637 19.4142V8.4632C8.7637 7.9162 8.4907 7.6292 7.9027 7.6292H6.9177C6.3027 7.6292 6.0427 7.9162 6.0427 8.4632V19.4142C6.0427 19.9612 6.3027 20.2622 6.9177 20.2622ZM10.3767 20.2622H12.7557C13.3707 20.2622 13.6167 19.9612 13.6167 19.4142V10.6912C13.6167 10.1442 13.3707 9.8302 12.7557 9.8302H10.3767C9.8027 9.8302 9.5297 10.1442 9.5297 10.6912V19.4142C9.5297 19.9612 9.8027 20.2622 10.3767 20.2622ZM10.7327 11.7442C10.5407 11.7442 10.4317 11.6212 10.4317 11.4572C10.4317 11.2932 10.5547 11.1562 10.7327 11.1562H12.4417C12.6057 11.1562 12.7287 11.2932 12.7287 11.4572C12.7287 11.6072 12.6057 11.7442 12.4417 11.7442ZM10.7327 18.9352C10.5547 18.9352 10.4317 18.8122 10.4317 18.6482C10.4317 18.4702 10.5407 18.3472 10.7327 18.3472H12.4417C12.6057 18.3472 12.7287 18.4842 12.7287 18.6482C12.7287 18.8122 12.6057 18.9352 12.4417 18.9352Z"
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
            d="              M13.2477 26.4961C20.5347 26.4961 26.4957 20.5351 26.4957 13.2481C26.4957 5.9611 20.5347 0.0001 13.2477 0.0001C5.9607 0.0001 -0.0003 5.9611 -0.0003 13.2481C-0.0003 20.5351 5.9607 26.4961 13.2477 26.4961ZM13.2477 25.8261C6.3167 25.8261 0.6697 20.1801 0.6697 13.2481C0.6697 6.3031 6.3167 0.6701 13.2477 0.6701C20.1937 0.6701 25.8257 6.3031 25.8257 13.2481C25.8257 20.1801 20.1937 25.8261 13.2477 25.8261ZM15.1207 20.1391H16.3107C16.9397 20.1391 17.1987 19.8241 17.1987 19.2641V12.4551L18.4297 19.4411C18.5387 20.0021 18.8257 20.2341 19.4417 20.1251L20.1247 20.0431C20.7267 19.9471 20.9457 19.5641 20.8357 19.0041L19.0587 8.8731C18.9627 8.2991 18.6487 8.0121 18.0327 8.1351L17.3637 8.2711C17.2947 8.2851 17.2537 8.2991 17.1987 8.3121V6.7951C17.1987 6.2341 16.9397 5.9201 16.3107 5.9201H15.1207C14.4917 5.9201 14.2327 6.2341 14.2327 6.7951V19.2641C14.2327 19.8241 14.4917 20.1391 15.1207 20.1391ZM6.9047 20.1391H7.8337C8.4487 20.1391 8.7087 19.8241 8.7087 19.2641V8.2581C8.7087 7.6971 8.4487 7.3961 7.8337 7.3961H6.9047C6.2617 7.3961 6.0017 7.6971 6.0017 8.2581V19.2641C6.0017 19.8241 6.2617 20.1391 6.9047 20.1391ZM10.3087 20.1391H12.6327C13.2757 20.1391 13.5217 19.8241 13.5217 19.2641V10.4861C13.5217 9.9261 13.2757 9.6111 12.6327 9.6111H10.3087C9.7067 9.6111 9.4337 9.9261 9.4337 10.4861V19.2641C9.4337 19.8241 9.7067 20.1391 10.3087 20.1391ZM10.5817 11.4161C10.4177 11.4161 10.3087 11.3201 10.3087 11.1561C10.3087 11.0191 10.4317 10.8961 10.5817 10.8961H12.3867C12.5237 10.8961 12.6467 11.0191 12.6467 11.1561C12.6467 11.2931 12.5237 11.4161 12.3867 11.4161ZM10.5817 18.8531C10.4317 18.8531 10.3087 18.7581 10.3087 18.5941C10.3087 18.4431 10.4177 18.3341 10.5817 18.3341H12.3867C12.5237 18.3341 12.6467 18.4571 12.6467 18.5941C12.6467 18.7581 12.5237 18.8531 12.3867 18.8531Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
