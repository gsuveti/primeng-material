import { Component, OnInit } from '@angular/core';
import { Message, TreeNode } from 'primeng/primeng';
import { NodeService } from '../../node.service';

@Component({
  selector: 'primeng-material-tree-multiple-selection',
  templateUrl: './tree-multiple-selection.component.html',
  styleUrls: ['./tree-multiple-selection.component.scss']
})
export class TreeMultipleSelectionComponent implements OnInit {
  msgs: Message[];
  filesTree: TreeNode[];
  selectedFiles: TreeNode[];

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
