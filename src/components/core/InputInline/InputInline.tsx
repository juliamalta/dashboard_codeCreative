import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { CiSearch } from 'react-icons/ci'

export function InputInline() {
    return (
        <Field orientation="horizontal">
            <Input type="search" placeholder="Procurar..." className="border-[1px] border-color-white p-5 text-white hover:border-color-purble" />
            <Button className="text-md bg-color-purble p-3">
                <CiSearch />
            </Button>
        </Field>
    )
}
