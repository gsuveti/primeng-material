import { Component, OnInit } from '@angular/core';
import { Message, TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-single-selection',
  templateUrl: './tree-single-selection.component.html',
  styleUrls: ['./tree-single-selection.component.scss']
})
export class TreeSingleSelectionComponent implements OnInit {
  msgs: Message[];
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
  }

  nodeSelect(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label
    });
  }

  nodeUnselect(event) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label
    });
  }
}
