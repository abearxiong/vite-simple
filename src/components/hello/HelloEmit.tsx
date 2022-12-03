import { defineComponent, PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';
// const props = defineProps({
//   hi: {
//     type: String,
//     required: true,
//   },
// });
import { toRefs } from 'vue';

interface Props {
  hi?: string;
}
// type-based (TS)
const emit = defineEmits<{
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}>();
type EmitTs = typeof emit;
export default (
  props: {
    hi?: string;
    b?: string;
    [key: string]: any;
  },
  ctx: {
    emit: EmitTs;
  },
) => {
  const { emit } = ctx;
  console.log('ctx333', ctx);
  const { hi } = props;

  const onClick2 = (e: MouseEvent) => {
    emit('change', 1);
    e.stopPropagation();
  };

  return (
    <div class={[['a'], 'b', { c: true, d: false }]}>
      emitemit = {hi}
      <div onClick={onClick2}>emitemit click</div>
    </div>
  );
};
