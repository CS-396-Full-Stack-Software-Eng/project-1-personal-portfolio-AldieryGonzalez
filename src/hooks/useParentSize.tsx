import { useLayoutEffect, useState } from 'react';

/**
 * Returns current size of a parent element of the provided node.
 * The parent element is determined by the ancestor parameter which is defauled to one.
 *
 * @param ref - The ref object of the element that requires the parent size
 * @param ancestor - Set to 1 initially. How far up the parent chain to look for the parent size
 * @returns [parentWidth, parentHeight]
 *
 */
export function useParentSize(
	node: React.RefObject<HTMLElement>,
	ancestor = 1,
) {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		if (!node.current) return;
		let parent = node.current;
		for (let i = 0; i < ancestor; i++) {
			if (parent.parentElement) {
				parent = parent.parentElement;
			} else {
				break;
			}
		}
		const observer = new ResizeObserver((entries) => {
			const entry = entries[0];
			setSize([
				entry.borderBoxSize[0].inlineSize,
				entry.borderBoxSize[0].blockSize,
			]);
		});
		observer.observe(parent);
		return () => observer.disconnect();
	}, [node, ancestor]);
	return size;
}
