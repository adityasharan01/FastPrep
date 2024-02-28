const data = {
    name: 'root',
    type: 'folder',
    children: [
        {
            name: 'folder1',
            type: 'folder',
            children: [
                { name: 'file1.txt', type: 'file' },
                { name: 'file2.txt', type: 'file' }
            ]
        },
        {
            name: 'folder2',
            type: 'folder',
            children: [
                { name: 'subfolder', type: 'folder', children: [{ name: 'file3.txt', type: 'file' }] },
                { name: 'file4.txt', type: 'file' }
            ]
        },
        { name: 'file5.txt', type: 'file' }
    ]
};

const TreeNode = ({ node }) => (
    <li>
        <span className={node.type}>{node.name}</span>
        {node.children && node.children.length > 0 && (
            <ul>
                {node.children.map(child => (
                    <TreeNode key={child.name} node={child} />
                ))}
            </ul>
        )}
    </li>
);

const DirectoryTree = () => (
    <div>
        <ul>
            <TreeNode node={data} />
        </ul>
    </div>
);

export default DirectoryTree;