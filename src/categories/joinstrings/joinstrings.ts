import { type } from "clipcc-extension"
import defineBlock from "../../utils/define-block"

const categoryID: string = 'joinstrings'
const color: string = '' // use global


const blocks: MyBlock<BlockParams>[] = [
    defineBlock({
        id: 'string',
        type: type.BlockType.REPORTER,
        param: {
            0: {
                type: type.ParameterType.STRING,
                defaultValue: '0'
            },
        },
        function(args, util): string {
            return String(args[0])
        }
    }),
]

for (let l = 3; l <= 10; l++) {
    const LENGTH = l
    blocks.push(defineBlock({
        id: `join${LENGTH}`,
        type: type.BlockType.REPORTER,

        param: new Array(LENGTH)
            .fill(null)
            .map((_, i): MyParam => ({
                type: type.ParameterType.STRING,
                defaultValue: String(i)
            })),

        function(args, util): string {
            args.length = LENGTH
            return Array.prototype.join.call(args, '')
        },
    }))
}


export const category_joinstrings: MyCategory = {
    id: categoryID,
    color,
    blocks,
}
