export interface TreeNodeItem {
  value: string;
  title: string;
}

export interface TreeNode extends TreeNodeItem {
  children?: TreeNodeItem[];
}

export type DkTpgTreeNodeItem = Record<string, any>;

/**
 * Duck Typing: 长得像树形数据
 */
export interface DkTpgTreeNode extends DkTpgTreeNodeItem {
  children?: DkTpgTreeNodeItem[];
}
