import matplotlib.pyplot as plt
import networkx as nx

G = nx.DiGraph()


G.add_node("q0", label="q0") 
G.add_node("q1", label="q1")
G.add_node("q2", label="q2")
G.add_node("q3", label="q3")
G.add_node("q4", label="q4")  

G.add_edge("q0", "q1", label="0;x;R")
G.add_edge("q0", "q3", label="y;y;R")
G.add_edge("q1", "q1", label="y;y;R \n0;0;R")
G.add_edge("q1", "q2", label="1;y;L")
G.add_edge("q2", "q2", label="y;y;L \n0;0;L") 
G.add_edge("q2", "q0", label="x;x;R")
G.add_edge("q3", "q3", label="y;y;R")  
G.add_edge("q3", "q4", label="B;B;R")

pos = {
    "q0": (0, 1),
    "q1": (0.7, 1),
    "q2": (1.3, 0.5), 
    "q3": (0.5, 0.2), 
    "q4": (1.4, 0), 
}

plt.figure(figsize=(8, 6))
nx.draw(G, pos, with_labels=True, node_size=2000, node_color='lightblue', font_size=10, font_weight='bold', arrows=True)


nx.draw_networkx_nodes(G, pos, nodelist=["q0"], node_color='lightgreen', node_size=2200) 
nx.draw_networkx_nodes(G, pos, nodelist=["q4"], node_color='salmon', node_size=2200)  

edge_labels = nx.get_edge_attributes(G, 'label')
nx.draw_networkx_edge_labels(G, pos, edge_labels=edge_labels, font_color='red', font_size=12)

for node in G.nodes():
    if len(list(G.predecessors(node))) > 0:
        for i, (u, v) in enumerate(G.in_edges(node)):
            if u == v:  
                nx.draw_networkx_edges(G, pos, edgelist=[(u, v)], connectionstyle=f'arc3, rad={0.1*(i+1)}')

plt.title("Maquina de Turing")
plt.show()
