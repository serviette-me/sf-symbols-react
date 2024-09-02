import { IconProps } from "../../types"

export default function FigureStairsIconIcon({
  weight = "regular",
  color = "#000000",
  className = "",
}: IconProps) {
  switch (weight) {
    case "black":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28.560546875 38.978515625"
          className={className}
        >
          <path
            d="              M11.2657 6.9042C13.1657 6.9042 14.7107 5.3462 14.7107 3.4452C14.7107 1.5582 13.1657 0.0002 11.2657 0.0002C9.3657 0.0002 7.8067 1.5582 7.8067 3.4452C7.8067 5.3462 9.3657 6.9042 11.2657 6.9042ZM13.0567 31.0492C13.7407 31.2262 14.8887 30.9942 15.2307 29.8732L17.3357 22.8732C17.5957 21.9982 17.1997 21.0132 16.2427 20.6852L10.7737 18.7992L11.3747 14.7652C11.4027 14.6292 11.5667 14.5882 11.6617 14.7522L12.6057 16.5972C12.9337 17.2262 13.5347 17.5682 14.2047 17.5682H20.0297C20.9727 17.5682 21.8067 16.8032 21.8067 15.8042C21.8067 14.8342 20.9867 14.0412 20.0297 14.0412H15.2987L13.4807 10.4452C12.8377 9.1602 11.6617 8.2172 10.2127 7.9432L9.3927 7.7792C7.8207 7.4782 6.5217 7.8342 5.5367 8.4352L0.8337 11.3752C0.3417 11.6892 -0.0003 12.2632 -0.0003 12.8792V18.7172C-0.0003 19.6872 0.8067 20.4942 1.7777 20.4942C2.7617 20.4942 3.5687 19.6872 3.5687 18.7172V13.8632L4.9907 12.9742C5.1267 12.8792 5.2777 12.9612 5.2637 13.1522L4.6487 18.0062C4.3747 20.1792 5.1267 21.7522 7.6697 22.3532L13.3987 23.6932L11.8397 28.8612C11.5667 29.7502 11.9357 30.7482 13.0567 31.0492ZM2.2837 36.2582C2.9117 36.6682 4.0607 36.6812 4.7167 35.7242L9.0097 29.3402C9.2287 29.0122 9.3517 28.7112 9.4067 28.3142L9.9397 24.6372L7.2737 24.0212C6.8637 23.9122 6.4807 23.7892 6.1387 23.6522L5.8657 27.6442L1.7637 33.7832C1.2167 34.5902 1.4217 35.7112 2.2837 36.2582ZM9.1327 38.9782H13.6447C14.3827 38.9782 15.0117 38.3492 15.0117 37.5972V35.3552H18.1567C18.8947 35.3552 19.4957 34.7402 19.4957 34.0022V31.7322H22.6677C23.4067 31.7322 24.0217 31.1312 24.0217 30.3792V28.1232H27.1937C27.9317 28.1232 28.5607 27.5082 28.5607 26.7692C28.5607 26.0452 27.9317 25.4162 27.1937 25.4162H22.6677C21.9027 25.4162 21.3277 26.0582 21.3277 26.7692V29.0392H18.1567C17.3907 29.0392 16.8167 29.6682 16.8167 30.3792V32.6482H13.6447C12.9067 32.6482 12.3047 33.2632 12.3047 34.0022V36.2712H9.1327C8.3677 36.2712 7.7797 36.8732 7.7797 37.5972C7.7797 38.3362 8.3537 38.9782 9.1327 38.9782Z"
            fill={color}
          />
        </svg>
      )
    case "bold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.138671875 37.2421875"
          className={className}
        >
          <path
            d="              M10.8007 6.4529C12.5647 6.4529 14.0137 4.9899 14.0137 3.2269C14.0137 1.4629 12.5647 -0.0001 10.8007 -0.0001C9.0237 -0.0001 7.5747 1.4629 7.5747 3.2269C7.5747 4.9899 9.0237 6.4529 10.8007 6.4529ZM12.5777 29.7359C13.1937 29.8869 14.2187 29.6819 14.5197 28.6839L16.5567 21.8889C16.7887 21.1099 16.4337 20.2479 15.5857 19.9469L10.1587 18.0739L10.7867 13.7679C10.8147 13.5629 11.0877 13.5219 11.1977 13.7269L12.2367 15.7639C12.5237 16.3239 13.0567 16.6249 13.6447 16.6249H19.3047C20.1527 16.6249 20.8907 15.9419 20.8907 15.0669C20.8907 14.2049 20.1657 13.4939 19.3047 13.4939H14.6157L12.8247 9.9259C12.2087 8.7089 11.1017 7.8339 9.7347 7.5739L8.9417 7.4099C7.4647 7.1369 6.2347 7.4509 5.3047 8.0389L0.7387 10.8829C0.3007 11.1699 -0.0003 11.6759 -0.0003 12.2229V17.8829C-0.0003 18.7579 0.7247 19.4689 1.5857 19.4689C2.4477 19.4689 3.1587 18.7579 3.1587 17.8829V13.0979L4.8397 12.0449C4.9907 11.9489 5.1677 12.0589 5.1407 12.2499L4.5117 17.2129C4.2517 19.2769 4.9497 20.7129 7.3417 21.2869L13.0567 22.6129L11.5117 27.7949C11.2657 28.5879 11.5797 29.4629 12.5777 29.7359ZM2.1467 34.8089C2.7067 35.1779 3.7327 35.1919 4.3067 34.3439L8.4767 28.1369C8.6817 27.8359 8.7907 27.5629 8.8457 27.1929L9.3927 23.3519L6.9867 22.7769C6.6307 22.6949 6.2887 22.5859 5.9887 22.4629L5.7017 26.6189L1.6957 32.6209C1.2167 33.3459 1.3807 34.3299 2.1467 34.8089ZM8.2987 37.2419H12.7427C13.3297 37.2419 13.8227 36.7639 13.8227 36.1759V33.7289H17.2127C17.7867 33.7289 18.2517 33.2499 18.2517 32.6759V30.2149H21.6697C22.2577 30.2149 22.7227 29.7359 22.7227 29.1619V26.7009H26.0727C26.6467 26.7009 27.1387 26.2229 27.1387 25.6349C27.1387 25.0739 26.6467 24.5819 26.0727 24.5819H21.6697C21.0817 24.5819 20.6307 25.0739 20.6307 25.6349V28.0959H17.2127C16.6117 28.0959 16.1597 28.6019 16.1597 29.1619V31.6229H12.7427C12.1817 31.6229 11.7027 32.0879 11.7027 32.6759V35.1369H8.2987C7.6977 35.1369 7.2327 35.6019 7.2327 36.1759C7.2327 36.7499 7.6837 37.2419 8.2987 37.2419Z"
            fill={color}
          />
        </svg>
      )
    case "heavy":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 27.890625 38.158203125"
          className={className}
        >
          <path
            d="              M11.0467 6.686C12.8787 6.686 14.3827 5.182 14.3827 3.336C14.3827 1.504 12.8787 0 11.0467 0C9.2017 0 7.6977 1.504 7.6977 3.336C7.6977 5.182 9.2017 6.686 11.0467 6.686ZM12.8377 30.42C13.4807 30.584 14.5747 30.379 14.8887 29.299L16.9667 22.408C17.2127 21.574 16.8437 20.644 15.9277 20.33L10.4867 18.457L11.1017 14.287C11.1287 14.123 11.3477 14.082 11.4437 14.26L12.4277 16.201C12.7427 16.803 13.3027 17.117 13.9457 17.117H19.6877C20.5897 17.117 21.3687 16.393 21.3687 15.449C21.3687 14.533 20.6037 13.781 19.6877 13.781H14.9707L13.1657 10.199C12.5367 8.941 11.4027 8.025 9.9937 7.766L9.1877 7.602C7.6427 7.314 6.3847 7.656 5.4277 8.244L0.7927 11.143C0.3277 11.443 -0.0003 11.99 -0.0003 12.564V18.32C-0.0003 19.236 0.7657 20.002 1.6817 20.002C2.6117 20.002 3.3767 19.236 3.3767 18.32V13.494L4.9217 12.537C5.0587 12.441 5.2227 12.523 5.2087 12.728L4.5797 17.623C4.3207 19.756 5.0447 21.26 7.5197 21.848L13.2347 23.187L11.6897 28.355C11.4297 29.203 11.7717 30.133 12.8377 30.42ZM2.2147 35.574C2.8167 35.957 3.9097 35.971 4.5257 35.068L8.7637 28.766C8.9687 28.451 9.0917 28.164 9.1467 27.781L9.6797 24.021L7.1367 23.434C6.7537 23.338 6.3987 23.215 6.0707 23.092L5.7837 27.152L1.7367 33.236C1.2167 34.002 1.4087 35.055 2.2147 35.574ZM8.7367 38.158H13.2207C13.8907 38.158 14.4517 37.598 14.4517 36.928V34.576H17.7187C18.3617 34.576 18.9087 34.043 18.9087 33.373V31.008H22.2027C22.8727 31.008 23.4067 30.475 23.4067 29.805V27.439H26.6597C27.3297 27.439 27.8907 26.906 27.8907 26.236C27.8907 25.58 27.3297 25.019 26.6597 25.019H22.2027C21.5197 25.019 20.9997 25.594 20.9997 26.236V28.588H17.7187C17.0217 28.588 16.5017 29.162 16.5017 29.805V32.156H13.2207C12.5647 32.156 12.0177 32.703 12.0177 33.373V35.725H8.7367C8.0527 35.725 7.5197 36.271 7.5197 36.928C7.5197 37.584 8.0387 38.158 8.7367 38.158Z"
            fill={color}
          />
        </svg>
      )
    case "light":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.12890625 34.412109375"
          className={className}
        >
          <path
            d="              M10.0487 5.811C11.6487 5.811 12.9607 4.498 12.9607 2.912C12.9607 1.313 11.6487 0 10.0487 0C8.4497 0 7.1367 1.313 7.1367 2.912C7.1367 4.498 8.4497 5.811 10.0487 5.811ZM11.7717 27.631C12.2907 27.768 13.1657 27.576 13.4117 26.729L15.3537 20.33C15.5447 19.646 15.2437 18.936 14.5197 18.689L9.2837 16.871L9.9257 12.414C9.9667 12.154 10.3087 12.086 10.4317 12.332L11.5527 14.52C11.7847 14.998 12.2367 15.244 12.7427 15.244H18.0877C18.8267 15.244 19.4277 14.67 19.4277 13.918C19.4277 13.18 18.8267 12.578 18.0877 12.578H13.5627L11.8267 9.133C11.2657 8.025 10.2677 7.232 9.0237 6.986L8.2717 6.836C6.9047 6.576 5.7967 6.877 4.9497 7.41L0.6287 10.09C0.2597 10.35 -0.0003 10.773 -0.0003 11.252V16.584C-0.0003 17.322 0.6157 17.938 1.3397 17.938C2.0777 17.938 2.6937 17.322 2.6937 16.584V11.977L4.5527 10.814C4.7167 10.719 4.9087 10.828 4.8807 11.033L4.2657 15.955C4.0337 17.855 4.6487 19.141 6.8227 19.646L12.3727 20.945L10.8687 25.99C10.6637 26.674 10.9237 27.398 11.7717 27.631ZM1.9547 32.457C2.4337 32.772 3.3087 32.772 3.7867 32.047L7.7247 26.195C7.9157 25.908 8.0117 25.689 8.0527 25.361L8.6137 21.438L6.5347 20.945C6.2207 20.863 5.9197 20.768 5.6597 20.672L5.3867 24.896L1.5857 30.584C1.1757 31.199 1.3127 32.033 1.9547 32.457ZM6.9177 34.412H11.4027C11.7437 34.412 12.0317 34.139 12.0317 33.783V31.09H15.8727C16.2017 31.09 16.4887 30.816 16.4887 30.475V27.768H20.3577C20.6997 27.768 20.9727 27.494 20.9727 27.152V24.459H24.4997C24.8417 24.459 25.1287 24.172 25.1287 23.83C25.1287 23.502 24.8417 23.215 24.4997 23.215H20.3577C20.0157 23.215 19.7427 23.502 19.7427 23.83V26.537H15.8727C15.5177 26.537 15.2577 26.824 15.2577 27.152V29.859H11.4027C11.0607 29.859 10.7867 30.133 10.7867 30.475V33.182H6.9177C6.5627 33.182 6.3027 33.455 6.3027 33.783C6.3027 34.139 6.5627 34.412 6.9177 34.412Z"
            fill={color}
          />
        </svg>
      )
    case "medium":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.22265625 36.134765625"
          className={className}
        >
          <path
            d="              M10.4997 6.1383C12.1817 6.1383 13.5627 4.7573 13.5627 3.0763C13.5627 1.3813 12.1817 0.0003 10.4997 0.0003C8.8047 0.0003 7.4237 1.3813 7.4237 3.0763C7.4237 4.7573 8.8047 6.1383 10.4997 6.1383ZM12.2777 28.8883C12.8377 29.0253 13.7817 28.8343 14.0547 27.9183L16.0507 21.2593C16.2697 20.5213 15.9417 19.7423 15.1617 19.4823L9.7617 17.6093L10.4177 13.1253C10.4457 12.8793 10.7737 12.8243 10.8967 13.0563L12.0037 15.2303C12.2637 15.7503 12.7557 16.0093 13.2887 16.0093H18.8537C19.6327 16.0093 20.3027 15.3813 20.3027 14.5743C20.3027 13.7813 19.6327 13.1383 18.8537 13.1383H14.1917L12.4007 9.5843C11.7987 8.4083 10.7457 7.5883 9.4337 7.3283L8.6677 7.1643C7.2327 6.8903 6.0567 7.2053 5.1677 7.7653L0.6837 10.5543C0.2737 10.8283 -0.0003 11.2933 -0.0003 11.7993V17.3493C-0.0003 18.1423 0.6567 18.8123 1.4497 18.8123C2.2427 18.8123 2.9117 18.1423 2.9117 17.3493V12.5913L4.7307 11.4573C4.8947 11.3473 5.0857 11.4573 5.0587 11.6623L4.4297 16.6933C4.1837 18.6893 4.8397 20.0433 7.1367 20.5903L12.8377 21.9163L11.2927 27.1113C11.0747 27.8363 11.3617 28.6293 12.2777 28.8883ZM2.0647 33.8793C2.5837 34.2203 3.5137 34.2203 4.0337 33.4553L8.1347 27.3573C8.3267 27.0703 8.4357 26.8243 8.4907 26.4823L9.0507 22.5043L6.8087 21.9843C6.4667 21.9023 6.1657 21.7933 5.8787 21.6973L5.5917 25.9633L1.6547 31.8693C1.2027 32.5393 1.3677 33.4273 2.0647 33.8793ZM7.7517 36.1343H12.1817C12.6597 36.1343 13.0567 35.7243 13.0567 35.2463V32.6753H16.6117C17.0767 32.6753 17.4587 32.2933 17.4587 31.8143V29.2303H21.0407C21.5197 29.2303 21.9027 28.8473 21.9027 28.3553V25.7713H25.3477C25.8267 25.7713 26.2227 25.3883 26.2227 24.9103C26.2227 24.4453 25.8267 24.0493 25.3477 24.0493H21.0407C20.5487 24.0493 20.1797 24.4453 20.1797 24.9103V27.4943H16.6117C16.1057 27.4943 15.7497 27.8903 15.7497 28.3553V30.9533H12.1817C11.7167 30.9533 11.3337 31.3363 11.3337 31.8143V34.3983H7.7517C7.2597 34.3983 6.8907 34.7813 6.8907 35.2463C6.8907 35.7243 7.2597 36.1343 7.7517 36.1343Z"
            fill={color}
          />
        </svg>
      )
    case "regular":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25.716796875 35.505859375"
          className={className}
        >
          <path
            d="              M10.3357 5.9749C11.9627 5.9749 13.3167 4.6209 13.3167 2.9939C13.3167 1.3539 11.9627 -0.0001 10.3357 -0.0001C8.6957 -0.0001 7.3417 1.3539 7.3417 2.9939C7.3417 4.6209 8.6957 5.9749 10.3357 5.9749ZM12.0997 28.4099C12.6327 28.5469 13.5347 28.3559 13.7947 27.4809L15.7777 20.9039C15.9827 20.1929 15.6677 19.4689 14.9157 19.2089L9.5427 17.3499L10.2127 12.7699C10.2407 12.4959 10.5957 12.4279 10.7187 12.6879L11.8677 14.9159C12.1267 15.4219 12.5777 15.6679 13.0977 15.6679H18.5937C19.3457 15.6679 19.9747 15.0799 19.9747 14.3009C19.9747 13.5629 19.3457 12.9339 18.5937 12.9339H13.9457L12.1547 9.3929C11.5797 8.2439 10.5547 7.4379 9.2697 7.1919L8.5037 7.0409C7.0957 6.7679 5.9607 7.0679 5.0857 7.6149L0.6427 10.3769C0.2597 10.6369 -0.0003 11.0739 -0.0003 11.5669V17.0489C-0.0003 17.8009 0.6287 18.4429 1.3807 18.4429C2.1327 18.4429 2.7617 17.8009 2.7617 17.0489V12.3049L4.6757 11.1149C4.8537 11.0199 5.0587 11.1289 5.0177 11.3339L4.3887 16.4059C4.1427 18.3479 4.7847 19.6739 7.0137 20.1929L12.7147 21.5329L11.1697 26.7149C10.9647 27.4259 11.2387 28.1639 12.0997 28.4099ZM2.0097 33.3599C2.5017 33.6879 3.3907 33.6879 3.8967 32.9489L7.9437 26.9199C8.1347 26.6329 8.2307 26.4139 8.2847 26.0719L8.8597 22.0389L6.7127 21.5329C6.3847 21.4649 6.0977 21.3559 5.8247 21.2599L5.5367 25.5939L1.6267 31.4449C1.2027 32.0739 1.3537 32.9359 2.0097 33.3599ZM7.4517 35.5059H11.8537C12.2777 35.5059 12.6327 35.1509 12.6327 34.7269V32.0879H16.2697C16.6797 32.0879 17.0217 31.7599 17.0217 31.3219V28.6699H20.6857C21.1097 28.6699 21.4377 28.3419 21.4377 27.9179V25.2659H24.9377C25.3617 25.2659 25.7167 24.9239 25.7167 24.4999C25.7167 24.0899 25.3617 23.7349 24.9377 23.7349H20.6857C20.2617 23.7349 19.9337 24.0899 19.9337 24.4999V27.1519H16.2697C15.8317 27.1519 15.5177 27.5079 15.5177 27.9179V30.5699H11.8537C11.4437 30.5699 11.1157 30.8989 11.1157 31.3219V33.9879H7.4517C7.0137 33.9879 6.6997 34.3169 6.6997 34.7269C6.6997 35.1509 7.0137 35.5059 7.4517 35.5059Z"
            fill={color}
          />
        </svg>
      )
    case "semibold":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26.619140625 36.599609375"
          className={className}
        >
          <path
            d="              M10.6227 6.2617C12.3457 6.2617 13.7677 4.8537 13.7677 3.1307C13.7677 1.4077 12.3457 -0.0003 10.6227 -0.0003C8.9007 -0.0003 7.4927 1.4077 7.4927 3.1307C7.4927 4.8537 8.9007 6.2617 10.6227 6.2617ZM12.4137 29.2437C12.9887 29.3947 13.9727 29.1897 14.2457 28.2327L16.2697 21.5197C16.5017 20.7677 16.1597 19.9477 15.3397 19.6737L9.9397 17.8007L10.5817 13.3987C10.6097 13.1657 10.9097 13.1117 11.0197 13.3437L12.0997 15.4487C12.3727 15.9827 12.8787 16.2697 13.4397 16.2697H19.0447C19.8657 16.2697 20.5627 15.6137 20.5627 14.7797C20.5627 13.9587 19.8657 13.2887 19.0447 13.2887H14.3687L12.5777 9.7207C11.9767 8.5317 10.9097 7.6837 9.5707 7.4237L8.7907 7.2597C7.3277 6.9867 6.1387 7.3007 5.2367 7.8747L0.7107 10.6917C0.2867 10.9647 -0.0003 11.4567 -0.0003 11.9767V17.5817C-0.0003 18.4027 0.6837 19.0857 1.5037 19.0857C2.3377 19.0857 3.0217 18.4027 3.0217 17.5817V12.7967L4.7717 11.7027C4.9357 11.6077 5.1267 11.7027 5.0997 11.9077L4.4707 16.9117C4.2107 18.9357 4.8947 20.3297 7.2187 20.8767L12.9337 22.2167L11.3887 27.3987C11.1567 28.1507 11.4567 28.9847 12.4137 29.2437ZM2.1057 34.2757C2.6387 34.6307 3.6097 34.6307 4.1567 33.8237L8.2847 27.6857C8.4767 27.3847 8.5857 27.1387 8.6407 26.7827L9.2017 22.8597L6.8907 22.3127C6.5347 22.2307 6.2207 22.1207 5.9197 22.0117L5.6327 26.2367L1.6677 32.1837C1.2027 32.8667 1.3677 33.8107 2.1057 34.2757ZM7.9847 36.5997H12.4277C12.9477 36.5997 13.3847 36.1617 13.3847 35.6427V33.1267H16.8707C17.3767 33.1267 17.8007 32.7027 17.8007 32.1697V29.6407H21.3147C21.8337 29.6407 22.2577 29.2167 22.2577 28.6977V26.1677H25.6617C26.1817 26.1677 26.6187 25.7437 26.6187 25.2107C26.6187 24.7047 26.1817 24.2677 25.6617 24.2677H21.3147C20.7817 24.2677 20.3847 24.7047 20.3847 25.2107V27.7537H16.8707C16.3247 27.7537 15.9277 28.1917 15.9277 28.6977V31.2267H12.4277C11.9087 31.2267 11.4977 31.6507 11.4977 32.1697V34.6987H7.9847C7.4517 34.6987 7.0407 35.1227 7.0407 35.6427C7.0407 36.1617 7.4377 36.5997 7.9847 36.5997Z"
            fill={color}
          />
        </svg>
      )
    case "thin":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24.36328125 32.990234375"
          className={className}
        >
          <path
            d="              M9.6797 5.605C11.2107 5.605 12.4827 4.334 12.4827 2.803C12.4827 1.271 11.2107 0 9.6797 0C8.1347 0 6.8767 1.271 6.8767 2.803C6.8767 4.334 8.1347 5.605 9.6797 5.605ZM11.3337 26.619C11.8397 26.742 12.6737 26.564 12.9197 25.758L14.7797 19.592C14.9847 18.922 14.6837 18.238 13.9867 18.006L8.9417 16.256L9.5567 11.963C9.5977 11.717 9.9397 11.648 10.0347 11.894L11.1287 13.986C11.3617 14.451 11.7847 14.684 12.2637 14.684H17.4177C18.1287 14.684 18.7167 14.137 18.7167 13.398C18.7167 12.715 18.1287 12.127 17.4177 12.127H13.0567L11.3887 8.805C10.8557 7.738 9.8847 6.973 8.6957 6.74L7.9567 6.59C6.6447 6.344 5.5777 6.631 4.7577 7.15L0.6017 9.721C0.2457 9.967 -0.0003 10.377 -0.0003 10.842V15.982C-0.0003 16.693 0.5877 17.281 1.2987 17.281C2.0097 17.281 2.5977 16.693 2.5977 15.982V11.539L4.3887 10.418C4.5527 10.322 4.7307 10.432 4.7027 10.623L4.1017 15.381C3.8827 17.199 4.4847 18.443 6.5767 18.922L11.9217 20.18L10.4727 25.047C10.2677 25.703 10.5277 26.4 11.3337 26.619ZM1.8867 31.268C2.3517 31.568 3.1857 31.568 3.6507 30.871L7.4517 25.238C7.6287 24.965 7.7107 24.76 7.7657 24.432L8.2987 20.658L6.2887 20.18C5.9887 20.098 5.7017 20.016 5.4547 19.92L5.1817 23.98L1.5317 29.463C1.1347 30.051 1.2577 30.857 1.8867 31.268ZM6.2067 32.99H10.7867C11.0337 32.99 11.2247 32.799 11.2247 32.553V29.791H15.3397C15.5857 29.791 15.7777 29.6 15.7777 29.353V26.592H19.9337C20.1797 26.592 20.3707 26.4 20.3707 26.154V23.393H23.9257C24.1587 23.393 24.3637 23.201 24.3637 22.969C24.3637 22.723 24.1587 22.531 23.9257 22.531H19.9337C19.7017 22.531 19.5097 22.723 19.5097 22.969V25.73H15.3397C15.0937 25.73 14.9027 25.922 14.9027 26.154V28.93H10.7867C10.5547 28.93 10.3637 29.121 10.3637 29.353V32.129H6.2067C5.9747 32.129 5.7837 32.32 5.7837 32.553C5.7837 32.799 5.9747 32.99 6.2067 32.99Z"
            fill={color}
          />
        </svg>
      )
    case "ultralight":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 23.966796875 32.265625"
          className={className}
        >
          <path
            d="              M9.5017 5.4959C10.9927 5.4959 12.2367 4.2519 12.2367 2.7479C12.2367 1.2439 10.9927 -0.0001 9.5017 -0.0001C7.9847 -0.0001 6.7407 1.2439 6.7407 2.7479C6.7407 4.2519 7.9847 5.4959 9.5017 5.4959ZM11.1157 26.0999C11.6077 26.2229 12.4277 26.0449 12.6597 25.2519L14.4927 19.1949C14.6837 18.5529 14.3967 17.8829 13.7127 17.6499L8.7637 15.9409L9.3787 11.7309C9.4067 11.4839 9.7347 11.4159 9.8437 11.6619L10.9097 13.7129C11.1287 14.1639 11.5527 14.3969 12.0177 14.3969H17.0767C17.7737 14.3969 18.3477 13.8499 18.3477 13.1389C18.3477 12.4549 17.7737 11.8809 17.0767 11.8809H12.8107L11.1697 8.6269C10.6507 7.5739 9.6937 6.8359 8.5177 6.6039L7.8067 6.4669C6.5217 6.2209 5.4687 6.4939 4.6757 6.9999L0.5877 9.5289C0.2457 9.7749 -0.0003 10.1719 -0.0003 10.6229V15.6679C-0.0003 16.3649 0.5747 16.9399 1.2717 16.9399C1.9687 16.9399 2.5427 16.3649 2.5427 15.6679V11.3069L4.3067 10.2129C4.4567 10.1169 4.6347 10.2269 4.6207 10.4179L4.0197 15.0659C3.8007 16.8709 4.3887 18.0879 6.4527 18.5529L11.6897 19.7699L10.2677 24.5549C10.0767 25.1969 10.3087 25.8669 11.1157 26.0999ZM1.8457 30.6519C2.2967 30.9399 3.1177 30.9399 3.5687 30.2699L7.3007 24.7459C7.4787 24.4859 7.5607 24.2679 7.6157 23.9529L8.1347 20.2479L6.1657 19.7699C5.8657 19.7009 5.5917 19.6189 5.3457 19.5369L5.0857 23.5019L1.5037 28.8889C1.1207 29.4629 1.2307 30.2419 1.8457 30.6519ZM5.8517 32.2659H10.4867C10.6637 32.2659 10.8147 32.1019 10.8147 31.9239V29.1209H15.0667C15.2577 29.1209 15.4087 28.9709 15.4087 28.7789V25.9899H19.7147C19.9067 25.9899 20.0567 25.8399 20.0567 25.6489V22.8589H23.6247C23.8027 22.8589 23.9667 22.6949 23.9667 22.5179C23.9667 22.3259 23.8027 22.1759 23.6247 22.1759H19.7147C19.5367 22.1759 19.3727 22.3259 19.3727 22.5179V25.3069H15.0667C14.8887 25.3069 14.7387 25.4569 14.7387 25.6489V28.4379H10.4867C10.2947 28.4379 10.1447 28.6019 10.1447 28.7789V31.5819H5.8517C5.6597 31.5819 5.5097 31.7329 5.5097 31.9239C5.5097 32.1019 5.6597 32.2659 5.8517 32.2659Z"
            fill={color}
          />
        </svg>
      )
    default:
      return null
  }
}
