import { UserRoundPlus, ArrowRight } from 'lucide-react'
import { Button } from '../../../components/button'

interface InviteGuestsStepProps {
  emailsToInvite: string[]
  openModalGuests: () => void
  openConfirmTripModal: () => void
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openModalGuests,
}: InviteGuestsStepProps) {
  return (
    <div className="flex h-16 items-center gap-3 rounded-xl bg-zinc-900 px-4 shadow-shape">
      <button
        type="button"
        onClick={openModalGuests}
        className="flex flex-1 items-center gap-2"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="flex-1 text-left text-lg text-zinc-100">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="flex-1 text-left text-lg text-zinc-400">
            Quem estará na viagem ?
          </span>
        )}
      </button>

      <div className="h-6 w-px bg-zinc-800" />

      <Button onClick={openConfirmTripModal} variant="primary" size="default">
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  )
}
